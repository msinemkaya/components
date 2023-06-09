import { useEffect } from 'react';
import ReactDOM from 'react-dom'

export default function Modal({ onClose, children, actionBar }){

  // to prevent user from scrolling when modal pops up
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  // with portal you are telling react to place the html produced by this component to the given place in document
  // insted of where it would be normally

  // why do we do that? in this case since we tell our components to be absolute,
  // if there is another positioned element that is higher in hierarchy than this components htmls
  // than our absolute positioning will be trapped inside of that element.
  // but we want out component to cover the full screen so in other words take the body as a parent or not get trapped by another position

  // thats why insted of putting it deep inside we are creating a portal on the html document to place it where we want
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className='flex flex-col h-full justify-between'>
          {children}
          <div className='flex justify-end'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,

    // where we want this html to be
    document.querySelector('.modal-container')
  );
}