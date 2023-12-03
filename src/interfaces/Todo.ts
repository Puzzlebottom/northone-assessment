import { z } from 'zod';

const TODO_STATUS = ["PENDING", "DONE"] as const;

const todoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  status: z.enum(TODO_STATUS),
  dueDate: z.string().pipe(z.coerce.date()),
})

export type Todo = z.infer<typeof todoSchema>;

export const todoFormSchema = todoSchema.omit({ id: true })

export type TodoFormData = z.infer<typeof todoFormSchema>