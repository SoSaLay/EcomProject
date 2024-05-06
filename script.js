const toggleButton= document.getElementsByClassName('toggle')[0]
const navBarLinks= document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function(){
navBarLinks.classList.toggle('active')


})
