const hamburger = document.querySelector(".hamburger")
const navOptions = document.querySelector(".nav-options")


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navOptions.classList.toggle("active")
})

document.querySelectorAll("nav-option--items").forEach(item=>item.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navOptions.classList.remove("active")

}))