import { useState } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (index) => {
    // if(expandedIndex === index) {
    //   setExpandedIndex(-1)
    // }else{
    //   setExpandedIndex(index)
    // }

    // the reason we are doing this instead is because there is a small bug 
    // in react that if you update a state react takes its time a bit incase you xhange multiple states at once
    // to executethem at the same time to make the app faster. 
    // but because of this if you trigger the same event fast enough, state will be at its old value because of this delay
    // and you wont get the most recent value
    // you dont need to think about it if your state is independent from its old value
    // but if the value is dependent on the old one, then its unlikely because of the speed but still you can consider this,
    // to fix that we are calling a function inside of the setter function so it can take the most up to date value
    setExpandedIndex((currentExpandedIndex) => {
      if(currentExpandedIndex === index) {
        return -1;
      }
      else {
        return index;
      }
    })
  }

  return (
    <>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex
        const icon = (
          <span className=''>
            {isExpanded ? <BiChevronDown /> : <BiChevronRight />}
          </span>
        )

        return (
          <div className='border-x border-t rounded' key={item.id}>
            <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between' onClick={() => handleClick(index)}>
              {item.label}
              {icon}
            </div>
            {isExpanded &&  <div className='border-b p-5'>{item.content}</div>}
          </div>
        )
      })}
    </>
  )
}
