import { useState } from 'react'

export default function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const setSortLabel = (label) => {
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

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortLabel,
  }
}
