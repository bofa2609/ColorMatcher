"use strict";

// Get references to all elements
const buttons = document.querySelectorAll('.buttons button');
const gameContainer = document.querySelector('.game-container');

// Initialize boxOrder array with default order
let boxOrder = ['box1', 'box2', 'box3'];

// Create a reference map for quick access
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
    // Update the boxOrder array based on which button was clicked
    switch(buttonNumber) {
        case 1:
            // Move box1 to index 0 (already there, no change)
            if (boxOrder.indexOf('box1') !== 0) {
                boxOrder.unshift('box1');
                boxOrder.splice(boxOrder.indexOf('box1') + 1, 1);
            }
            break;
            
        case 2:
            // Move box2 to index 1
            const currentIndex = boxOrder.indexOf('box2');
            if (currentIndex !== 1) {
                // Remove box2 from current position
                boxOrder.splice(currentIndex, 1);
                // Insert at position 1
                boxOrder.splice(1, 0, 'box2');
            }
            break;
            
        case 3:
            // Move box3 to index 2
            currentIndex = boxOrder.indexOf('box3');
            if (currentIndex !== 2) {
                // Remove box3 from current position
                boxOrder.splice(currentIndex, 1);
                // Insert at position 2
                boxOrder.splice(2, 0, 'box3');
            }
            break;
    }
    
    // Clear and re-render the game container with new order
    gameContainer.innerHTML = '';
    
    // Append boxes in the new order
    boxOrder.forEach(id => {
        const box = document.getElementById(id);
        gameContainer.appendChild(box);
    });
}
