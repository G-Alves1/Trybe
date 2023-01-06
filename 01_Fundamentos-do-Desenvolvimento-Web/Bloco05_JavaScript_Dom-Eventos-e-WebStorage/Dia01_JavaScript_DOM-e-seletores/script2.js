document.querySelector('#header-container h1').style.backgroundColor = 'rgb(45, 168, 66)';
document.querySelector('#header-container h1').style.padding = '10px';


let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = 'rgb(184, 36, 164)';
}

let emergencyTasksDivs = document.querySelectorAll('.emergency-tasks div');
for (let i = 0; i < emergencyTasksDivs.length; i += 1) {
  emergencyTasksDivs[i].style.backgroundColor = '#cd853f';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = 'black';
}

let noEmergencyTasksDivs = document.querySelectorAll('.no-emergency-tasks div');
for (let i = 0; i < noEmergencyTasksDivs.length; i += 1) {
  noEmergencyTasksDivs[i].style.backgroundColor = 'rgb(197, 194, 13)';
}

document.getElementById('footer-container').style.background = 'rgb(2, 66, 2)';