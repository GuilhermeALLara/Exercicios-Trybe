let title = document.getElementById('header-container');
title.style.backgroundColor = 'green';

let emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'salmon';

let emergencyInternal = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyInternal.length; index += 1) {
  emergencyInternal[index].style.backgroundColor = 'purple';
}

let noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'rgb(249, 219, 94)';

let noEmergencyInternal = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyInternal.length; index += 1) {
  noEmergencyInternal[index].style.backgroundColor = 'black';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'darkgreen'