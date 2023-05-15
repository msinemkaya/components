import { useEffect, useRef, useState } from 'react';
import Panel from './Panel';

export default function Dropdown({ options, selection, onSelect }){

  const [isOpen, setIsOpen] = useState(false)
  const dropdown = useRef(null)

  useEffect(() => {
    // if theevent is not inside of our dropdown div 
    // set isOpen to false. so this way if user clicks on something else the dropdown is going to close itself
    const handler = (e) => {

      // if there is no reference to an element then do nothing
      if (!dropdown.current) {
        return;
      }

      if(!dropdown.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    // add this handler to the document on click event so that we can check the whole page for the click if it is inside
    // of the dropdown or not. 
    // and we give 3rd argument of true to make this event listener start on capture phase
    // this way it will not be starting at bubbling phase and our isOpen state will not be executed and rerender the page 
    // before this listener is finished (this is important because since we change the is open state
    // if the components isOpen state changes and rerenders before handler on document, our click will be counted as outside of the
    // scope of the component)
    document.addEventListener('click', handler, true)

    // and lastly we are using clean up function to not cause memory leak and unnecessaryly creating the same event listener every time
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = ( option ) => {
    setIsOpen(false)
    onSelect(option)
  }

  return(
    <div className='w-48 relative' ref={dropdown}>
      <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
        {/* {selection ? selection.label : 'Select..' } */}
        {selection?.label || 'Select..'}
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full'>
          {options.map((option) => (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}> {option.label} </div>
          ))}
        </Panel>
      )}
    </div>
  );
}