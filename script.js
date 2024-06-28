document.querySelector(".task-add-button").addEventListener("click", function() {
    const taskList = document.querySelector(".task-list");
    const taskInput = document.querySelector(".todo-input");

    const taskText = taskInput.value.trim();

        if(taskText !== "")
        {
            const listForTask = document.createElement("li"); 
            listForTask.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";

            listForTask.appendChild(deleteButton);
            taskList.appendChild(listForTask);

            taskInput.value = "";
        }
});

