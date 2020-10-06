import React from 'react';

const DisplayCurrentImage = ({ currentImage }) => {
  return (
    <>
      <div className='current-image'>
        <h2>Currently Selected Image</h2>
        {currentImage ? <img src={currentImage} /> : <p>No Image Selected</p>}
      </div>
      <style jsx>{`
        div.current-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          margin: 0;
          border-top: 1px solid black;
        }
        .current-image img {
          width: 400px;
        }
        .current-image h2 {
          font-size: 1.1rem;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default DisplayCurrentImage;
