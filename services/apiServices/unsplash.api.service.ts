const fetch = require('node-fetch');

class UnsplashService {
  constructor(accessKey) {
    this.accessKey = accessKey;
    this.apiUrl = 'https://api.unsplash.com';
  }

  async searchPhotos(query, page, perPage = 10) {
    const url = `${this.apiUrl}/search/photos?query=${query}&page=${page}&per_page=${perPage}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to search photos: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  }

  async getRandomPhoto() {
    const url = `${this.apiUrl}/photos/random`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get random photo: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}

module.exports = UnsplashService;
