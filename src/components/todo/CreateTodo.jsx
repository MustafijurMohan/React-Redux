import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { AddTodo } from '../../redux/state/todo/todoSlice'

const CreateTodo = () => {

    const inputTask = useRef()
    const dispatch = useDispatch()


  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input ref={inputTask} className='form-control' type="text" placeholder='Task Name' />
                </div>
                <div className="col-md-2">
                    <button onClick={() => dispatch(AddTodo(inputTask.current.value))} className='btn btn-primary' >ADD TODO</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateTodo