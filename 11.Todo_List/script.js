// Select necessary elements
const btn = document.querySelector('#btn');
const taskInput = document.querySelector('#task');
const todoList = document.querySelector('#todo');

// Add an event listener to the button
btn.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Get the input value and trim whitespace

    if (taskText) {
        // Create a container for the new task
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        taskItem.style.margin='5px';
        taskItem.style.backgroundColor='rgba(228, 88, 88, 0.53)';
        taskItem.style.padding='5px';
        taskItem.style.borderRadius='4px';
        taskItem.style.border='2px solid black';
        // Create a radio button and label
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.name = 'task'; // Giving the same name to group the radio buttons
        
        
        

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        taskLabel.style.margin='0 0 0 5px';


        const CancelBtn=document.createElement('button');
        CancelBtn.textContent='X';
        CancelBtn.style.padding='5px';
        CancelBtn.style.backgroundColor='red';
        CancelBtn.style.border='2px solid black';
        CancelBtn.style.borderRadius='63px';
        CancelBtn.style.cursor='pointer';


        CancelBtn.addEventListener('click',function(){
            todoList.removeChild(taskItem);
        })


        taskCheckbox.addEventListener('change',function(){
            if(taskCheckbox.checked){
                taskLabel.style.textDecoration='line-through';
                taskItem.style.backgroundColor='rgba(75, 219, 63, 0.53)';
                
            }
            else{
                taskLabel.style.textDecoration='none';
                taskItem.style.backgroundColor='rgba(228, 88, 88, 0.53)';
            }
        })

        // Append the radio button and label to the task item
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(CancelBtn);
        // Add the new task item to the to-do list
        todoList.appendChild(taskItem);

        // Clear the input field for a new entry
        taskInput.value = '';
    } else {
        alert('Please enter a task'); // Error handling if input is empty
    }
});


