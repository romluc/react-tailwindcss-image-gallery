import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    let url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // async function getUserAsync(name)
    // {
    //   let response = await fetch(`https://api.github.com/users/${name}`);
    //   let data = await response.json()
    //   return data;
    // }
    // getUserAsync('yourUsernameHere').then((data) => console.log(data));
  }, [images, term]);
  return (
    <div className='container mx-auto'>
      <ImageCard />
    </div>
  );
}

export default App;
