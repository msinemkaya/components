export default function Table({ data, config }){
  return(
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {config.map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((fruit, index) => (
          <tr className='border-b' key={index}>
            {/* <td className='p-3'>
              not so perfect way of using the config object
              {config[0].render(fruit)}
            </td>
            <td className='p-3'>
              <div className={`${fruit.color} p-3 m-2`}></div>
            </td>
            <td className='p-3'>
              {fruit.score}
            </td> */}

            {/* this is better */}
            {config.map((col) => (
              <td key={col.label}>{col.render(fruit)}</td>
            ))}
          </tr> 
        ))}
      </tbody>
    </table>
  );
}