const btn = document.getElementById("btn")
const nav = document.getElementById("navi")

btn.addEventListener("click",  () => {
    nav.classList.toggle("active")
    btn.classList.toggle("active")
})

nav.addEventListener("click", ()=> {
    btn.classList.remove("active")
    nav.classList.remove("active")
})