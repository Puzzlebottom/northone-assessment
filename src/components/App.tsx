import TodoList from "./TodoList"
import dummyTodos from "../data/dummyTodos"

function App() {

  return (
    <main>
      <TodoList todos={dummyTodos} />
    </main>
  )
}

export default App
