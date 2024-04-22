// Home Page Code for responsiveness

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}


if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

//Single product code 

// Get the main image element
var mainImg = document.getElementById('main');

// Get all small image elements
var smallImgs = document.getElementsByClassName('small_img');

// Add event listeners to each small image
for (var i = 0; i < smallImgs.length; i++) {
    smallImgs[i].addEventListener('click', function() {
        // Set the source of the main image to the clicked small image
        mainImg.src = this.src;
    });
}


//cart page

// let cart = [];

// function addToCart(productName, price) {
//     cart.push({ name: productName, price: price });
//     displayCart();
// }

// function displayCart() {
//     const cartElement = document.getElementsByClassName('cart');
//     cartElement.innerHTML = '';
//     cart.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.innerHTML = `
//             <p>${item.name} - $${item.price}</p>
//         `;
//         cartElement.appendChild(itemElement);
//     });
// }

// Here this function is for blog page where continue-reading button is Added.

function toggleParagraph() {
    var paragraphs = document.getElementsByClassName("hiddenParagraph");
    var buttons = document.getElementsByClassName("toggleButton");

    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].style.display === "none" || paragraphs[i].style.display === "") {
            paragraphs[i].style.display = "block";
            buttons[i].textContent = "Show Less";
        } else {
            paragraphs[i].style.display = "none";
            buttons[i].textContent = "Continue Reading";
        }
    }
}


//here is code to create a moving text in about section page. 
// Get the moving text element
var textElement = document.getElementById("movingText");

// Define the initial position of the text
// var position = 0;

// // Define the speed at which the text moves (pixels per interval)
// var speed = 1;

// // Define the distance at which the text will wrap around
// var wrapDistance = window.innerWidth;

// // Function to move the text horizontally
// function moveText() {
//     // Increment the position of the text
//     position += speed;

//     // If the text moves beyond the wrap distance, reset its position
//     if (position > wrapDistance) {
//         position = -textElement.offsetWidth;
//     }

//     // Set the new position of the text
//     textElement.style.left = position + "px";
// }

// // Call the moveText function every 10 milliseconds (adjust as needed for desired speed)
// setInterval(moveText, 10);
