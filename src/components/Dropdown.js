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
    <>
      <div onClick={handleClick}>{selection ? selection.label : 'Select..' }</div>
      {isOpen && (
        <div>
          {options.map((option) => (
            <div onClick={() => handleOptionClick(option)} key={option.value}> {option.label} </div>
          ))}
        </div>
      )}
    </>
  );
}