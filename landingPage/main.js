/*----
credit to: https://codepen.io/SitePoint/pen/MwNPVq
----*/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  console.log(t)
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var kickstarterTitle = document.querySelector('.kicktitle');
      kickstarterTitle.innerHTML = 'Join us on Kickstarter';
      var titleDiv = document.getElementById('countdownSection');
      titleDiv.querySelector('.title').style.marginBottom = '3vh';
      var clock = document.getElementById('clockdiv').childNodes;
      console.log(clock);
      for(i = 0; i < (clock.length-1); i++){
        if(clock[i].tagName == 'DIV'){
            clock[i].style.display = "none";
        }
      }
      var kickstarterBtn = document.querySelector('.btn');
      kickstarterBtn.style.display = "flex";
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var launch = new Date(Date.UTC(2018, 3, 02, 16));
initializeClock('clockdiv', launch);

/* Style heigh */
function clockHeight(){
    var clocktimediv = document.querySelectorAll('.clocktime');
    clocktimediv.forEach((unit) => {
            var clocktimeWidth = unit.offsetWidth;
            console.log('width'+clocktimeWidth);
            unit.style.paddingTop = ((clocktimeWidth-30)/2)+'px';
            unit.style.paddingBottom = ((clocktimeWidth-30)/2)+'px';
    });
}
window.addEventListener('resize', function(event){
  // do stuff here
  clockHeight();
});
clockHeight();
