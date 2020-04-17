import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // async function fetchImagesAPI(url) {
    //   try {
    //     const response = await fetch(url);
    //     const data = response.json();
    //     setImages(data.hits);
    //     setIsLoading(false);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // fetchImagesAPI(url);
  }, [term]);
  return (
    <div className='w-screen bg-gray-800'>
      <div className='container mx-auto py-4'>
        <div className='grid grid-cols-3 gap-4'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
