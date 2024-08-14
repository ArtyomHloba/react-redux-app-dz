import * as yup from 'yup'

export const TODO_VALIDATION_SCHEMA = yup.object({
  toDo: yup.string().trim().min(2).max(64).required()
})
