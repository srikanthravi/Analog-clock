const hour =document.querySelector(".hours");
const minute =document.querySelector(".minutes");
const second =document.querySelector(".seconds");

setInterval(runClock,1000);

function runClock(){
    const time=new Date();
    const sec =time.getSeconds()/60;
    const min =(sec+time.getMinutes())/60;
    const hrs =(min+time.getHours())/12;
    console.log(hrs,min,sec);
    hour.style.setProperty('--rotation',hrs*360) 
    minute.style.setProperty('--rotation',min*360)
    second.style.setProperty('--rotation',sec*360)
    
}
runClock()