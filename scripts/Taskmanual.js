const SUPABASE_URL = "https://vdwkkqbosjnftksgppuj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_fbO9zQaPZQfhEJfVOOsUXw_L9fRzHI_";

//const supabaseClient = supabase.creatClient(
//	SUPABASE_URL,
//	SUPABASE_PUBLISHABLE_KEY
//);

//const form = document.getElementById("tasklinkform")

//form.addEventListener("submit", async function (e) {

//	e.preventDefault();

//const bathroom = document.getElementById("bathroom").window.open();
//const bedroom = document.getElementById("bedroom").window.open();
//const bed = document.getElementById("bed").window.open();
//const dishwash = document.getElementById("dishwash").window.open();

//const result = await subabaseClient
//.from("the_task_manual")

//if (result.error) {
//	alert("ERROR loading website!");
//	return;
//}

//});

document.addEventListener("DOMContentLoaded", function() {
		
    	const btnMain = document.getElementById("btnMain"); //Constants for the buttons on every page
    	const btnCalendar = document.getElementById("btnCalendar");
    	const btnCurrentTask = document.getElementById("btnCurrentTask");
    	const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    	const btnLearnAboutUs = document.getElementById("btnLearnAboutUs");			
		const selectatask = document.getElementById("taskSelection");
		
		const wikihowMap = {
		bathroom: "https://www.wikihow.com/Clean-a-Bathroom",
		bedroom: "https://www.wikihow.com/Clean-Your-Room",
		bed: "https://www.wikihow.com/Make-Your-Bed",
		dishwash: "https://www.wikihow.com/Wash-Dishes"
		};

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