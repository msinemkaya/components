import { useState } from 'react';
import Panel from './Panel';

export default function Dropdown({ options, selection, onSelect }){

  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = ( option ) => {
    setIsOpen(false)
    onSelect(option)
  }

  return(
    <div className='w-48 relative'>
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