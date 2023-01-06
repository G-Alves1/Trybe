function createDaysOfTheWeek() {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Quin", "Sex", "Sáb"];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

/*******1*******/
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysCalender() {
  let daysList = document.querySelector("#days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let currentDay = dezDaysList[index];
    let dayItem = document.createElement("li");
    dayItem.className = "day";

    dayItem.innerHTML = currentDay;
    daysList.appendChild(dayItem);

    if (currentDay === 24 || currentDay === 31) {
      dayItem.className = "holiday";
    } else if (currentDay === 4 || currentDay === 11 || currentDay === 18) {
      dayItem.className = "friday";
    } else if (currentDay === 25) {
      dayItem.className = "holiday friday";
    }
  }
}
createDaysCalender();

/*******2*******/
function buttonCreate(name) {
  const buttonsContainer = document.querySelector(".buttons-container");
  const newButton = document.createElement("button");

  newButton.innerHTML = name;
  newButton.id = "btn-holiday";
  buttonsContainer.appendChild(newButton);
}

buttonCreate("Feriados");

/*******3*******/
function buttonEvent() {
  const buttonHoliday = document.querySelector("#btn-holiday");
  const holiday = document.querySelectorAll(".holiday");
  let backgroundHoliday = "cyan";
  let backgroundHolidayDefault = "rgb(238, 238, 238)";

  buttonHoliday.addEventListener("click", buttonEventClick);

  function buttonEventClick() {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === "rgb(238, 238, 238)") {
        holiday[index].style.backgroundColor = backgroundHoliday;
        holiday[index].style.border = "1px solid black";
      } else {
        holiday[index].style.backgroundColor = backgroundHolidayDefault;
        holiday[index].style.border = "none";
      }
    }
  }
}

buttonEvent();

/*******4*******/
function buttonFriday(param1) {
  const buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");

  newButton.innerHTML = param1;
  newButton.id = "btn-friday";
  buttonContainer.appendChild(newButton);
}

buttonFriday("Sexta-feira");

/*******5*******/
function buttonEvent2() {
  const buttonFriday = document.querySelector("#btn-friday");
  const dayFriday = document.querySelectorAll(".friday");
  let newText = "Sextou";
  let defaultDay = [4, 11, 18, 25];

  buttonFriday.addEventListener("click", transformText);

  function transformText() {
    for (let index = 0; index < dayFriday.length; index += 1) {
      let currentDayFriday = dayFriday[index];
      if (currentDayFriday.innerHTML != newText) {
        currentDayFriday.innerHTML = newText;
      } else {
        currentDayFriday.innerHTML = defaultDay[index];
      }
    }
  }
}
buttonEvent2();

/*******6*******/
function mouseOver() {
  const days = document.querySelector("#days");

  days.addEventListener("mouseover", mouseEmCima);

  function mouseEmCima(event) {
    event.target.style.fontSize = "30px";
  }
}
mouseOver();

function mouseOut() {
  const days = document.querySelector("#days");

  days.addEventListener("mouseout", mouseSaiuDeCima);

  function mouseSaiuDeCima(event) {
    event.target.style.fontSize = "20px";
  }
}
mouseOut();

/*******7*******/
function myTasks(paramString) {
  const tasks = document.querySelector(".my-tasks");
  const persoTask = document.createElement("span");
  persoTask.innerHTML = paramString;
  tasks.appendChild(persoTask);
}

myTasks("cozinhar");

/*******8*******/
function subtitleColor(cor) {
  const tasks = document.querySelector(".my-tasks");
  const newDivTask = document.createElement("div");

  newDivTask.className = "task";
  newDivTask.style.backgroundColor = cor;
  tasks.appendChild(newDivTask);
}
subtitleColor("cyan");

/*******9*******/
function setTaskClass() {
  const myTasks = document.querySelector(".task");
  let selectedTask = document.getElementsByClassName("task selected");

  myTasks.addEventListener("click", setTask);
  function setTask(event) {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  }
}
setTaskClass();

/*******10*******/
function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");

  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", setColor);

  function setColor(event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  }
}

setDayColor();

/*******11*******/
function addTitleTaskList() {
  const taskList = document.querySelector(".task-list");
  const titleTaskList = document.createElement('h3');
  titleTaskList.innerHTML = 'MEUS COMPROMISSOS:';
  taskList.appendChild(titleTaskList);
}
addTitleTaskList();

function addNewTask() {
  let getInputField = document.querySelector("#task-input");
  let addInputButton = document.querySelector("#btn-add");
  let getTaskList = document.querySelector(".task-list");

  addInputButton.addEventListener("click", clickButton);
  function clickButton() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    } else {
      alert("Error: Digite ao menos 1 caractere.");
    }
  }

  getInputField.addEventListener("keyup", enterKeyUp);
  function enterKeyUp(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    }
  }
}

addNewTask();
