document.addEventListener("DOMContentLoaded", function() {
    const btnManual = document.getElementById("btnManual");
    const btnCalendar = document.getElementById("btnCalendar");
    const btnCurrentTask = document.getElementById("btnCurrentTask");
    const btnAddDeleteTask = document.getElementById("btnAddDeleteTask");
    const btnLearnAboutUs = document.getElementById("btnLearnAboutUs");
    btnCalendar.addEventListener("click", () => {
                window.location.href = "Calendar.html";
            })

            btnCurrentTask.addEventListener("click", () => {
                window.location.href = "Tasks.html";
            })

             btnAddDeleteTask.addEventListener("click", () => {
                window.location.href = "AddorDeleteTask.html";
            })
            
             btnManual.addEventListener("click", () => {
                window.location.href = "Taskmanual.html";
            })

             btnLearnAboutUs.addEventListener("click", () => {
                window.location.href = "Learnaboutus.html";
            })
        });