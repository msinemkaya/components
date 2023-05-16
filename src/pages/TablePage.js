import Table from '../components/Table';

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
    },
    { 
      label: 'Color',
      render: (fruit) => <div className={`${fruit.color} p-3 m-2`}></div>
    },
    { 
      label: 'Score',
      render: (fruit) => fruit.score
    },
  ]

  return(
    <>
      <Table data={data} config={config}/>
    </>
  );
}