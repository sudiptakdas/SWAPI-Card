import React from 'react';

interface Props {
  image: string;
  title: string;
  onClick?: () => void;
}
const ImageCard: React.FC<Props> = ({ image, title, onClick }) => {
  return (
    <>
      <figure
        className=' cursor-pointer relative max-w-sm transition-all duration-300rounded-lg filter grayscale hover:grayscale-0 hover:scale-105'
        onClick={onClick}
      >
        <a href='#'>
          <img
            className='rounded-lg w-[250px] h-[250px]  border-2 border-gray-100 '
            src={image}
            alt='image description'
          />
        </a>
        <figcaption className='absolute px-4 text-lg text-white bottom-6'>
          <p>{title}</p>
        </figcaption>
      </figure>
    </>
  );
};
export default ImageCard;
