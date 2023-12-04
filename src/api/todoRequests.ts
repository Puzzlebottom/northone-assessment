import { z } from 'zod'
import { todoSchema } from '../interfaces/Todo'
import api, { HTTPMethod } from './api'

export const getTodosRequest = z.void();
export const getTodosResponse = z.array(todoSchema);

export const getTodos = api<
  z.infer<typeof getTodosRequest>,
  z.infer<typeof getTodosResponse>
>({
  method: HTTPMethod.GET,
  path: 'https://dummy/encounters',
  requestSchema: getTodosRequest,
  responseSchema: getTodosResponse,
})