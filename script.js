// Psuedocode
// 1. Create an html page with a buton a text
// 2. Let both have unique ids
// 3. Hide the text using css
// 4. Create  a callback function that shows the text when a button is clicked
// 5. Get the button using queryselector
// 6. The adEventLister lsistens for click event,
// 7. When a click event is clicked, the callback function is called, hence showing the text
// in the browser

function clickMe() { 
    let shw = document.getElementById('show')
    shw.style.display="block"
 }
 let btn = document.querySelector('#btn');
 btn.addEventListener('click',clickMe);