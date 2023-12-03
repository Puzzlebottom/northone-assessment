import { z } from 'zod';

const TODO_STATUS = ["PENDING", "DONE"] as const;

const todoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  status: z.enum(TODO_STATUS),
  dueDate: z.date()
})

export type Todo = z.infer<typeof todoSchema>;