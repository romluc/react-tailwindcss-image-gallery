import React from 'react';

const ImageSearch = () => {
  return (
    <div className='max-w-sm rounde overflow-hidden my-10 mx-auto'>
      <form className='w-full max-w-sm'>
        <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search image term...'
            aria-label='term name'
          />
          <button
            className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded'
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
