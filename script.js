window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    function timer(year, month, day) {
        let deadline = `${year}-${month}-${day}`;
        function getTimeReamaining(endTime) {
            let t = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));
                //hours24 = Math.floor((t/1000/60/60) % 24),
                //days = Math.floor((t/(1000*60*60*24)));
            if (t <= 0) {
                seconds = 0;
                minutes = 0;
                hours = 0;
                //hours24 = 0;
                //days = 0;
            }
                return {
                    'total' : t,
                    'hours' : zeroBeforeNumber(hours),
                    'minutes' : zeroBeforeNumber(minutes),
                    'seconds' : zeroBeforeNumber(seconds)
                    //'hours24' : zeroBeforeNumber(hours24),
                    //'days' : zeroBeforeNumber(days)
                };
        }
    
        function zeroBeforeNumber(numberOfTimer) {
            if (numberOfTimer < 10) {
                numberOfTimer = `0${numberOfTimer}`; 
            }
            return numberOfTimer;
        }
    
        function setClock(id, endTime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                //hours24 = timer.querySelector('.hours24'),
                //days = timer.querySelector('.days'),
                timeInterval = setInterval(updateClock, 1000);
    
            function updateClock() {
                let t = getTimeReamaining(endTime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
                //hours24.textContent = t.hours24;
                //days.textContent = t.days;
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
    
        setClock('timer', deadline);
    }
});