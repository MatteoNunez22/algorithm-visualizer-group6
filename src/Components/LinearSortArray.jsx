import React from "react";
import "../Style/LinearSortArray.css"

function LinearSortArray() {
    let array = [];
    let maxValue = 20; // the maximum value of a number generated in the array
    let canvasId = "selection-sort-canvas";
    let canvasWidth = 400;
    let canvasHeight = canvasWidth / 2;
    let color = "rgb(255, 0, 0)"; // The color used for the draw() function
    let highlightColor = "rgb(0, 0, 255)"; // The highlight color used for the draw() function
    let canvas; // The canvas where the animation will be displayed
    let context; // The context of the canvas
    let scaleFactor; // The scale factor used for the draw() function 
    let animationDelay = 400; // The amount of milliseconds to pause between frames of the bubble sort animation

    // Randomly generate an array of 10 values between 1 and 20
    function randomArrayGenerate() {
        let arrayLength = 10;
        for (let i = 0; i < arrayLength; i++) {
            array[i] = Math.floor((Math.random() * maxValue) + 1);
        }
        updateElements(); // Update the numbers displayed on the screen
        canvas_init(); // Initialize the canvas
        draw(); // Draw the array on the canvas
        console.log('Random array generated.');
    }

    // Perform insertion sort without animation
    function sortCurrentArray() {
        canvas_init();
        let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i - 1;
            while ((j > -1) && (current < array[j])) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = current;
        }
        updateElements();
        draw();
        console.log('Array sorted.');
    }

    function insertionSortAnimation()
    {
        let i = 0; // The last index of the sorted part of the array
        let len = array.length; // The length of the unsorted part of the array

        insertionSort(i, i, len);
    }

    function insertionSort(i, j, len)
    {
        // Performs one iteration of insertion sort
        let helper = function(j)
        {
            let swapped = false;
            let indexToHighlight;
            if (j === i) // Special case just for the animation
            {
                indexToHighlight = i - 1;
                j--;
                swapped = true;
            }
            else
            {
                indexToHighlight = -1;

                let temp = array[j+1]; // Temporary storage to swap elements

                if (j >= 0 && temp < array[j])
                {
                    array[j + 1] = array[j];
                    array[j] = temp;
                    swapped = true;
                    indexToHighlight = j;
                }
            }
            
            draw(indexToHighlight);

            if (j > 0 && swapped) // A full pass of insertion sort has not yet been completed
            {
                setTimeout(function() {helper(j - 1);}, animationDelay); // run helper function to continue passing over the array and pause for some time
            }
            else // A full pass of insertion sort has been completed
            {
                if (len > 0) // Array still not fully sorted
                {
                    setTimeout(function() {insertionSort(i + 1, i + 1, len - 1);}, animationDelay); // run the insertionSort function to do another pass over the array and pause for some time
                }
                else
                {
                    setTimeout(function() {draw(-1);}, animationDelay); // Draw the array without a highligted index
                    return; // The array is sorted
                }
            }
        }

        helper(j);
    }

    // Perform bubble sort with animation
    function bubbleSortAnimation()
    {
        var swapped = false;
        
        // Performs one iteration of bubble sort
        let helper = function (i)
        {
            let indexToHighlight;

            if (i === -1) // Special case just for animation
            {
                indexToHighlight = 1;
            }
            else if (array[i] > array[i+1]) // Compare the elements
            {
                // Swap array[i] and array[i+1]
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;

                swapped = true;
            }
            
            indexToHighlight = i+1; // Set the current index for the draw() function (when indexToHighlight becomes array.length, no element will be highlighted)
            draw(indexToHighlight); // Draw one frame of the animation
            
            if (i < array.length) // a full pass of the array has not yet been completed
            {
                setTimeout(function() {helper(i+1);}, animationDelay); // run helper function to continue passing over the array and pause for some time
            }
            else // a full pass of the array has been completed
            {
                if (swapped) {
                    setTimeout(function() {bubbleSortAnimation();}, animationDelay); // run bubbleSortAnimation function to do another pass over the array and pause for some time
                }
                else
                {
                    return; // The array is sorted if there was not a swap that full pass of the array
                }
            }
        }

        helper(-1); // Start a full pass through the array
    }

    // Update the values of the array elements displayed on the screen
    function updateElements()
    {
        let idBeginning = "element";
        for (let j = 0; j < array.length; j++) {
            let id = idBeginning.concat(j);
            document.getElementById(id).innerHTML = array[j];
        }
    }

    // Initialize the canvas where the animation will be displayed
    function canvas_init()
    {
        canvas = document.getElementById(canvasId); // Get the canvas
        canvas.width = canvasWidth; // Set the canvas width
        canvas.height = canvasHeight; // Set the canvas height

        scaleFactor = canvasWidth / maxValue; // The factor to determine the height of the lines

        context = canvas.getContext("2d"); // Get the canvas context
        context.lineWidth = scaleFactor / 2; // Set the width of the lines that will be drawn
        context.strokeStyle = color; // Set the color that will be used to draw lines
    }

    // Draw the state of the array on the canvas (one frame in the animation)
    function draw(indexToHighlight)
    {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // For each element of the array, draw that element as a line
        for (var i = 0; i < array.length; i++)
        {
            if (i === indexToHighlight) // Use a different color for the current index
            {
                context.strokeStyle = highlightColor; // Set the color that will be sued to draw the current element
            }
            else
            {
                context.strokeStyle = color; // Set the color that will be used to draw the other elements
            }

            context.beginPath();
            context.moveTo(0, (i + 0.5) * scaleFactor);
            context.lineTo(array[i] * scaleFactor, (i + 0.5) * scaleFactor);

            context.stroke(); // Draw the element of the array
        }

        updateElements(); // Update the value of the elements displayed on the screen
    }

    return (
        <div id="container">
            <p>Linear Sort Array</p>
            <div id="array">
                <p>Indexes</p>
                <div id="indexes">
                    <div className="elementIndex">0</div>
                    <div className="elementIndex">1</div>
                    <div className="elementIndex">2</div>
                    <div className="elementIndex">3</div>
                    <div className="elementIndex">4</div>
                    <div className="elementIndex">5</div>
                    <div className="elementIndex">6</div>
                    <div className="elementIndex">7</div>
                    <div className="elementIndex">8</div>
                    <div className="elementIndex">9</div>
                </div>
                <div id="arrows">
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                </div>
                <div id="elements">
                    <div id="element0" className="square">A</div>
                    <div id="element1" className="square">B</div>
                    <div id="element2" className="square">C</div>
                    <div id="element3" className="square">D</div>
                    <div id="element4" className="square">E</div>
                    <div id="element5" className="square">F</div>
                    <div id="element6" className="square">G</div>
                    <div id="element7" className="square">H</div>
                    <div id="element8" className="square">I</div>
                    <div id="element9" className="square">J</div>
                </div>
                <p id="elementTitle">Elements</p>
                <button onClick={randomArrayGenerate}>RANDOM</button>
                <br></br>
                <button onClick={insertionSortAnimation}>LINEAR SORT</button>
                <button onClick={bubbleSortAnimation}>BUBBLE SORT</button>
                <div id="container">
                    <h1>Sort Animation</h1>
                    <canvas id="selection-sort-canvas" width='" + canvasWidth + "px"' height='" + canvasHeight + "px"'></canvas>
                </div>
            </div>
        </div>
    );
}

export default LinearSortArray;