import React, { useState, useEffect } from 'react';
import ljubav from './ljubav';
import izracunaj from './ljubav';

const ImageAPI = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const zensko = [
            'https://source.unsplash.com/random/1',
          ];
         const musko = [
            'https://source.unsplash.com/random/2',
          ];
    const zenskoMusko = [zensko, musko];

          setImages(zenskoMusko);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
        
      };
  
      fetchImages();
    }, []);
  
    return (
      <div className="image-container">
        <div className="images">
          {images.map((imageUrl, index) => (
            <img key={index} className='thumbnail' src={imageUrl} alt={`Random slika ${index + 1}`} />
          ))}
        </div>
      </div>
    );
    
  };
  
  
  export default ImageAPI;
