import { Button } from "react-bootstrap"
import { FaPlus, FaSearch } from "react-icons/fa"
import { useState } from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import useTodos from "../hooks/useTodos"
import { Todo } from "../interfaces/Todo"

function App() {

  const [showForm, setShowForm] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState('dueDate')
  const [searchValue, setSearchValue] = useState('')
  const { todos, selected, addTodo, updateTodo, deleteTodo, selectTodo } = useTodos()

  const handleAdd = (): void => {
    selectTodo(null)
    setShowForm(true)
  }

  const handleEdit = (todo: Todo): void => {
    selectTodo(todo.id)
    setShowForm(true)
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortBy(e.currentTarget.value)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value)
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
          <div className="col-4">
            <div className="input-group">
              <input
                name="search"
                type="text"
                placeholder="Search..."
                autoComplete="off"
                className="form-control"
                aria-label="search by name"
                value={searchValue}
                onChange={handleSearch}
              />
              <span className="input-group-text"><FaSearch />
              </span>
            </div>
          </div>
        </div>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          editTodo={handleEdit}
          sortBy={sortBy}
          filterBy={searchValue}
        />
      </section>

      <TodoForm
        show={showForm}
        selected={selected}
        handleClose={() => setShowForm(false)}
        addTodo={addTodo}
        updateTodo={updateTodo} />
    </main>
  )
}

export default App
