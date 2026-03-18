
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

		const buttontasksubmit = document.getElementById("tasksubmit");
		buttontasksubmit.addEventListener("click", taskDate);
		
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
		
		buttontasksubmit.addEventListener("click", taskName);
		
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
		
		buttontasksubmit.addEventListener("click", taskGoal);
		
		function taskDeadline() {
			const taskDeadline = document.getElementById("timecount");
			const taskDeadlineValue = taskDeadline.value;
			const deadlineOutputElement = document.getElementById("output-deadline");
			
			if (taskDeadlineValue) {
				deadlineOutputElement.textContent = taskDeadlineValue;
			} else {
				deadlineOutputElement.textContent = "No Deadline Given";
			}
		}
		
		buttontasksubmit.addEventListener("click", taskDeadline);
		
		buttontasksubmit.addEventListener("click", sendtolist);
