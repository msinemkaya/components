import Table from './Table';

export default function SortableTable(props){

  const { config } = props

  const updatedConfig = config.map((column) => {
    if(!column.sortValue) {
      return column
    }

    // we look if the object has a sortValue key and if there is we return this object
    // with adding additional header function to it too
    return {
      ...column,
      header: () => <th>{column.label}</th>
    }
  })

  return(
    <>
      {/* we pass all the props to table directly */}
      {/* and we kinda overwrite the config prop */}
      <Table {...props} config={updatedConfig} />
    </>
  );
}