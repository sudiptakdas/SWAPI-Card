import React, { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';
import Pagination from '../components/Pagination';
import Modal from '../components/ModalComp';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [image, setImage] = useState('');
  const [openCardModal, setOpenCardModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?page=${currentPage}&search=${searchQuery}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage, searchQuery]);

  const openModal = (character: any) => {
    setSelectedCharacter(character);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='App'>
      <h1 className=' font-bold text-4xl underline'>Star Wars Characters</h1>

      <input
        type='text'
        placeholder='Search characters...'
        value={searchQuery}
        onChange={handleSearchInputChange}
        className=' w-1/4 p-4 mt-10 border-2 border-gray-400 rounded-lg'
      />

      {loading && (
        <div className=' flex items-center justify-center mt-6 w-full  rounded-lg dark:bg-gray-800 dark:border-gray-700'>
          <div role='status'>
            <svg
              aria-hidden='true'
              className='w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
          </div>
          <span className=' text-3xl ml-2'>Loading...</span>
        </div>
      )}
      {error && <p>{error}</p>}
      <div className='character-container p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {characters?.map((character: any, index: number) => (
          <ImageCard
            key={index}
            title={character.name}
            image={`https://picsum.photos/200?random=${index}`}
            onClick={() => {
              setOpenCardModal(true);
              openModal(character);
              setImage(`https://picsum.photos/200?random=${index}`);
            }}
          />
        ))}
      </div>
      <div className=' mt-4'>
        <Pagination
          currentPage={currentPage}
          paginate={(pageNumber: number) => setCurrentPage(pageNumber)}
        />
      </div>
      {openCardModal && (
        <div className=' w-[200px] h-[200px]'>
          <Modal
            image={image}
            characterInfo={selectedCharacter}
            onClose={() => setOpenCardModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
