import chalk from 'chalk'
class ChalkService {
  constructor() {
    this.theme = {
      primary: chalk.blueBright,
      success: chalk.greenBright,
      warning: chalk.yellowBright,
      danger: chalk.redBright,
      info: chalk.cyanBright,
      highlight: chalk.magentaBright,
      muted: chalk.gray,
      underline: chalk.underline,
      bold: chalk.bold,
      inverse: chalk.inverse,
      dim: chalk.dim,
    };
  }

  setTheme(theme) {
    if (typeof theme !== 'object') {
      throw new TypeError('Theme must be an object.');
    }

    this.theme = {
      ...this.theme,
      ...theme,
    };
  }

  colorize(text, style) {
    if (typeof style === 'string') {
      style = [style];
    }

    if (!Array.isArray(style)) {
      throw new TypeError('Style must be a string or an array of strings.');
    }

    const styles = style.map(s => this.theme[s]);

    return styles.reduce((result, s) => s(result), text);
  }

  log(text, style) {
    const formattedText = this.colorize(text, style);
    console.log(formattedText);
  }

  warn(text) {
    this.log(text, 'warning');
  }

  error(text) {
    this.log(text, 'danger');
  }

  success(text) {
    this.log(text, 'success');
  }

  info(text) {
    this.log(text, 'info');
  }

  highlight(text) {
    this.log(text, 'highlight');
  }
}

module.exports = ChalkService;

// const ChalkService = require('./ChalkService');

const chalkService = new ChalkService();
chalkService.setTheme({
  primary: chalk.rgb(100, 149, 237),
  success: chalk.green,
  warning: chalk.keyword('orange'),
});

chalkService.log('This is a primary message.', ['primary', 'underline']);
chalkService.warn('This is a warning message.');
chalkService.error('This is an error message.');
chalkService.success('This is a success message.');
chalkService.info('This is an info message.');
chalkService.highlight('This is a highlighted message.');
