import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className=' flex flex-col  items-center justify-center p-10'>
      <h1>Oops! Error has happen navigae to home page</h1>
      <Link
        to='/'
        className=' underline text-blue-400 font-semibold text-xl hover:scale-110'
      >
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
