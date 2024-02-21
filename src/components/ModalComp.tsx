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
        className='w-4/12 h-2/4 bg-green-100 p-4 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 '
      >
        <div className=' flex justify-between items-center'>
          <div className=' text-4xl'>{characterInfo.name}</div>
          <div
            className=' cursor-pointer text-4xl font-semibold '
            onClick={onClose}
          >
            x
          </div>
        </div>
        <div className=' mt-6 flex  justify-between'>
          <div className=' flex flex-col gap-4'>
            <h1>{`Height: ${characterInfo.height}`}</h1>
            <h1>{`Weight: ${characterInfo.mass}`}</h1>
            <h1>{`Number of Films: ${characterInfo.films?.length}`}</h1>
            <h1>{`Created : ${new Date(characterInfo.created)
              .toISOString()
              .split('T')[0]
              .split('-')
              .reverse()
              .join('/')}`}</h1>
            <h1>{`DOB: ${characterInfo.birth_year}`}</h1>
          </div>

          <img
            src={image}
            alt='Lorem Image'
            className=' w-1/2 h-[200px] rounded-lg'
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalComp;
