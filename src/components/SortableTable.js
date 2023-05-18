import Table from './Table'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'
import useSort from '../hooks/use-sort'

export default function SortableTable(props) {
  const { config, data } = props
  
  // we took all the states and reletad functions to those states that not contain any jsx and moved them to a custom hook
  // this way we made sorting data reusable for all the components
  const { sortBy, sortOrder, sortedData, setSortLabel } = useSort(data, config)

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
          onClick={() => setSortLabel(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

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
