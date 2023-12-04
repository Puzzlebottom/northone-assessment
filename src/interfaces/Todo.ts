import { z } from "zod";

const TODO_STATUS = ["PENDING", "DONE"] as const;

export const todoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  status: z.enum(TODO_STATUS),
  dueDate: z.date(),
});

export type Todo = z.infer<typeof todoSchema>;

export const todoFormSchema = z.object({
  name: z.string().min(1, "required!").max(50, "too long!"),
  description: z.string().min(1, "required!").max(1024, "too long!"),
  status: z.enum(TODO_STATUS),
  dueDate: z.string().pipe(z.coerce.date()),
});

export type TodoFormData = z.infer<typeof todoFormSchema>;
