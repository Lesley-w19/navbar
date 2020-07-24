const navBtn = document.querySelector(".btn");
const navLinks = document.querySelector(".theLinks")

navBtn.addEventListener('click', ()=>{
    // console.log(navLinks.classList);
    navLinks.classList.toggle('showLinks')
})