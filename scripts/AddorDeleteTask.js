
let editingTaskID = null;

function taskDate() {
			const taskDateInput = document.getElementById("SetDate");
			const taskDateInputValue = taskDateInput.value;
			const dateOutputElement = document.getElementById("output-date");

			if (taskDateInputValue) {
            dateOutputElement.textContent = taskDateInputValue;
			} else {
            dateOutputElement.textContent = "No Date Selected";
			}
		}

		//const buttontasksubmit = document.getElementById("tasksubmit");
		//buttontasksubmit.addEventListener("click", taskDate);
		
function taskName() {
			const taskNameInput = document.getElementById("NameOfTask");
			const taskNameInputValue = taskNameInput.value;
			const nameOutputElement = document.getElementById("output-name");
		
			if (taskNameInputValue) {
				nameOutputElement.textContent = taskNameInputValue;
			} else {
				nameOutputElement.textContent = "No Title Given";
			}
		}
		
		//buttontasksubmit.addEventListener("click", taskName);
		
function taskGoal() {
			const taskGoalInput = document.getElementById("Goal");
			const taskGoalInputValue = taskGoalInput.value;
			const goalOutputElement = document.getElementById("output-goal");
			
			if (taskGoalInputValue) {
				goalOutputElement.textContent = taskGoalInputValue;
			} else {
				goalOutputElement.textContent = "No Goal Given";
			}
		}
		
		//buttontasksubmit.addEventListener("click", taskGoal);
		
function taskDeadline() {
			const taskDeadline = document.getElementById("Deadline");
			const taskDeadlineValue = taskDeadline.value;
			const deadlineOutputElement = document.getElementById("output-deadline");
			
			if (taskDeadlineValue) {
				deadlineOutputElement.textContent = taskDeadlineValue;
			} else {
				deadlineOutputElement.textContent = "No Deadline Given";
			}
		}
		
		//buttontasksubmit.addEventListener("click", taskDeadline);
		
		//buttontasksubmit.addEventListener("click", sendtolist); 

function sendtolist() { 
    const date = document.getElementById("SetDate").value; // the date of the tasks 
    const title = document.getElementById("NameOfTask").value; // the title of the tasks 
    const goal = document.getElementById("Goal").value; // the goal of the tasks 
    const deadline = document.getElementById("Deadline").value; // the deadline of the tasks

    // Basic validation: require at least a date and title
    if (!date || !title.trim()) {
        alert("Please provide at least a date and title for the task.");
        return;
    }

	let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

	if (editingTaskID != null) {
       const editTaskSolve = tasks.find(task => task.id == editingTaskID);
	   if (editTaskSolve) {
		editTaskSolve.date = date;
		editTaskSolve.title = title.trim();
		editTaskSolve.goal = goal.trim();
		editTaskSolve.deadline = deadline;
	   }
	   editingTaskID = null;
	   localStorage.removeItem("editingTaskID");
	   
	   alert("Task edited successfully!");
	} else {
		const id = Date.now();
		const task = {id, date, title: title.trim(), goal:goal.trim(), deadline};
		tasks.push(task);
		alert("Task added successfully!"); //Task added message
	}

    localStorage.setItem('tasks', JSON.stringify(tasks)); // saves the updated tasks array back to localStorage

    // Optional: Clear the form after saving
    document.getElementById("SetDate").value = "";
    document.getElementById("NameOfTask").value = "";
    document.getElementById("Goal").value = "";
    document.getElementById("Deadline").value = "";
}

document.addEventListener("DOMContentLoaded", function() {
	editingTaskID = localStorage.getItem("editingTaskID"); //Alright, it is searching up the ID
	const editTaskSolveDate = document.getElementById("SetDate"); //SolveDate is the DOM element, SolveDate1 is the data object (Edit Solve is now the object)
	const editTaskSolveName = document.getElementById("NameOfTask"); //Same thing for SolveName
	const editTaskSolveGoal = document.getElementById("Goal");
	const editTaskSolveDeadline = document.getElementById("Deadline");
	if (editingTaskID != null) {
    const editArray = JSON.parse(localStorage.getItem("tasks")) || [];//This finds the task and helps to make edits possible
	const editTaskSolve = editArray.find(task => task.id == editingTaskID);
	if (editTaskSolve) {
		const buttontasksubmit = document.getElementById("tasksubmit");
	   buttontasksubmit.textContent = "Edit Task";
		editTaskSolveDate.value = editTaskSolve.date
		editTaskSolveName.value = editTaskSolve.title
		editTaskSolveGoal.value = editTaskSolve.goal
		editTaskSolveDeadline.value = editTaskSolve.deadline
	}
	}
	btnMain.addEventListener("click", () => {
                window.location.href = "Mainpage.html";
            })
	btnCalendar.addEventListener("click", () => {
				window.location.href = "Calendar.html";
			})
	btnCurrentTask.addEventListener("click", () => {
				window.location.href = "Tasks.html";
			})
	btnTaskManual.addEventListener("click", () => {
				window.location.href = "Taskmanual.html";
			})
	btnLearnAboutUs.addEventListener("click", () => {
				window.location.href = "Learnaboutus.html";
			})	
	const buttontasksubmit = document.getElementById("tasksubmit");
	buttontasksubmit.addEventListener("click", taskDate);
	buttontasksubmit.addEventListener("click", taskName);
	buttontasksubmit.addEventListener("click", taskGoal);
	buttontasksubmit.addEventListener("click", taskDeadline);
	buttontasksubmit.addEventListener("click", sendtolist);
});