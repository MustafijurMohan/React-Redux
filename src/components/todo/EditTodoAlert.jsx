import Swal from "sweetalert2"
import store from "../../redux/store/store"
import { EditTodo } from "../../redux/state/todo/todoSlice"

export const EditTodoAlert = (i, item) => {
    Swal.fire({
        title: "Update Task !",
        input: 'text',
        inputValue: item,
        inputValidator: (value) => {
            if(value) {
                store.dispatch(EditTodo({index: i, task: value}))
            }
        }
      })
}

