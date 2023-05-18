import { useState } from 'react'
import Table from './Table'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'

export default function SortableTable(props) {
  const { config, data } = props
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    // we look if the object has a sortValue key and if there is we return this object
    // with adding additional header function to it too
    return {
      ...column,
      header: () => (
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => handleClick(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

  const handleClick = (label) => {
    // if (sortOrder === null) {
    //   setSortOrder('asc')
    // } else if (sortOrder === 'asc') {
    //   setSortOrder('desc')
    // } else if (sortOrder === 'desc') {
    //   setSortOrder(null)
    // }

    if (sortBy && label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    switch (sortOrder) {
      case null:
        setSortOrder('asc')
        setSortBy(label)
        break
      case 'asc':
        setSortOrder('desc')
        setSortBy(label)
        break
      case 'desc':
        setSortOrder(null)
        setSortBy(null)
        break
    }
  }

  let sortedData = data
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)

    // we make a copy of the data because we dont want to change(modify) it directly since it is a prop
    // we never ever modify a prop directly
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return (
    <>
      {/* we pass all the props to table directly */}
      {/* and we kinda overwrite the config prop and data too */}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </>
  )
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    )
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    )
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    )
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    )
  }
}
