import Head from 'next/head';

import { useEffect, useState } from 'react';
import ImageList from '../components/ImageList';
import DisplayCurrentImage from '../components/DisplayCurrentImage';
import PastImages from '../components/PastImages';

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageHistory, setImageHistory] = useState([]);

  const fetchApiData = () => {
    fetch('https://abihome-test.herokuapp.com/test/images')
      .then((res) => res.json())
      .then((data) => setImages(data));
  };

  const selectCurrentImage = (image) => {
    if (image !== imageHistory[0]) {
      setCurrentImage(image);
      setImageHistory([image, ...imageHistory]);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      <Head>
        <title>Abihome Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main-container'>
        <ImageList images={images} selectCurrentImage={selectCurrentImage} />
        <div className='display-images-container'>
          <PastImages imageHistory={imageHistory} selectCurrentImage={selectCurrentImage} />
          <DisplayCurrentImage currentImage={currentImage} />
        </div>
      </main>
      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          justify-content: start;
        }
        .display-images-container {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 4fr;
          overflow: hidden;
        }
      `}</style>
      <style global jsx>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
