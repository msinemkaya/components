import { useState } from 'react';
import Modal from '../components/Modal'
import Button from '../components/Button'

export default function ModalPage(){

  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = () => {
    setShowModal(true)
  }

  const actionBar = (
    <Button primary onClick={handleClose}>Accept</Button>
  )

  return(
    <div>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, deserunt.</p>
        </Modal>
      )}
    </div>
  );
}