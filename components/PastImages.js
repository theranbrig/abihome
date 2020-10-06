import React from 'react';

const PastImages = ({ imageHistory, selectCurrentImage }) => {
  return (
    <>
      <div className='image-history-container'>
        <h2>Previously Selected Images</h2>
        {imageHistory.length ? (
          imageHistory.map((image, idx) => (
            <button
              key={idx}
              onClick={() => selectCurrentImage(image)}
              aria-label={`Select Previous Icon ${idx + 1}`}
            >
              {idx + 1} <img src={image} alt={`Previous Icon ${idx + 1}`} />
            </button>
          ))
        ) : (
          <p>No Previous Images</p>
        )}
      </div>
      <style jsx>{`
        div.image-history-container {
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
        .image-history-container img {
          width: 50px;
          display: block;

          margin: 5px auto;
        }
        .image-history-container h2 {
          font-size: 1.1rem;
          font-weight: 300;
          text-align: center;
        }
        .image-history-container button {
          border: none;
          background-color: transparent;
          border-top: 1px solid black;
          padding: 5px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .image-history-container {
            flex-direction: row !important;
            height: 20vh !important;
            overflow-x: scroll;
            overflow-y: none;
          }
          .image-history-container button {
            border-top: none;
          }
        }
      `}</style>
    </>
  );
};

export default PastImages;
