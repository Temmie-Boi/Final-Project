btnMain.addEventListener("click", () => {
                window.location.href = "Mainpage.html";
            })
			btnCalendar.addEventListener("click", () => {
				window.location.href = "Calendar.html";
			})
			btnAddDeleteTask.addEventListener("click", () => {
				window.location.href = "AddorDeleteTask.html";
			})
			btnTaskManual.addEventListener("click", () => {
				window.location.href = "Taskmanual.html";
			})
			btnLearnAboutUs.addEventListener("click", () => {
				window.location.href = "Learnaboutus.html";
			})

document.addEventListener("DOMContentLoaded", function() { // waits for the page to finish loading before running the code 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // retrieves the tasks from localStorage, or initializes an empty array if there are no tasks
    const fieldset = document.querySelector('fieldset'); // selects the fieldset element where the tasks will be displayed

    if (tasks.length === 0) { // checks if there are no tasks, and if so, displays a message indicating that there are no tasks
        fieldset.innerHTML += '<p>No tasks yet.</p>'; 
    } else {
        tasks.forEach(task => { // iterates through each task in the tasks array and creates a new paragraph element for each task, displaying the task's date, title, goal, and deadline (if it exists)
            const div = document.createElement('div'); //makes a new div wrapper for editing
            const p = document.createElement('p');
            const editBtn = document.createElement('button');
            p.textContent = `${task.date}: ${task.title} - ${task.goal} (${task.deadline || 'No deadline'}) `; // adds the new paragraph element to the fieldset
            editBtn.textContent = "Edit"; //Edit button text
            editBtn.dataset.id = task.id;//Edit button using the id to edit it
            div.appendChild(p);
            div.appendChild(editBtn);
            fieldset.appendChild(div); // adds the new paragraph element to the fieldset
            editBtn.addEventListener("click", function(){
                const editClickIdOk = editBtn.dataset.id; //use the ID for the edit
                localStorage.setItem('editingTaskID', editClickIdOk);
                window.location.href = "AddorDeleteTask.html";
            });
        });
    }
});


//document.addEventListener("DOMContentLoaded", function() {
  //const buttontaskdeleteall = document.getElementById("btnDeleteAllTasks");
  //buttontaskdeleteall.addEventListener("click", localStorage.removeItem())
//});



//document.addEventListener("DOMContentDeleted", function() {
    //const tasks = JSON.parse(localStorage.getItem('tasks'));
    //const fieldset = document.querySelector('fieldset')
    
    //localStorage.clear();
//});