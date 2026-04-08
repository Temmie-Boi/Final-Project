document.addEventListener("DOMContentLoaded", function() {
    const btnMain = document.getElementById("btnMain");
    const btnCalendar = document.getElementById("btnCalendar");
    const btnCurrentTask = document.getElementById("btnCurrentTask");
    const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    const btnTaskManual = document.getElementById("btnTaskManual");

btnMain.addEventListener("click", () => {
                window.location.href = "Mainpage.html";
            })
		btnCalendar.addEventListener("click", () => {
				window.location.href = "Calendar.html";
			})
		btnCurrentTask.addEventListener("click", () => {
				window.location.href = "Tasks.html";
			})
		btnAddDeleteTask.addEventListener("click", () => {
				window.location.href = "AddorDeleteTask.html";
			})
		btnTaskManual.addEventListener("click", () => {
				window.location.href = "Taskmanual.html";
			})
		});