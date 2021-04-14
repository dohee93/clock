var dates = document.getElementById('date');
var clock = document.getElementById('clock');

var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function getTime() {
   var today = new Date();
   var year = today.getFullYear();
   var month = today.getMonth();
   var date = today.getDate();
   var day = today.getDay();
   var d = days[day];
   var m = months[month];
   dates.innerHTML = `${date} ${m} ${year} &nbsp;${d}`;

   var hour = today.getHours();
   var minute = today.getMinutes();
   var second = today.getSeconds();
   clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

setInterval(() => {
   getTime();
}, 1000);

