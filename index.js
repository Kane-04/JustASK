

window.addEventListener("scroll", ()=>{
    var nav = document.querySelector("nav");
    console.log(nav.classList);
    nav.classList.toggle("sticky", window.scrollY > 0)
})