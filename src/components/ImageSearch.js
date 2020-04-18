import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(term);
  };
  return (
    <div className='max-w-sm rounde overflow-hidden my-12 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
          <input
            onChange={(e) => setTerm(e.target.value)}
            className='appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search image term...'
            aria-label='term name'
          />
          <button
            className='flex-shrink-0 border-transparent border-4 text-teal-500 outline-none hover:text-teal-700 transition ease-in duration-300 text-sm py-1 px-2 rounded'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
