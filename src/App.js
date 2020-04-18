import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Loading from './components/Loading';

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
  }, [term]);
  return (
    <>
      <Header />
      <div className='w-screen bg-gray-800'>
        <div className='container mx-auto py-4'>
          <ImageSearch searchText={(text) => setTerm(text)} />
          {isLoading ? (
            <Loading />
          ) : (
            <div className='grid grid-cols-3 gap-4'>
              {images.map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
