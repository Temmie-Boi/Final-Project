const wikihowMap = {
		bathroom: "https://www.wikihow.com/Clean-a-Bathroom",
		bedroom: "https://www.wikihow.com/Clean-Your-Room",
		bed: "https://www.wikihow.com/Make-Your-Bed",
		dishwash: "https://www.wikihow.com/Wash-Dishes"
		};
document.addEventListener("DOMContentLoaded", function() {
		
    	const btnMain = document.getElementById("btnMain"); //Constants for the buttons on every page
    	const btnCalendar = document.getElementById("btnCalendar");
    	const btnCurrentTask = document.getElementById("btnCurrentTask");
    	const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    	const btnLearnAboutUs = document.getElementById("btnLearnAboutUs");			
		const selectatask = document.getElementById("taskSelection");
		
		selectatask.addEventListener("change", () => {
		const manualpage = selectatask.value;
		if (!manualpage) return;
		const url = wikihowMap[manualpage];
		
		window.open(url, "_blank");
		});
		
	
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
		btnLearnAboutUs.addEventListener("click", () => {
				window.location.href = "Learnaboutus.html";
			})
		});