console.log("modal logic connected")
let modalbutton = document.getElementsByClassName("close")[0]
modalbutton.onclick = ()=>{modal.style.display = "none"}

let aboutmodalbutton = document.getElementsByClassName("about-modal-button")[0]
aboutmodalbutton.setAttribute("onclick","About()")

let aboutmodal = document.getElementById("about-modal")

let about_close = document.getElementById("close-about-modal")
about_close.setAttribute("onclick","closeAbout()")
//close about modal clicks 
function closeAbout(){
    debugger
    aboutmodal.style.display = "none"
}

//about modal clicks
function About(){
    debugger
    let about = document.getElementById("about-modal")
    about.style.display = "block"
}