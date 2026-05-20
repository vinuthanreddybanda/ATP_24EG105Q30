import { addTask, getAllTasks } from "./task.js";

// Add a valid task (strings must be quoted, and date should be a string or Date object)
addTask("javaScript", "low", "2027-02-01");

// Show all tasks (call the function, not just reference it)
console.log(getAllTasks());