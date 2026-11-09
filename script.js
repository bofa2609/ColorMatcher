"use strict";

// Get the container and all boxes
const gameContainer = document.querySelector('.game-container');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

// Create an array to hold the actual DOM elements
let boxes = [box1, box2, box3];

// Button 1 -> Move Box 1 to position 0 (first)
document.querySelectorAll('.buttons button')[0].addEventListener('click', () => {
    moveBox(0, box1);
});

// Button 2 -> Move Box 2 to position 1 (second)
document.querySelectorAll('.buttons button')[1].addEventListener('click', () => {
    moveBox(1, box2);
});

// Button 3 -> Move Box 3 to position 2 (third)
document.querySelectorAll('.buttons button')[2].addEventListener('click', () => {
    moveBox(2, box3);
});

function moveBox(targetIndex, boxElement) {
    // 1. Remove the box from its current position in the array
    boxes = boxes.filter(b => b !== boxElement);
    
    // 2. Insert it at the new target position
    boxes.splice(targetIndex, 0, boxElement);
    
    // 3. Clear the screen container
    gameContainer.innerHTML = '';
    
    // 4. Put the boxes back on the screen in the new order
    boxes.forEach(box => {
        gameContainer.appendChild(box);
    });
}