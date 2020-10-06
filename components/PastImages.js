import React from 'react';

const PastImages = ({ imageHistory, selectCurrentImage }) => {
  return (
    <>
      <div>
        <h2>Previously Selected Images</h2>
        {imageHistory.length ? (
          imageHistory.map((image, idx) => (
            <button
              key={idx}
              onClick={() => selectCurrentImage(image)}
              aria-label={`Select Previous Icon ${idx}`}
            >
              {idx + 1} <img src={image} />
            </button>
          ))
        ) : (
          <p>No Previous Image</p>
        )}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          width: 100%;
          overflow-y: auto;
          height: 80vh;
          border-top: 1px solid black;
          border-right: 1px solid black;
        }
        img {
          width: 50px;
          display: block;

          margin: 5px auto;
        }
        h2 {
          font-size: 1.1rem;
          font-weight: 300;
          text-align: center;
        }
        button {
          border: none;
          background-color: transparent;
          border-top: 1px solid black;
          padding: 5px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default PastImages;
