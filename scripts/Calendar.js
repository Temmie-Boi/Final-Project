// calendar code starts here 
document.addEventListener("DOMContentLoaded", function () { // this waits for the whole webpage to load before running the calendar code
    const btnMain = document.getElementById("btnMain");
    const btnCurrentTask = document.getElementById("btnCurrentTask");
    const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    const btnTaskManual = document.getElementById("btnTaskManual");
    const btnLearnAboutUs = document.getElementById("btnLearnAboutUs");
            
            btnMain.addEventListener("click", () => {
                window.location.href = "Mainpage.html";
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
			btnLearnAboutUs.addEventListener("click", () => {
				window.location.href = "Learnaboutus.html";
			})

                const tasks = JSON.parse(localStorage.getItem('tasks')) || []; //move this inside the DOMContentLoaded to clean it up with only needing one, it all loads at the same time
                const fieldset = document.querySelector('fieldset');

    if (tasks.length === 0) {
        fieldset.innerHTML += '<p>No tasks yet</p>'
    } else {
        tasks.forEach(task => {
            const p = document.createElement('p');
            p.textContent = `${task.date}: ${task.title} - ${task.goal} (${task.deadline || 'No deadline'})`;
            fieldset.appendChild(p);
        });
    }
    // finds the element that will display the month and year

    const monthContainer = document.querySelector(".month ul li:nth-child(3)"); // Shows where the month and year will be shown
    const daysContainer = document.querySelector(".days"); // where the actual dates will be shown
    const prevBtn = document.querySelector(".prev"); // previous month button 
    const nextBtn = document.querySelector(".next"); // next month button 
    let currentDate = new Date(); // takes from you devices date and time and creates a variable 

function renderCalendar() {
        const year = currentDate.getFullYear(); // gets current year from the date variable
        const month = currentDate.getMonth(); // gets current month from the date variable (0-11, where 0 is January and 11 is December)
        const monthNames = [ // self explanatory, just an array of month names to display the month name instead of the number
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];
        monthContainer.innerHTML = `<br>${monthNames[month]} <span style="font-size:18px">${year}</span>`; // converts the month number to the actual month name (displays march 2026 in the header )
        const firstDay = new Date(year, month, 1).getDay(); // finds what day of the week the first month falls on (0-6, where 0 is Sunday and 6 is Saturday)  
        const startOffset = (firstDay === 0 ? 6 : firstDay - 1); // calculates how many empty spaces to add before the first day of the month (if the first day is Sunday, we want to start on the next line, so we set the offset to 6, otherwise we set it to the day of the week minus 1)
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // finds how many days are in the current month (by creating a date object for the first day of the next month and then getting the date, which will be the last day of the current month)

        daysContainer.innerHTML = ""; // clears the days container before rendering the new month
        for (let i = 0; i < startOffset; i++) { // adds empty spaces before the first day of the month (if the first day is Sunday, we want to start on the next line, so we set the offset to 6, otherwise we set it to the day of the week minus 1)
            daysContainer.innerHTML += `<li></li>`;
        }

        for (let day = 1; day <= daysInMonth; day++) { // loops through the days of the month and adds them to the calendar (starting from 1 and ending at the number of days in the month)
            const isToday = //Keep this together
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

            const stringTaskDate = `${year}-${String(month+1).padStart(2,"0")}-${(String(day).padStart(2,"0"))}` //so instead of 0-11 because 0 for January hurts my brain, we go 1-12 for the +1 and padStart puts two digits and the starting digit (if only one) is a 0, please do not delete THIS! It is VITAL for transferring tasks to the calendar!
            //ANYTHING to with `` check it. year decided to be GREEDY! Also remember quotations around the zero.
            const calendarTasks = tasks.filter(taskItem => taskItem.date === stringTaskDate); //Brought over from Tasks.js and remembered to switch the ! for a =...thanks for that past me. also remember it is not task alone here but taskItem
            const calendarTitles = calendarTasks.map(taskItem => taskItem.title).join("<br>");// I don't like you.

            daysContainer.innerHTML += isToday
                ? `<li><span class="active">${day}</span>${calendarTasks.length > 0 ? "📌" :""}<br>${calendarTitles}</li>` //This is temporary code to even see if the transition from making task to calendar works (Edit) The Pin is a good symbol. Let's just get titles underneath
                : `<li>
                ${day}${calendarTasks.length > 0 ? "📌" : ""}<br>
                ${calendarTitles}</li>`; //more temporary code to make sure the tasks transition. any tasks at all should show a pin. (Edit) Hi there future me, please remember the actual code with <br> and calendarTitles if you want both again.
        }       //Hey genius. Bugtest reminder. Make it not bounce up on it dayo. It go up in the air. Also make it so it organizes by date below.
    }

    prevBtn.addEventListener("click", () => { // adds an event listener to the previous month button (when clicked, it will go to the previous month and re-render the calendar)
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => { // adds an event listener to the next month button (when clicked, it will go to the next month and re-render the calendar)
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    renderCalendar();
});

//document.addEventListener("DOMContentLoaded", function() {


// calendar code ends here, thank you for reading 
// - Temmie :3 (Lorenzo)