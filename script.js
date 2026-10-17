const today=new Date();

// Format for the day of the week (e.g., "SUNDAY")
const dayOptions = {weekday:'long'};
const dayString = today.toLocaleDateString('en-US',dayOptions);

// Format for the main date (e.g., "Oct 18, 2026" or "October 18")
const dateOptions = {month:'short',day:'numeric',year:'numeric'};
const dateString = today.toLocaleDateString('en-US',dateOptions);

// Insert them into our HTML elements
document.getElementById('large-date').textContent = dateString;
document.getElementById('day-of-week').textContent = dayString;