import TodoList from "./TodoList"
import { Button, Form } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import { useState } from "react"
import TodoForm from "./TodoForm"
import useTodos from "../hooks/useTodos"
import { Todo } from "../interfaces/Todo"

function App() {

  const [showForm, setShowForm] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState('dueDate')
  const { todos, selected, addTodo, updateTodo, deleteTodo, selectTodo } = useTodos()

  const handleAdd = () => {
    selectTodo(null)
    setShowForm(true)
  }

  const handleEdit = (todo: Todo) => {
    selectTodo(todo.id)
    setShowForm(true)
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.currentTarget.value)
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
          <div className="col-3">
            <div className="row">
              <label htmlFor="sort" className="col-auto col-form-label">
                Sort By
              </label>
              <select
                id="sort"
                className="col form-select"
                aria-label="sort by"
                onChange={handleSort}
              >
                <option value="dueDate">Due Date</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
              </select>
            </div>
          </div>
        </div>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          editTodo={handleEdit}
          sortBy={sortBy}
        />
      </section>

      <TodoForm show={showForm} selected={selected} handleClose={() => setShowForm(false)} addTodo={addTodo} updateTodo={updateTodo} />
    </main>
  )
}

export default App
