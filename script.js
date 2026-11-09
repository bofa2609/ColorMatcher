"use strict";

// Get references to all elements
const buttons = document.querySelectorAll('.buttons button');
const boxes = {
    box1: document.getElementById('box1'),
    box2: document.getElementById('box2'),
    box3: document.getElementById('box3')
};

// Add click event listeners to buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => handleButtonClick(index + 1));
});

// Function that handles button clicks
function handleButtonClick(buttonNumber) {
    // Get the current position of the clicked box
    const box = boxes[`box${buttonNumber}`];
    
    // Calculate new positions based on screen size
    const containerWidth = document.querySelector('.game-container').offsetWidth;
    const boxWidth = box.offsetWidth;
    
    // Move the box to a new position relative to its original place
    switch(buttonNumber) {
        case 1:
            box.style.transform = `translateX(-${containerWidth / 2}px)`;
            break;
            
        case 2:
            box.style.transform = `translateX(${boxWidth * 3}px)`;
            break;
            
        case 3:
            box.style.transform = `translateX(${containerWidth}px)`;
            break;
    }
    
    // Add a smooth transition effect
    box.style.transition = 'transform 0.5s ease-in-out';
}
