import { useState } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

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
            <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between' onClick={() => setExpandedIndex(index)}>
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
