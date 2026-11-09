"use strict";

// Get references to all elements
const buttons = document.querySelectorAll('.buttons button');
const gameContainer = document.querySelector('.game-container');

// Create object map for quick access
const boxes = {
    box1: document.getElementById('box1'),
    box2: document.getElementById('box2'),
    box3: document.getElementById('box3')
};

// Button click handlers
buttons.forEach((button, index) => {
    button.addEventListener('click', () => handleButtonClick(index + 1));
});

function handleButtonClick(buttonNumber) {
    // Get the box element for the clicked button
    const currentBox = boxes[`box${buttonNumber}`];

    // Get all child elements (boxes)
    const containerChildren = Array.from(gameContainer.children);

    // Remove the current box from its current position
    const currentIndex = containerChildren.indexOf(currentBox);
    if (currentIndex !== -1) {
        gameContainer.removeChild(containerChildren[currentIndex]);
    }

    // Determine target index based on button number
    const targetIndex = buttonNumber === 2 ? 1 : buttonNumber - 1;

    // Insert the box at the correct position
    if (targetIndex <= containerChildren.length) {
        gameContainer.insertBefore(currentBox, containerChildren[targetIndex] || null);
    }
}
