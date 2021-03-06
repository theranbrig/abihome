import React from 'react';

const ImageList = ({ images, selectCurrentImage, currentImage }) => {
  return (
    <>
      <div className='image-list-container'>
        <h1>Select an Image</h1>
        <ul className='image-list'>
          {images.map((image, idx) => (
            <button
              key={idx}
              aria-label={`Select Icon ${idx + 1}`}
              onClick={() => selectCurrentImage(image)}
            >
              <img src={image} alt={`Icon ${idx + 1}`} />
            </button>
          ))}
        </ul>
      </div>
      <style jsx>{`
        div.image-list-container {
          width: 100%;
          overflow-y: scroll;
          height: 20vh;
        }
        .image-list-container h1 {
          text-align: center;
          font-size: 1.4rem;
          font-weight: 300;
        }
        ul.image-list {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          padding: 0 20px;
        }
        .image-list img {
          height: 80px;
        }
        .image-list button {
          border: none;
          background-color: transparent;
        }
        @media only screen and (max-device-width: 768px) {
          .image-list img {
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default ImageList;
