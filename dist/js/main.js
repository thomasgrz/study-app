//grab the timer elements
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let toggle = document.getElementById("button")
let form = document.getElementById("todo-form")
let input = document.getElementById("new-task")
let ul = document.getElementById("todo-list")
let completed = document.getElementById("completed-tasks")
let total = document.getElementById("total-tasks")
let completed_tasks_count = 0
let total_tasks_count = 0

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

//keep track of the created todos
let memory = []

//create new tasks 
form.addEventListener("submit",(event)=>{
    event.preventDefault()//prevent default form action (POST)
    let span = document.createElement("span") // create span to hold todo
    if(!input.value) return;
    span.innerHTML = input.value  //insert new task into span
    input.value = ""  
    let li = document.createElement("li") //create list element
    li.setAttribute("iscomplete",false) 
    let button = document.createElement("button") //create completion button
    let done = document.getElementById("done-list")
    //handle button clicks
    button.addEventListener("click",function(){
        if(li.getAttribute("iscomplete")==="false"){
            completed_tasks_count++
            completed.innerHTML = completed_tasks_count
        }else{
            completed_tasks_count--
            completed.innerHTML = completed_tasks_count
        }
        ul.removeChild(li)
        done.appendChild(li)
        li.removeChild(button)
    })

    button.innerHTML = "complete"
    li.appendChild(span)
    li.appendChild(button)
    li.style.height = "30px"
    ul.appendChild(li)
    total_tasks_count++
    total.innerHTML = total_tasks_count
})