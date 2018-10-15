//create a start stop button with a changing
//mode attribute
const button = document.getElementById("button")
button.setAttribute("onclick","toggle()")

let timer_end = new CustomEvent("timer_end")
let fiveminutebreak, studyTimer
//create memory of the timer cycles
let round = 0
let activeTimerType = "study"
//grab the timer elements
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

//save the time amount corresponding to seconds/minutes
//for reference when the timer is toggled
let memory  = {
    minutes: 0,
    seconds: 0,
    timerType: "",
    timerStatus: 0 //0 = timer off, 1 = timer on
}

//set up counters for each respective timer element
let minuteHand = 1
let secondHand = 1

//toggle logic==================

function toggle(){
    debugger
    //get the mode attribute of the start/stop button
    let mode = memory.timerStatus
    if(!mode){
        memory.timerStatus = 1

        button.innerHTML = "STOP"
        return initiateStudy()
    }else{
        memory.timerStatus = 0
        memory.minutes = JSON.parse(minuteHand.innerText)
        memory.seconds = JSON.parse(secondHand.inerText)
        button.innerHTML = "START"
        return clearInterval(studyTimer)
    }
}

//increase the timer every second until 25 minutes
function initiateStudy(){
    debugger
    minuteHand = memory.minutes
    minutes.innerHTML = minuteHand
    studyTimer = setInterval(()=>{
        activeTimerType = "study"
        if(minuteHand<25){
            if(secondHand == 60){
                secondHand = 0
                minuteHand++
                minutes.innerHTML = minuteHand
            }
            if(secondHand<10){
                seconds.innerHTML = '0' + secondHand
            }else{
                seconds.innerHTML = secondHand
            }
            secondHand++
        }else{
            clearInterval(studyTimer)
            document.dispatchEvent(add_tomato)
            document.dispatchEvent(timer_end)
        }
    },5)
} 

//increase the timer every second until 5 minutes
function initiateBreak(){
    activeTimerType = "break"
    clearInterval(studyTimer)
    
    minuteHand = 0
    minutes.innerHTML = minuteHand
    secondHand = 0
    fiveminutebreak = setInterval(()=>{
        if(minuteHand<5){
            if(secondHand == 60){
                secondHand = 0
                minuteHand++
                minutes.innerHTML = minuteHand
            }
            if(secondHand<10){
                seconds.innerHTML = '0' + secondHand
            }else{
                seconds.innerHTML = secondHand
            }
            secondHand++
        }else{
            clearInterval(fiveminutebreak)
            document.dispatchEvent(timer_end)
        }
    },5)
} 

//stop time when toggle is pressed
// toggle.addEventListener("click",()=>{
//     clearInterval(studyTimer)
// })
//update round when timer ends and initiate break time
document.addEventListener("timer_end", ()=>{
    debugger
    console.log(round)
    if(round>3){
        return clearInterval(initiateStudy)
    }
    if(activeTimerType ==="study"){
        round++
        return initiateBreak()
    }else{
        return initiateStudy()
    }
})


