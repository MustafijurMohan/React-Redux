import React from 'react'
import { useSelector } from 'react-redux'
import { DeleteTodo } from './DeleteTodo'
import { EditTodoAlert } from './EditTodoAlert'

const TodoList = () => {

    const todoList = useSelector((state) => state.todo.value)

  return (
    <>
        <div className="container-fluid my-4">
            <div className="row">
                <div className="col-12">
                    <table className='table' >
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Task</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoList.map((item, i) => {
                                    return (
                                        <tr key={i.toString()}>
                                            <td>{i}</td>
                                            <td>{item}</td>
                                            <td><button onClick={() => EditTodoAlert(i, item)} className='btn btn-dark' >Edit</button></td>
                                            <td><button onClick={() => DeleteTodo(i)} className='btn btn-info' >Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoList