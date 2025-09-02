// ==========================
// Part 1: Variables & Conditionals
// ==========================

// Variable declaration
let age = 20;

// Conditional statement
if (age >= 18) {
  document.getElementById("age-result").textContent = "You are an adult.";
} else {
  document.getElementById("age-result").textContent = "You are a minor.";
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the page.`;
}

// Function 2: Calculate square of a number
function square(num) {
  return num * num;
}

// DOM interaction for greeting
document.getElementById("greet-btn").addEventListener("click", function() {
  let greeting = greetUser("Nelson");
  document.getElementById("greet-output").textContent = greeting;
});

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: For loop - list numbers 1 to 5
for (let i = 1; i <= 6; i++) {
  let li = document.createElement("li");
  li.textContent = `Number ${i} squared is ${square(i)}`;
  document.getElementById("number-list").appendChild(li);
}

// Loop 2: While loop - countdown from 3
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// Change text based on user input
document.getElementById("update-btn").addEventListener("click", function() {
  let input = document.getElementById("user-input").value;
  document.getElementById("display-text").textContent = input;
});

// Add event listener on input to change color dynamically
document.getElementById("user-input").addEventListener("input", function() {
  document.getElementById("display-text").style.color = "blue";
});
