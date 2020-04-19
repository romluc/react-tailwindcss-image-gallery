import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 mx-auto'>
      <img
        src={image.webformatURL}
        alt='randomly fetched file from unsplash'
        className='w-full'
      />
      <div className='flex flex-col px-6 py-4'>
        <div className='font-bold text-teal-600 text-lg container'>
          Photo by {image.user}
        </div>
        <ul className='text-sm'>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4 text-xs'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
