"use strict";

const gameContainer = document.querySelector('.game-container');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

// Array holding the current order of the boxes
let boxes = [box1, box2, box3];

// Button 1 -> Swap Box 1 with whatever is in position 1
document.querySelectorAll('.buttons button')[0].addEventListener('click', () => {
    swapBox(0, box1);
});

// Button 2 -> Swap Box 2 with whatever is in position 2
document.querySelectorAll('.buttons button')[1].addEventListener('click', () => {
    swapBox(1, box2);
});

// Button 3 -> Swap Box 3 with whatever is in position 3
document.querySelectorAll('.buttons button')[2].addEventListener('click', () => {
    swapBox(2, box3);
});

function swapBox(targetIndex, boxElement) {
    const currentIndex = boxes.indexOf(boxElement);
    
    // If the box is already in the target position, do nothing
    if (currentIndex === targetIndex) return; 
    
    // Swap the box with the one currently in the target position
    const elementAtTarget = boxes[targetIndex];
    boxes[targetIndex] = boxElement;
    boxes[currentIndex] = elementAtTarget;

    // Clear and redraw the container
    gameContainer.innerHTML = '';
    boxes.forEach(box => gameContainer.appendChild(box));
}