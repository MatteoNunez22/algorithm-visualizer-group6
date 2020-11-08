import React from "react";
import "../Style/UpdateElementFromDoublyLinkedList.css";

function UpdateElementFromDoublyLinkedList() 
{
    let list = []; // The list that will be drawn on the screen for every frame of the animation
    let listLength = 0; // The length of the list
    let animationDelay = 400; // the amount of milliseconds to pause between frames of the animation

    // Draw the list elements and their values on the screen and highlight an element (by changing the innerHtml code of the elements and indexes)
    function drawList(indexToHighlight)
    {
        // Update innerHtml code for the list elements
        let innerHtml = ""; // The html code to update

        // For every element of the list
        for (let i = 0; i < listLength; i++)
        {
            if (i === indexToHighlight) // Draw element at index i with a the highlight color
            {
                innerHtml += "<td><div id=\"element" + i + "\" class=\"squareHighlighted\">" + list[i] + "</div></td>" + "\n";
            }
            else // Draw element at index i with the standard color
            {
                innerHtml += "<td><div id=\"element" + i + "\" class=\"square\">" + list[i] + "</div></td>" + "\n";
            }
            
            if (i !== listLength - 1) // Draw arrows after the element (but not after the last element)
            {
                innerHtml += "<td><div id=\"arrow" + i + "\" class=\"arrow left\"></div></td>" + "\n" + "<td><div id=\"arrow" + i + "\" class=\"arrow right\"></div></td>";
            }
        }

        document.getElementById("elementTable").innerHTML = innerHtml; // Update the innerHtml code of the elements

        // Update innerHtml code for the list indexes
        innerHtml = ""; // The html code to update

        for (let i = 0; i < listLength; i++)
        {
            innerHtml += "<td><div class=\"elementIndex\">" + i + "</div></td>\n" + "<td><brIndex></brIndex></td>\n";
        }

        document.getElementById("indexesTable").innerHTML = innerHtml; // Update the innerHtml code of the indexes
    }

    // Called when the ADD ELEMENT button is clicked
    function addElementButtonClicked()
    {
        updateElementAnimation("addElement");
    }

    // Called when the REMOVE ELEMENT button is clicked
    function removeElementButtonClicked()
    {
        updateElementAnimation("removeElement");
    }

    // Called when the MODIFY ELEMENT button is clicked
    function modifyElementButtonClicked()
    {
        updateElementAnimation("modifyElement");
    }

    // Starts the animation to update an element depending on the action
    // There are three actions: adding an element, removing an element, and updating an element
    function updateElementAnimation(action)
    {
        let targetIndex = parseInt(document.getElementById("elementIndexToUpdate").value); // index of element to update
        let targetValue = parseInt(document.getElementById("elementValueToUpdate").value); // value of element to add or modify

        if (isNaN(targetIndex) || targetIndex < 0 || targetIndex >= listLength && action !== "addElement") { // Return if not not a valid index
            return;
        }

        if (targetIndex > listLength)
        {
            targetIndex = listLength;
        }

        // Decide whether to update the element starting from the head or tail
        if (targetIndex < listLength / 2 || listLength === 0 || targetIndex === 0)
        {
            updateElement(0, targetIndex, targetValue, action, "head"); // Update the element starting from the head
        }
        else 
        {
            updateElement(listLength - 1, targetIndex, targetValue, action, "tail"); // Update the element starting from the tail
        }
        
    }

    // This method performs an animation and updates an element
    // The method moves from the currentIndex to the targetIndex index by index for the animation
    // The method either increments (when moving from the head) or decrements (when moving from the tail) the currentIndex at each recursive step to approach the targetIndex, depeneding on the direction parameter
    // Once the method has passed the targetIndex, it updates the element depenepding on the action parameter: "addElement", "removeElement", or "modifyElement"
    function updateElement(currentIndex, targetIndex, targetValue, action, direction) {
        
        drawList(currentIndex); // Draw the list to the screen and highlight the currentIndex

        let startUpdating, finishUpdating; // The values of the currentIndex when updating needs to start and needs to finish
        let nextCurrentIndex; // The next value of the current index to pass to use for the recursive call

        if (direction === "head") // Direction is from the head
        {
            startUpdating = targetIndex + 1;
            finishUpdating = targetIndex + 2;
            nextCurrentIndex = currentIndex + 1;
        }
        else // Direction is from the tail
        {
            startUpdating = targetIndex - 1;
            finishUpdating = targetIndex - 2;
            nextCurrentIndex = currentIndex - 1;
        }

        if (currentIndex === finishUpdating) // We have passed the target index and started updating the element
        {
            // Finish updating the element
            if (action === "addElement") // Need to add an element at targetIndex
            {
                // Finish adding the element
                list[targetIndex] = targetValue; // Update the value of the element to the targetValue
            } 
            else if (action == "removeElement") // Need to remove the element at targetIndex
            {
                // Finish removing the element
                list = list.filter(function(value, index, arr){ return value !== "null";}) // Remove the element from the list
                listLength = list.length; // Update listLength
            }
            else // Need to modify the element at targetIndex
            {
                // Finish modifying the element
                list[targetIndex] = targetValue; // Set the value of the element to the targetValue
            }

            drawList(-1); // Draw the list without highlighting an element
        }
        else // We have not yet added the element
        {
            if (currentIndex === startUpdating) // We have passed the target index
            {
                // Start to update the element
                if (action === "addElement") // Need to add an element at targetIndex
                {
                    // Start adding the element
                    list.splice(targetIndex, 0, ""); // Add the element with an empty value
                    
                } 
                else if (action == "removeElement") // Need to remove the element at targetIndex
                {
                    // Start removing the element
                    list[targetIndex] = "null"; // Set the value of the element to "null"
                }
                else // Need to modify the element at targetIndex
                {
                    // Start modifying the element
                    list[targetIndex] = ""; // Set the value of the element to ""
                }

                listLength = list.length; // Update listLength

                drawList(targetIndex); // Draw the list and highltigh the element at the targetIndex
            }

            setTimeout(function() {updateElement(nextCurrentIndex, targetIndex, targetValue, action, direction);}, animationDelay); // Continue moving to the target index after a delay
        }
    }

    return (
        <div id="container">
            <p>Add Element to Singly Linked List</p>
            <div id="array">
                <p>List</p>
                <table id="indexesTable">
                    <tr>
                        <td><brIndex></brIndex></td>
                    </tr>
                </table>
                <br></br>
                <br></br>
                <table id="elements">
                    <tr id="elementTable">
                        <br></br>
                    </tr>       
                </table>
                <br></br>
                <p id="elementTitle">Elements</p>
                <div class="row">
                    <div>
                        <p>Index</p>
                        <input type="text" id="elementIndexToUpdate"></input>
                        <p>Value</p>
                        <input type="text" id="elementValueToUpdate"></input>
                    </div>
                </div>
                <br></br>
                <button onClick={addElementButtonClicked}>ADD ELEMENT</button>
                <br></br>
                <button onClick={removeElementButtonClicked}>REMOVE ELEMENT</button>
                <br></br>
                <button onClick={modifyElementButtonClicked}>MODIFY ELEMENT</button>
            </div>
        </div>
    );
}

export default UpdateElementFromDoublyLinkedList;