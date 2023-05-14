import { useState } from 'react';
import Dropdown from '../components/Dropdown';

export default function DropdownPage(){

  const options = [
    { label: 'Red', value: 'red'},
    { label: 'Green', value: 'green'},
    { label: 'Blue', value: 'blue'},
  ]

  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  return(
    <>
      <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
    </>
  );
}