import React, { useState, useEffect } from 'react';
import '../css/ImageViewer.css'; // Adjust the path as necessary

const ImageViewer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchedImages = [
      { id: 1, src: 'https://assets.codepen.io/12005/windmill.jpg', title: '1' },
      { id: 2, src: 'https://assets.codepen.io/12005/suspension-bridge.jpg', title: '2' },
      { id: 3, src: 'https://assets.codepen.io/12005/sunset.jpg', title: '3' },
      { id: 4, src: 'https://assets.codepen.io/12005/snowy.jpg', title: '4' },
      { id: 5, src: 'https://assets.codepen.io/12005/bristol-balloons1.jpg', title: '5' },
      { id: 6, src: 'https://assets.codepen.io/12005/dog-balloon.jpg', title: '6' },
      { id: 7, src: 'https://assets.codepen.io/12005/abq-balloons.jpg', title: '7' },
      { id: 8, src: 'https://assets.codepen.io/12005/disney-balloon.jpg', title: '8' },
      { id: 9, src: 'https://assets.codepen.io/12005/bristol-harbor.jpg', title: '9' },
      { id: 10, src: 'https://assets.codepen.io/12005/bristol-balloons2.jpg', title: '10' },
      { id: 11, src: 'https://assets.codepen.io/12005/toronto.jpg', title: '11' },
    ];
    setImages(fetchedImages);
  }, []);

  return (
    <section className="gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">
          <span className="gallery">GALLERY</span>
        </h1>
      </header>
      <div className="container">
        {images.map(image => (
          <figure key={image.id}>
            <img src={image.src} alt={image.title} />
            {/* <figcaption><a href="#">{image.title}</a></figcaption> */}
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ImageViewer;
