import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];

function addTask(title, priority, dueDate) {
  const isTitleValid = validateTitle(title);
  const isPriorityValid = validatePriority(priority);
  const isDateValid = validateDueDate(dueDate);

  if (isTitleValid && isPriorityValid && isDateValid) {
    tasks.push({ title, priority, dueDate });
    return "Task added successfully";
  } else {
    return "Error: Task validation failed";
  }
}

function getAllTasks() {
  return tasks;
}

export { addTask, getAllTasks };

