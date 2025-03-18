const navSection = document.querySelector(".nav-section")
const closeButton = document.querySelector(".close-icon")
const openButton = document.querySelector(".open-icon")

closeButton.addEventListener("click",()=>{
    navSection.classList.add("close-side-menu")
})
openButton.addEventListener("click",()=>{
    navSection.classList.remove("close-side-menu")
})

