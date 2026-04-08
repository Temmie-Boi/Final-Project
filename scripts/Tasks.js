    document.addEventListener("DOMContentLoaded", function() { // waits for the page to finish loading before running the code 
        const btnMain = document.getElementById("btnMain"); //Constants for the buttons on every page
    	const btnCalendar = document.getElementById("btnCalendar");
    	const btnTaskManual = document.getElementById("btnTaskManual");
    	const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    	const btnLearnAboutUs = document.getElementById("btnLearnAboutUs");
        const btnDeleteALLNotOneLeft = document.getElementById("btnDeleteALLNotOneLeft");

            btnMain.addEventListener("click", () => {
                window.location.href = "Mainpage.html";
            })
			btnCalendar.addEventListener("click", () => {
				window.location.href = "Calendar.html";
			})
			btnAddDeleteTask.addEventListener("click", () => {
                localStorage.removeItem("editingTaskID");//Removes their IDso it goes ONLY to addpage
				window.location.href = "AddorDeleteTask.html";
			})
			btnTaskManual.addEventListener("click", () => {
				window.location.href = "Taskmanual.html";
			})
			btnLearnAboutUs.addEventListener("click", () => {
				window.location.href = "Learnaboutus.html";
			})

              

            btnDeleteALLNotOneLeft.addEventListener("click", () => { //Click the nuclear button
            //alert("Delete all button activated"); Make sure it actually WORKS!
            localStorage.removeItem("tasks"); //Removes all tasks at once
            localStorage.removeItem("editingTaskID");//Removes their IDs
            alert("All tasks gone"); //Alert moved to more fitting place for a notice and reworded
            window.location.reload(); //reloads the page to show it gone
    });
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // retrieves the tasks from localStorage, or initializes an empty array if there are no tasks
    const reactTaskApp = document.getElementById('reactTaskApp'); // selects the React element where the tasks will be displayed
    const root = ReactDOM.createRoot(reactTaskApp); //the Root of React made constant
    //(This confirmed React worked. Keep it in case you mess it up again) 
    // root.render(React.createElement("p", null, tasks.length === 0 ? "No tasks yet." : "Tasks found.")); === means exactly 0 tasks and ? means there is at least 1 task. That annoyed me.
    //Also this is old code but it works. Also replace React with fieldset if react ever decides it doesn't wanna play nice.
    //if (tasks.length === 0) { // checks if there are no tasks, and if so, displays a message indicating that there are no tasks
        //reactTaskApp.innerHTML += '<p>No tasks yet.</p>'; 
    //} else {
        //tasks.forEach(task => { // iterates through each task in the tasks array and creates a new paragraph element for each task, displaying the task's date, title, goal, and deadline (if it exists)
            //const div = document.createElement('div'); //makes a new div wrapper for editing
            //const p = document.createElement('p');
            //const editBtn = document.createElement('button');
            //p.textContent = `${task.date}: ${task.title} - ${task.goal} (${task.deadline || 'No deadline'}) `; // adds the new paragraph element to the React
            //editBtn.textContent = "Edit"; //Edit button text
            //editBtn.dataset.id = task.id;//Edit button using the id to edit it
            //div.appendChild(p);
            //div.appendChild(editBtn);
            //reactTaskApp.appendChild(div); // adds the new paragraph element to the React
            //editBtn.addEventListener("click", function(){
                //const editClickIdOk = editBtn.dataset.id; //use the ID for the edit
                //localStorage.setItem('editingTaskID', editClickIdOk);
                //window.location.href = "AddorDeleteTask.html";
            //});
        //});
    //}
    // Proper React code beneath this.
    root.render(
        React.createElement(
            "div", null, tasks.length === 0 ? React.createElement ("p", null, "You do not have any tasks.")//If tasks are exactly 0 show this message in a <p> tag otherwise keep going.
            : tasks.map(task => React.createElement("div", {key: task.id}, React.createElement("p", null,`${task.date}: ${task.title} - ${task.goal} (${task.deadline || "No deadline"})` ), //If there is a task, make a p tag that pulls the id for the task so the system know,
                                                                                                                                                          // DO NOT USE ', USE ` because that needs to be it to pull the data and make it a template for the variables!                                                                                                                                      // then pull the date, title, goal, and deadline and make something if there is no deadline
                React.createElement(                                                                                                                      //Why is this in four lines? Because even on a 4k monitor, I need to scroll and i would rather not.
                    "button",                                                                                                                             //Why is this in four lines? Because even on a 4k monitor, I need to scroll and i would rather not.
                    {
                        onClick: () => { //What this do when it is clicked
                            localStorage.setItem("editingTaskID", task.id); //Pull the ID already set from LocalStorage
                            window.location.href = "AddorDeleteTask.html"; //Guess where this is going. That's right. Back to a custom version of this page!
                        
                        }
                    },
                    "Edit"
                ),
                React.createElement(                                                                                                                      
                    "button",
                    {
                        onClick: () => {
                            const DeletedUpdateTasks = tasks.filter(taskItem => taskItem.id !== task.id); //Makes sure to only delete the item requested.
                            localStorage.setItem("tasks", JSON.stringify(DeletedUpdateTasks)); //Hi there, please update the list
                            window.location.reload(); //Hi there again, please reload so I can see the deletion
                        }
                    },
                    "Delete"
                )
                    
                )                                                                                                                                         
            )                                                                                                                                             
        )
    ); //ok, screw these brackets. So many . Pay attention to the pretty colours. Make sure you have two of each. Like the socks.
    });

  
//Old code. Keeping it to show a previous attempt
//document.addEventListener("DOMContentLoaded", function() {
  //const buttontaskdeleteall = document.getElementById("btnDeleteAllTasks");
  //buttontaskdeleteall.addEventListener("click", localStorage.removeItem())
//});



//document.addEventListener("DOMContentDeleted", function() {
    //const tasks = JSON.parse(localStorage.getItem('tasks'));
    //const fieldset = document.querySelector('fieldset')
    
    //localStorage.clear();
//});