import { useState } from 'react';
import Table from './Table';

export default function SortableTable(props){

  const { config, data } = props
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const updatedConfig = config.map((column) => {
    if(!column.sortValue) {
      return column
    }

    // we look if the object has a sortValue key and if there is we return this object
    // with adding additional header function to it too
    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label}</th>
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

    switch (sortOrder) {
      case null:
        setSortOrder('asc')
        setSortBy(label)
        break;
      case 'asc':
        setSortOrder('desc')
        setSortBy(label)
        break;
      case 'desc':
        setSortOrder(null)
        setSortBy(null)
        break;
    }
  }
  
  let sortedData = data
  if(sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy)
    
    // we make a copy of the data because we dont want to change(modify) it directly since it is a prop
    // we never ever modify a prop directly
    sortedData = [...data].sort((a,b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if(typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      }else {
        return ( valueA - valueB ) * reverseOrder
      }

    })
  }

  return(
    <>
      {/* we pass all the props to table directly */}
      {/* and we kinda overwrite the config prop and data too */}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </>
  );
}