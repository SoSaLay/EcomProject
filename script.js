


const toggleButton= document.getElementsByClassName('toggle')[0]
const navBarLinks= document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function(){
navBarLinks.classList.toggle('active')


})



document.addEventListener('DOMContentLoaded',function(){
    
const warpper= document.querySelector('.testimonial-wrapper')
const testimonial= Array.from(warpper.children)
const leftArrow=document.querySelector('.left-Arrow')
const rightArrow=document.querySelector('.right-Arrow')

let start=0;
const delay=100;



function showNext(){
    start = (start+1) % testimonial.length
    warpper.style.transform= `translateX(${-start * 50}%)`
}

function showPrevious(){
    start= (start-1 + testimonial.length) % testimonial.length;
    warpper.style.transform= `translateX(${-start * 50}%)`

}

let intervalA= setInterval(showNext, delay);

function stopSlide(){
    clearInterval(intervalA)
}

rightArrow.addEventListener('click', function(){
    stopSlide();
    showNext();
});


leftArrow.addEventListener('click', function(){
    stopSlide();
    showPrevious();

});




})
