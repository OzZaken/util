import React, { useState } from 'react';
import UnsplashService from './UnsplashService';

const unsplashService = new UnsplashService('YOUR_ACCESS_KEY');

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);

  const searchPhotos = async (query, page) => {
    try {
      const results = await unsplashService.searchPhotos(query, page);
      setPhotos(results);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomPhoto = async () => {
    try {
      const result = await unsplashService.getRandomPhoto();
      setPhotos([result]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => getRandomPhoto()}>Get Random Photo</button>
      <input type="text" onChange={(e) => searchPhotos(e.target.value, 1)} />
      {photos.map((photo) => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
      ))}
    </div>
  );
};

export default Unsplash;
