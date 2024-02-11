const timeEnd = `2024-05-20T00:00`;

function getTimeRemaining(timeStop){
   const t = Date.parse(timeStop) - Date.parse(new Date()),
         days = Math.floor(t/(1000 * 60 * 60 * 24)),
         hour = Math.floor(t/(1000 * 60 * 60) % 24),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);
   return {
      total: t,
      days: days,
      hours: hour,
      minutes: minutes,
      seconds: seconds
   };
}
function setClock(selector, timeStop) {
   const timer = document.querySelector(selector),
         days =document.querySelector (`.days`),
         hours =document.querySelector (`.hours`),
         minutes =document.querySelector (`.minutes`),
         seconds =document.querySelector (`.seconds`),
         timeInterval = setInterval(updateClock, 1000);

updateClock()
   function updateClock() {
      const t = getTimeRemaining(timeStop);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      if(t.total<=0){
         clearInterval(timeInterval);
      }
   }
}
setClock(`.timer`, timeEnd)