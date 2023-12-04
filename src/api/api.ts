import type { z } from 'zod';
import dummyTodos from '../data/dummyTodos';

export enum HTTPMethod {
  GET = 'GET'
}

function api<Request, Response>({
  method,
  path,
  requestSchema,
  responseSchema,
}: {
  method: HTTPMethod,
  path: string,
  requestSchema: z.ZodType<Request>,
  responseSchema: z.ZodType<Response>,
}): (data: Request) => Promise<Response> {
  return (requestData: Request) => {
    requestSchema.parse(requestData);

    async function apiCall(): Promise<Response> {
      // const response = await fetch(path);
      // const data = await response.json();
      // const validatedTodos = responseSchema.safeParse(data);

      //Sends local dummy data
      const validatedTodos = responseSchema.safeParse(dummyTodos);

      if (!validatedTodos.success) {
        console.log(validatedTodos.error)
        return new Promise((resolve) => {
          resolve([] as Response)
        })
      }

      return validatedTodos.data
    }

    return apiCall()
  }
}

export default api