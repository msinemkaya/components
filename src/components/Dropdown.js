import { useState } from 'react';

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
      <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>
        {/* {selection ? selection.label : 'Select..' } */}
        {selection?.label || 'Select..'}
      </div>
      {isOpen && (
        <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>
          {options.map((option) => (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}> {option.label} </div>
          ))}
        </div>
      )}
    </div>
  );
}