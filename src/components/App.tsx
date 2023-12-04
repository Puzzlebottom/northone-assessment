import TodoList from "./TodoList"
import { Button } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import { useState } from "react"
import TodoForm from "./TodoForm"
import useTodos from "../hooks/useTodos"

function App() {

  const [showForm, setShowForm] = useState<boolean>(false)
  const { todos, selected, addTodo, updateTodo, deleteTodo, selectTodo } = useTodos()

  return (
    <main className="container">
      <section className="card m-5">
        <header className="card-header d-flex justify-content-center">
          <h3 className="card-title px-2 m-2">THINGS TO DO</h3>
        </header>
        <div className="row m-4 g-3 d-flex justify-content-around">
          <div className="col-auto">
            <Button onClick={() => setShowForm(true)}>
              <FaPlus />
            </Button>
          </div>
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </section>

      <TodoForm show={showForm} handleClose={() => setShowForm(false)} addTodo={addTodo} />
    </main>
  )
}

export default App
