var dates = document.getElementById('date');
var clock = document.getElementById('clock');
var today = new Date();

var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

var year = today.getFullYear();
var month = today.getMonth() + 1;
var date = today.getDate();
var day = today.getDay();
var d = days[day];
var m = months[month];
dates.innerHTML = `${date} ${m} ${year} &nbsp;${d}`;


function getTime() {
   
   var hour = today.getHours();
   var minute = today.getMinutes();
   var second = today.getSeconds();
   clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:
   ${minute < 10 ? `0${minute}` : minute}:
   ${second < 10 ? `0${second}` : second}`;
}

setInterval(() => {
   getTime();
}, 1000);

