import React from 'react';

function App() {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img
        src='https://source.unsplash.com/random'
        alt='randomly fetched file from unsplash'
        className='w-full'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-teal-600 text-xl'>Photo by John Doe</div>
        <ul>
          <li>
            <strong>Views: </strong>
            400
          </li>
          <li>
            <strong>Likes: </strong>
            300
          </li>
          <li>
            <strong>Downloads: </strong>
            200
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #tag1
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #tag2
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
