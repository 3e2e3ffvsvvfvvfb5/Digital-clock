const HoursE1=document.getElementById("hour");
const minutesE1=document.getElementById("minutes");
const secondsE1=document.getElementById("seconds");
const ampE1=document.getElementById("amp");

function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let amp="AM"
    if(h>12){
        h=h-12;
        amp="PM";
    }
      h=h<10?"0"+h:h;
      s=s<10?"0"+s:s;
      m=m<10?"0"+m:m;



    HoursE1.innerText=h;
    minutesE1.innerText=m;
    secondsE1.innerText=s;
    ampE1, (innerText=amp);
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock();