import React from 'react';

const DisplayCurrentImage = ({ currentImage }) => {
  return (
    <>
      <div>
        <h2>Selected Image</h2>
        {currentImage ? <img src={currentImage} /> : <p>No Image Selected</p>}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          margin: 0;
          border-top: 1px solid black;
        }
        img {
          width: 400px;
        }
        h2 {
          font-size: 1.1rem;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default DisplayCurrentImage;
