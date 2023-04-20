import React, { useState } from 'react';
import { UnsplashService } from '../../angular/unsplash.api.service';

const unsplashService = new UnsplashService();

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);

  const searchPhotos = (query, page) => {
    unsplashService.searchPhotos(query, page)
      .subscribe(photos => {
        setPhotos(photos);
      }, error => {
        console.error(error);
      });
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchPhotos(e.target.value, 1)} />
      {photos.map(photo => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
      ))}
    </div>
  );
}

export default Unsplash;
