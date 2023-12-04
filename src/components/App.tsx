import TodoList from "./TodoList"
import { Button } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import { useState } from "react"
import TodoForm from "./TodoForm"
import useTodos from "../hooks/useTodos"
import { Todo } from "../interfaces/Todo"

function App() {

  const [showForm, setShowForm] = useState<boolean>(false)
  const { todos, selected, addTodo, updateTodo, deleteTodo, selectTodo } = useTodos()

  const handleAdd = () => {
    selectTodo(null)
    setShowForm(true)
  }

  const handleEdit = (todo: Todo) => {
    selectTodo(todo.id)
    setShowForm(true)
  }

  return (
    <main className="container">
      <section className="card m-5">
        <header className="card-header d-flex justify-content-center">
          <h3 className="card-title px-2 m-2">THINGS TO DO</h3>
        </header>
        <div className="row m-4 g-3 d-flex justify-content-around">
          <div className="col-auto">
            <Button onClick={handleAdd}>
              <FaPlus />
            </Button>
          </div>
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={handleEdit} />
      </section>

      <TodoForm show={showForm} selected={selected} handleClose={() => setShowForm(false)} addTodo={addTodo} updateTodo={updateTodo} />
    </main>
  )
}

export default App
