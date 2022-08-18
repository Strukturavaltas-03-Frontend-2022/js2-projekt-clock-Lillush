'use strict';

const myClock = () => {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  hour = ( hour < 10 ) ? '0' + hour : hour;
  minute = ( minute < 10 ) ? '0' + minute : minute;
  seconds = ( seconds < 10 ) ? '0' + seconds : seconds;

  const timeNow = hour + ':' + minute + ':' + seconds;
  document.querySelector('.clock').innerText = timeNow;
  
	setTimeout(myClock, 1000);
}

myClock();
