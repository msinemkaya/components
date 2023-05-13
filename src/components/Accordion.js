import { useState } from 'react'

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex

        return (
          <div key={item.id}>
            <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
            {isExpanded &&  <div>{item.content}</div>}
          </div>
        )
      })}
    </>
  )
}
