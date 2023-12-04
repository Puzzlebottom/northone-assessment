import { Accordion } from "react-bootstrap";
import { Todo } from "../interfaces/Todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  deleteTodo: (todoId: string) => void;
  updateTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  sortBy: string;
  filterBy: string;
}

function TodoList({
  todos,
  deleteTodo,
  updateTodo,
  editTodo,
  sortBy,
  filterBy,
}: Props): React.JSX.Element {
  const filterFunction = (todo: Todo): boolean => {
    const name = todo.name.toLowerCase();
    const description = todo.description.toLowerCase();
    const searchString = filterBy.toLowerCase();
    return name.includes(searchString) || description.includes(searchString);
  };

  let sortFunction: (a: Todo, b: Todo) => number;

  switch (sortBy) {
    case "name":
      sortFunction = (a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      };
      break;

    case "dueDate":
      sortFunction = (a, b) => {
        return a.dueDate.valueOf() - b.dueDate.valueOf();
      };
      break;

    case "status":
      sortFunction = (a, b) => {
        const statusMap = { PENDING: 0, DONE: 1 };
        return statusMap[a.status] - statusMap[b.status];
      };
      break;

    default:
      sortFunction = () => 0;
  }

  return (
    <Accordion>
      {todos
        .filter(filterFunction)
        .sort(sortFunction)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            editTodo={() => editTodo(todo)}
          />
        ))}
    </Accordion>
  );
}

export default TodoList;
