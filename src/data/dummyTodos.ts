import { Todo } from "../interfaces/Todo"

const dummyTodos: Todo[] = [
  {
    id: '7d562630-9226-11ee-b9d1-0242ac120002',
    name: 'Apple',
    description: 'A thing to do',
    dueDate: new Date('12-8-2023'),
    status: 'DONE'
  },
  {
    id: '7d562888-9226-11ee-b9d1-0242ac120002',
    name: 'Banana',
    description: 'Another thing to do',
    dueDate: new Date('10-4-2023'),
    status: 'DONE'
  },
  {
    id: '7d5629b4-9226-11ee-b9d1-0242ac120002',
    name: 'Canteloupe',
    description: 'Yet another thing to do',
    dueDate: new Date('1-1-2050'),
    status: 'PENDING'
  },
]

export default dummyTodos




