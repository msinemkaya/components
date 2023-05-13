import { useState } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex
        const icon = (
          <span>
            {isExpanded ? <BiChevronDown /> : <BiChevronRight />}
          </span>
        )

        return (
          <div key={item.id}>
            <div onClick={() => setExpandedIndex(index)}>
              {icon}
              {item.label}
            </div>
            {isExpanded &&  <div>{item.content}</div>}
          </div>
        )
      })}
    </>
  )
}
