function validateTitle(title) {
  if (!title || title.length < 3) {
    console.log("Title should not be empty and must have at least 3 characters");
    return false;
  }
  console.log("Validation is success");
  return true;
}

function validatePriority(priority) {
  if (priority === "low") {
    console.log("Low priority");
    return true;
  } else if (priority === "medium") {
    console.log("Medium priority");
    return true;
  } else if (priority === "high") {
    console.log("High priority");
    return true;
  } else {
    console.log("Priority must be 'low', 'medium', or 'high'");
    return false;
  }
}

function validateDueDate(date) {
  const d = new Date();
  const inputDate = new Date(date);
  if (inputDate < d) {
    console.log("Due date cannot be in the past");
    return false;
  }
  console.log("Due date is valid");
  return true;
}

export { validateTitle, validatePriority, validateDueDate };