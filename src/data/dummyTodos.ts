import { Todo } from "../interfaces/Todo"

const dummyTodos: Todo[] = [
  {
    id: '7d562630-9226-11ee-b9d1-0242ac120002',
    name: 'Todo1',
    description: 'A thing to do',
    dueDate: new Date(),
    status: 'PENDING'
  },
  {
    id: '7d562888-9226-11ee-b9d1-0242ac120002',
    name: 'Todo2',
    description: 'Another thing to do',
    dueDate: new Date(),
    status: 'PENDING'
  },
  {
    id: '7d5629b4-9226-11ee-b9d1-0242ac120002',
    name: 'Todo1',
    description: 'Yet another thing to do',
    dueDate: new Date(),
    status: 'DONE'
  },
]

export default dummyTodos




