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

  return(
    <div>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && <Modal onClose={handleClose}/>}
    </div>
  );
}