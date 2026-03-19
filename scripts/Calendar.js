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

document.addEventListener("DOMContentLoaded", function () {
    const monthContainer = document.querySelector(".month ul li:nth-child(3)");
    const daysContainer = document.querySelector(".days");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentDate = new Date();

function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const monthNames = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];
        monthContainer.innerHTML = `<br>${monthNames[month]} <span style="font-size:18px">${year}</span>`;
        const firstDay = new Date(year, month, 1).getDay(); 
        const startOffset = (firstDay === 0 ? 6 : firstDay - 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        daysContainer.innerHTML = ""; 
        const firstDay = new Date(year, month, 1).getDay();
        const startOffset = (firstDay === 0 ? 6 : firstDay - 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        daysContainer.innerHTML = "";

        

        for (let i = 0; i < startOffset; i++) {
            daysContainer.innerHTML += `<li></li>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

            daysContainer.innerHTML += isToday
                ? `<li><span class="active">${day}</span></li>`
                : `<li>${day}</li>`;
        }
    }

    prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    renderCalendar();
});

