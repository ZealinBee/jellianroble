const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('.nav-ul')

hamburger.addEventListener('click', function() {
    navUl.classList.toggle('show')
})