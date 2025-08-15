document.querySelector('.container').addEventListener('click', function(event) {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();

    // validate empty fielsds
    if (username === "" || email === "" || msg === "") {
        event.preventDefault();
        alert("All fields are required.");
        return;
    }
    // Validate message length
    if (msg.length > 100) {
        event.preventDefault();
        alert("Message should not exceed 100 characters.");
        return;
    }

});

// Email validation function
function validateEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.toLowerCase());
}

 function validateusername(username) {
        let pattern = /^[a-zA-Z]+$/;
        return pattern.test(username);
    }



// make a todo list
// Get elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");

// Add Task
addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        todoList.removeChild(li);
    };

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Add list item to list
    todoList.appendChild(li);

    // Clear input
    taskInput.value = "";
});
