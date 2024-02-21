import React from 'react';
import Modal from 'react-modal';

interface Props {
  image: string;
  characterInfo: any;
  onClose: () => void;
}
const ModalComp: React.FC<Props> = ({ image, characterInfo, onClose }) => {
  return (
    <>
      <Modal
        isOpen={true}
        contentLabel='Example Modal'
        className='w-4/12 h-2/4 rounded-lg shadow-lg bg-blue-400 p-5 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 '
      >
        <div className=' flex flex-col sm:flex-row justify-between items-center'>
          <div className=' text-4xl text-gray-100'>{characterInfo.name}</div>
          <div
            className=' cursor-pointer text-4xl font-semibold -mt-1 hover:scale-110 transition-all hover:duration-100 '
            onClick={onClose}
          >
            x
          </div>
        </div>
        <div className=' mt-6 flex flex-col sm:flex-row  justify-between items-center '>
          <div className=' flex flex-col gap-4 text-gray-100'>
            <h1 className=' hover:scale-105 transition-all hover:duration-300'>{`Height: ${characterInfo.height}`}</h1>
            <h1 className=' hover:scale-105 transition-all hover:duration-300'>{`Weight: ${characterInfo.mass}`}</h1>
            <h1 className=' hover:scale-105 transition-all hover:duration-300'>{`Number of Films: ${characterInfo.films?.length}`}</h1>
            <h1 className=' hover:scale-105 transition-all hover:duration-300'>{`Created : ${new Date(
              characterInfo.created
            )
              .toISOString()
              .split('T')[0]
              .split('-')
              .reverse()
              .join('/')}`}</h1>
            <h1 className='hover:scale-105 transition-all hover:duration-300'>{`DOB: ${characterInfo.birth_year}`}</h1>
          </div>

          <img
            src={image}
            alt='Lorem Image'
            className=' w-1/2 h-24 mt-2 sm:mt-0 sm:h-[200px] rounded-lg border shadow-md hover:scale-105 transition-all hover:duration-500'
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalComp;
