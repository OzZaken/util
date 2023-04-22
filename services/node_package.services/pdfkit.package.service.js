const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

class PDFService {
  constructor(options = {}) {
    this.options = {
      font: options.font || 'Helvetica',
      fontSize: options.fontSize || 12,
      margin: options.margin || 50,
    };
  }

  createPDF(content, filename) {
    const doc = new PDFDocument({
      size: 'letter',
      margins: {
        top: this.options.margin,
        bottom: this.options.margin,
        left: this.options.margin,
        right: this.options.margin,
      },
      info: {
        Title: filename,
      },
    });

    doc.font(this.options.font).fontSize(this.options.fontSize);

    // Add the content to the PDF
    if (typeof content === 'string') {
      doc.text(content);
    } else if (Array.isArray(content)) {
      content.forEach((line) => {
        doc.text(line);
      });
    } else {
      console.error('Unsupported content type:', typeof content);
      return;
    }

    // Create the output directory if it does not exist
    const outputPath = path.dirname(filename);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Pipe the PDF to a file stream
    const writeStream = fs.createWriteStream(filename);
    doc.pipe(writeStream);

    // Finalize the PDF and close the stream
    doc.end();
    writeStream.on('finish', () => {
      console.log(`PDF created successfully: ${filename}`);
    });
    writeStream.on('error', (err) => {
      console.error('Error creating PDF:', err);
    });
  }
}

module.exports = PDFService;

const pdf = new PDFService()

const content = 'Hello, World!';
const filename = 'output/example.pdf';

pdf.createPDF(content, filename)
