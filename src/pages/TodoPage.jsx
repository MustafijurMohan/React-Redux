import React from 'react'
import CreateTodo from '../components/todo/CreateTodo'
import TodoList from '../components/todo/TodoList'

const TodoPage = () => {
  return (
    <>
        <div className="container-fluid m-5">
            <div className="row">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header">
                            <h4>My Todo App</h4>
                        </div>
                        <div className="card-body">
                            <CreateTodo />
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoPage