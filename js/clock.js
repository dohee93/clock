var dates = document.getElementById('date');
var clock = document.getElementById('clock');
var today = new Date();

var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


   var year = today.getFullYear();
   var month = today.getMonth() + 1;
   var date = today.getDate();
   var day = today.getDay();
   var d = days[day];
   dates.innerHTML = `${year}년 ${month}월 ${date}일 ${d}`;


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

