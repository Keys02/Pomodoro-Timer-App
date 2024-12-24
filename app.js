let startBtn = document.querySelector("li.start-time-btn");
let stopBtn = document.querySelector("li.stop-time-btn");
let disMin = document.querySelector("span.minutes");
let disSec = document.querySelector("span.seconds");
let button = document.querySelector("button")

function formatTime(time){
    return time<10?`0${time}`:time
}


function Pomodoro(minsTime,secsTime){
    let minutesTime = minsTime;
    let secondsTime = secsTime;
    let timeStart; 
    
    function clickToStart(){
        startBtn.removeEventListener("click",clickToStart) //Remove the event when the start button is clicked
        stopBtn.style.cursor = "pointer"
        startBtn.style.cursor = "default" 
        timeStart = setInterval(function(){

            //Decreasing the seconds
            if(secondsTime>0){
                secondsTime--
                disMin.innerHTML = formatTime(minutesTime)
                disSec.innerHTML = formatTime(secondsTime)
            }

            //End the time with an alert message
            else if(secondsTime==0 && minutesTime==0){
                alert("Take a 5-mins break.")
                clearInterval(timeStart) //Stop the timer when the minutes and seconds reaches 0
                minutesTime = minsTime
                secondsTime = secsTime
                disMin.innerHTML = formatTime(0)
                disSec.innerHTML = formatTime(0)
                startBtn.addEventListener("click",clickToStart)
                startBtn.style.cursor  = "pointer";
            }

            //Decrease the minute when the seconds reaches 0
            else{
                minutesTime--
                secondsTime = 59
                disMin.innerHTML = formatTime(minutesTime)
                disSec.innerHTML = formatTime(secondsTime)
            }
        },1000)

            //Reset and pause the time at the same time
            stopBtn.addEventListener("click",function(){
                startBtn.addEventListener("click",clickToStart) //Add the event back when the stop button is clicked
                startBtn.style.cursor = "pointer"
                minutesTime = minsTime
                secondsTime =  secsTime
                clearInterval(timeStart) //Stop the timer when the stop button is clicked
                disMin.innerHTML = formatTime(minutesTime)
                disSec.innerHTML = formatTime(secondsTime)  
            })
    }
    startBtn.addEventListener("click",clickToStart)
}
    Pomodoro(25,0)
