"use strict";

// Get references to all elements
const buttons = document.querySelectorAll('.buttons button');
const gameContainer = document.querySelector('.game-container');

// Create object mapping buttons to their corresponding boxes
const boxMap = {
    1: document.getElementById('box1'),
    2: document.getElementById('box2'),
    3: document.getElementById('box3')
};

// Add click event listeners to buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => handleButtonClick(index + 1));
});

// Function that handles button clicks
function handleButtonClick(buttonNumber) {
    // Get the box element that corresponds to clicked button
    const box = boxMap[buttonNumber];
    
    // Remove box from its current position
    gameContainer.removeChild(box);
    
    // Insert box at new position based on button number
    switch(buttonNumber) {
        case 1:
            // Move to first position
            gameContainer.appendChild(box);
            break;
            
        case 2:
            // Move to second position between box1 and box3
            const box1 = document.getElementById('box1');
            const box3 = document.getElementById('box3');
            gameContainer.insertBefore(box, box3);
            break;
            
        case 3:
            // Move to third position
            gameContainer.appendChild(box);
            break;
    }
}
