//grab the timer elements
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let toggle = document.getElementById("button")

//set the time amount corresponding to seconds/minuts 
//in milliseconds
const minuteAmount = 60000
const secondAmount = 1000

//set up counters for each respective timer element
let minuteHand = 1
let secondHand = 1

//increase the minute hand every minute
setInterval(()=>{
    minutes.innerHTML = minuteHand
    minuteHand++;
},minuteAmount)

//increase the second hand every second
setInterval(()=>{
    if(secondHand == 60){
        secondHand = 0
    }
    seconds.innerHTML = secondHand
    secondHand++
},secondAmount)

//insert variables into task tracker
completed.innerHTML = completed_tasks_count
total.innerHTML = total_tasks_count
