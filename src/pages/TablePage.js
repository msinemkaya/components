// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

export default function TablePage(){

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ]

  // we create a config object to make our table less hardcoded and reusable
  // so we pass a render function for the each column to determine what we want to show from our fruit object
  const config = [
    { 
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    { 
      label: 'Color',
      render: (fruit) => <div className={`${fruit.color} p-3 m-2`}></div>
    },
    { 
      label: 'Score',
      render: (fruit) => fruit.score,

      // we will add this with sortable table from now on
      // header: () => <th className='bg-red-500'>Score</th>

      // now we are passing a sortValue function instead
      sortValue: (fruit) => fruit.score
    },
  ]

  return(
    <>
      {/* we are showing sortableTable instead of table */}
      <SortableTable data={data} config={config}/>
    </>
  );
}