import TodoList from "./TodoList"
import dummyTodos from "../data/dummyTodos"

function App() {

  return (
    <TodoList todos={dummyTodos} />
  )
}

export default App
