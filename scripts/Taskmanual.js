const SUPABASE_URL = "https://vdwkkqbosjnftksgppuj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_fbO9zQaPZQfhEJfVOOsUXw_L9fRzHI_";

const supabaseClient = supabase.createClient(
	SUPABASE_URL,
	SUPABASE_PUBLISHABLE_KEY
);

const form = document.getElementById("tasklinkform")

form.addEventListener("change", async function (e) { //not a submit, a change because no submit button
	//console.log("change fired"); confirmed it worked
	
	//e.preventDefault(); Not needed

	//TODO: supabase data here, below is legacy code we tried
//const bathroom = document.getElementById("bathroom").window.open();
//const bedroom = document.getElementById("bedroom").window.open();
//const bed = document.getElementById("bed").window.open();
//const dishwash = document.getElementById("dishwash").window.open();

const selectedTask = e.target.value //actually chooses what the user selected

	//console.log(selectedTask); confirms values match

const {data, error} = await supabaseClient //pulls data and error pieces right away
	.from("the_task_manual")
	.select("*") //We need to actually select the data
	.eq("name", selectedTask); //filter to the correct row

	//console.log(data); //Make sure the supabase is sending info
	//console.log(error);
if (error) {
	//console.log(data); //Code finding supabase errors
	alert("ERROR loading website!");
	return;
}

window.open(data[0].Links, "_blank");
//console.log(data); //check return record

});

//Old Vanilla Javascript Code
document.addEventListener("DOMContentLoaded", function() {
		
    	const btnMain = document.getElementById("btnMain"); //Constants for the buttons on every page
    	const btnCalendar = document.getElementById("btnCalendar");
    	const btnCurrentTask = document.getElementById("btnCurrentTask");
    	const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    	const btnLearnAboutUs = document.getElementById("btnLearnAboutUs");			
		const selectatask = document.getElementById("taskSelection");
		
		//const wikihowMap = {
		//bathroom: "https://www.wikihow.com/Clean-a-Bathroom",
		//bedroom: "https://www.wikihow.com/Clean-Your-Room",
		//bed: "https://www.wikihow.com/Make-Your-Bed",
		//dishwash: "https://www.wikihow.com/Wash-Dishes"
		//};

		//selectatask.addEventListener("change", () => {
		//const manualpage = selectatask.value; 
		//if (!manualpage) return;
		//const url = wikihowMap[manualpage];


		//window.open(url, "_blank");
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
//})
;