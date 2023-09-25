# Lesson 3.6: Tech Usage & Events Review

**What are Event Handlers?** :
- Event handlers are JavaScript functions that get executed when a specific event occurs. They bring interactivity to web pages.

**Common events** :

```javascript
// Click Events
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
  // Code to be executed when the button is clicked.
});

// Key Press Events
document.addEventListener("keypress", function(event) {
  console.log(`Key pressed: ${event.key}`);
});

// Mouse Over Events
let box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "red";
});

// Form Submission Events
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form from submitting traditionally.
  console.log("Form Submitted!");
});
```

Happy coding! 🚀🌟