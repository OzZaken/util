const cloudinary = require('cloudinary').v2;

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  uploadImage: async (imageFile, folderName) => {
    try {
      const uploadedImage = await cloudinary.uploader.upload(imageFile, {
        folder: folderName
      });
      return uploadedImage;
    } catch (error) {
      console.error(error);
    }
  },

  deleteImage: async (publicId) => {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return result;
    } catch (error) {
      console.error(error);
    }
  },

  transformImage: async (publicId, options, folderName) => {
    try {
      const transformedImage = await cloudinary.url(publicId, {
        transformation: options,
        folder: folderName
      });
      return transformedImage;
    } catch (error) {
      console.error(error);
    }
  }
};
// ---------------------------------   Use   ---------------------------------  
// const cloudinaryService = require('./cloudinaryService');

// Upload an image to a folder named 'my-folder'
// const uploadedImage = await cloudinaryService.uploadImage('/path/to/image.jpg', 'airbnb');

// Transform an image and store it in a folder named 'my-folder'
// const transformedImage = await cloudinaryService.transformImage('public-id', { width: 500 }, 'my-folder');
