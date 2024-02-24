import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/ErrorImage.jpg';

const ErrorPage: React.FC = () => {
  return (
    <div className=' flex flex-col  items-center justify-center p-10'>
      <h1>Oops! Error has happen, please navigate to home page</h1>
      <Link
        to='/'
        className=' underline text-blue-400 font-semibold text-xl hover:scale-110'
      >
        Home
      </Link>
      <img src={ErrorImage} alt='Error Image' className=' w-1/2 h-1/2' />
    </div>
  );
};

export default ErrorPage;
