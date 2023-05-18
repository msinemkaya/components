import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

// state is our state
// action is whatever we pass into dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }

    case 'DECREMENT':
      return { ...state, count: state.count - 1 }

    case 'VALUE_CHANGE':
      return { ...state, valueToAdd: action.payload }

    case 'ADD_VALUE':
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 }

    default:
      throw new Error('unexpected action type')
    // or return the state. up to you
  }
}

export default function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)

  // state: state variable
  // dispatch: function to change state (like setter functions) it represents the 'action' argument in the reducer function
  // 2nd argument of the useReducer (initialValue): initial values of the states
  // reducer: the function we use to determine which action will be taken for which state (state key to be precise because
  // we only have one state which is an object with keys, so this way we compress our different states into one)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const increment = () => {
    // setCount(count + 1)

    // what we pass into the dispatch will go to reducer function
    dispatch({
      type: 'INCREMENT',
    })
  }

  const decrement = () => {
    // setCount(count - 1)
    dispatch({
      type: 'DECREMENT',
    })
  }

  const handleChange = ({ target: { value } }) => {
    const val = parseInt(value) || 0 //incase the input is empty string
    // because if you try to parse the empty string with parseInt you will get a NaN error
    // setValueToAdd(val)

    dispatch({
      type: 'VALUE_CHANGE',
      payload: val,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // setCount(count + valueToAdd)
    // setValueToAdd(0)

    dispatch({
      type: 'ADD_VALUE',
    })
  }

  return (
    <Panel>
      <h1 className='text-lg'> Count is {state.count}</h1>
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
          value={state.valueToAdd || ''}
          onChange={handleChange}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}
