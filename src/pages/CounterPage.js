import { useState } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const [valueToAdd, setValueToAdd] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleChange = ({ target: {value} }) => {
    const val = parseInt(value) || 0 //incase the input is empty string
    // because if you try to parse the empty string with parseInt you will get a NaN error
    setValueToAdd(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setCount(count + valueToAdd)
    setValueToAdd(0)
  }

  return (
    <Panel>
      <h1 className='text-lg'> Count is {count}</h1>
      <div className='flex flex-row'>
        <Button rounded onClick={increment} className={'mr-3'}>
          Increment
        </Button>
        <Button rounded onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type='number'
          value={valueToAdd || ''}
          onChange={handleChange}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}
