let searchBtn= document.querySelector("#search-btn")
let searchBar= document.querySelector(".search-bar-container")
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
});
let formBtn= document.querySelector("#login-btn")
let loginForm= document.querySelector(".login-page-container")
let formClose= document.querySelector("#form-close")

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active')
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active')
});

let menu= document.querySelector('#menu-bar')
let navbar= document.querySelector('.navbar')
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
});