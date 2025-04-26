// To-Do List Functionality
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    
    if (todoText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = todoText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    
    todoInput.value = ""; // Clear input field
}

// Thought of the Day Functionality
function addThought() {
    const thoughtInput = document.getElementById('thought-input');
    const thoughtText = thoughtInput.value;
    
    if (thoughtText === "") {
        alert("Please enter a thought.");
        return;
    }
    
    const thoughtList = document.getElementById('thought-list');
    const li = document.createElement('li');
    li.textContent = thoughtText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        thoughtList.removeChild(li);
    };
    
    li.appendChild(deleteButton);
    thoughtList.appendChild(li);
    
    thoughtInput.value = ""; // Clear input field
}

// Habit Tracker Functionality
document.getElementById("habit1").addEventListener('change', function() {
    alert(this.checked ? "Great job! You drank water today!" : "Try to drink water today!");
});

document.getElementById("habit2").addEventListener('change', function() {
    alert(this.checked ? "Well done! You exercised today!" : "Don't forget to exercise!");
});

document.getElementById("habit3").addEventListener('change', function() {
    alert(this.checked ? "Nice work! Keep reading!" : "Don't forget to read today!");
});
