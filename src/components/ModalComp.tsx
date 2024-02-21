import React from 'react';
import Modal from 'react-modal';

interface Props {
  characterInfo: any;
  onClose: () => void;
}
const ModalComp: React.FC<Props> = ({ characterInfo, onClose }) => {
  console.log(characterInfo, '@@@@');
  return (
    <>
      <Modal isOpen={true} contentLabel='Example Modal'>
        <div className=' flex justify-between'>
          <div className=' text-4xl'>{characterInfo.name}</div>
          <div
            className=' cursor-pointer text-4xl font-semibold'
            onClick={onClose}
          >
            x
          </div>
        </div>
        <div>
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
      </Modal>
    </>
  );
};

export default ModalComp;
