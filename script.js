


const toggleButton= document.getElementsByClassName('toggle')[0]
const navBarLinks= document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function(){
navBarLinks.classList.toggle('active')


})


// carousel
document.addEventListener('DOMContentLoaded',function(){
    
const warpper= document.querySelector('.testimonial-wrapper')
const testimonial= Array.from(warpper.children)
const leftArrow=document.querySelector('.left-Arrow')
const rightArrow=document.querySelector('.right-Arrow')

let start=0;
const delay=2000;

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


// Form Validation

document.addEventListener('DOMContentLoaded',function(){
const form= document.getElementById('contactForm');

form.addEventListener('submit', function(event){
    event.preventDefault();


    const isFormGood= form.checkValidity();

    isFormGood? window.location.href= 'confirmation.html': alert('Please fill all required fields')

})
})



document.addEventListener('DOMContentLoaded', ()=>{

    fetch('products.json')
    .then(response=>response.json())
    .then(products=>{
        const container = document.getElementById('productsContainer');
        products.forEach(product=>{
            const box= document.createElement('div');
            box.classList.add('product-box');

            box.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
        `;

        container.appendChild(box);
        });

    })

    .catch(error=> console.error('Error loading products:',error))

});





















