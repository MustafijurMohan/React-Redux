import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setCustom } from '../../redux/state/counter/counterSlice'

const Counter = () => {

    const myNumber = useRef()
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    


  return (
    <div>
        <div className="card ">
            <div className="card-header text-center bg-secondary text-white">
                <h4>My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>Count: {count}</h1>
            </div>
            <div className='m-2' >
                <button onClick={() => dispatch(increment())} className='btn btn-primary mx-3' >Increase</button>
                <button onClick={() => dispatch(decrement())} className='btn btn-info' >Decrease</button>
            </div>
            <div className='my-2'>
                <input ref={myNumber} className=' form-control w-50 m-2' type="number" />
                <button onClick={() => dispatch(setCustom(myNumber.current.value))} className='btn btn-dark w-50 m-2'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Counter