import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swapi from './assets/Swapi.png';
import Luke from './assets/Luke.jpeg';
import JarJar from './assets/JarJar.jpeg';
import Robot from './assets/Robot.jpeg';
import Ship from './assets/Ship.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='relative h-screen bg-black flex justify-center items-center rounded-xl shadow-xl'>
      <div className='text-center'>
        <h1 className='text-6xl text-white mb-8 hover:animate-bounce'>
          Welcome to Star Wars!
        </h1>
        <p className='text-xl text-gray-400 mb-8 hover:animate-bounce'>
          Explore the galaxy and discover fascinating characters.
        </p>
        <Link
          to='/home'
          className='inline-block px-6 py-3 bg-blue-500 text-white font-semibold text-xl rounded-full shadow-md hover:bg-blue-600 hover:scale-110 transition duration-300 ease-in-out animate-pulse'
        >
          Enter the Galaxy
        </Link>
        <img
          src={Ship}
          className='absolute top-16 left-16 w-40 h-40 rounded-lg transform hover:scale-110 animate-pulse'
        />
        <img
          src={Luke}
          className=' absolute top-16 right-16 w-40 h-40  rounded-lg  hover:scale-110 animate-pulse'
        />
        <img
          src={JarJar}
          className=' absolute bottom-16 left-16 w-40 h-40  rounded-lg  hover:scale-110 animate-pulse'
        />
        <img
          src={Robot}
          className=' absolute bottom-16 right-16 w-40 h-40  rounded-lg  hover:scale-110 animate-pulse'
        />
      </div>
    </div>
  );
}

export default App;
