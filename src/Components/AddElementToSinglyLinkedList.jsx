import React from "react";
import "../Style/AddElementToSinglyLinkedList.css";

function AddElementToSinglyLinkedList() 
{
    let list = [];
    let listLength = 0; // The length of the list
    let maxValue = 20; // the maximum value of a number generated in the array
    let animationDelay = 400; // the amount of milliseconds to pause between frames of the animation

    // Update the list elements and their values on the screen and highlight an element
    function updateElements(indexToHighlight)
    {
        // Update innerHtml code for the list elements
        let innerHtml = ""; // The html code to use

        for (let i = 0; i < listLength; i++)
        {
            if (i == indexToHighlight)
            {
                innerHtml += "<td><div id=\"element" + i + "\" class=\"squareHighlighted\">" + list[i] + "</div></td>" + "\n" + "<td><div id=\"arrow0" + i + "\" class=\"arrow right\"></div></td>";
            }
            else
            {
                innerHtml += "<td><div id=\"element" + i + "\" class=\"square\">" + list[i] + "</div></td>" + "\n" + "<td><div id=\"arrow0" + i + "\" class=\"arrow right\"></div></td>";
            }
        }

        innerHtml += "<td><div id=\"element10\" class=\"square\">null</div></td>"

        document.getElementById("elementTable").innerHTML = innerHtml;

        // Update innerHtml code for the list indexes
        innerHtml = ""; // The html code to use

        for (let i = 0; i < listLength; i++)
        {
            innerHtml += "<td><div class=\"elementIndex\">" + i + "</div></td>\n" + "<td><brIndex></brIndex></td>\n";
        }

        document.getElementById("indexesTable").innerHTML = innerHtml;
    }

    function addElementAnimation()
    {
        let targetIndex = parseInt(document.getElementById("elementIndexToAdd").value);
        let targetValue = parseInt(document.getElementById("elementValueToAdd").value);

        if (isNaN(targetIndex)) { // Return if not a number
            return;
        }

        if (targetIndex > listLength)
        {
            targetIndex = listLength;
        }

        addElement(0, targetIndex, targetValue);
    }


    function addElement(currentIndex, targetIndex, targetValue) {
        
        updateElements(currentIndex);

        if (currentIndex == targetIndex + 2) // We have passed the target index and added the element
        {
            // Update the value of the element added
            list[targetIndex] = targetValue;
            updateElements(-1);
        }
        else // We have not yet added the element
        {
            if (currentIndex == targetIndex + 1) // We have passed the target index
            {
                // Update the list to add the element (with a value of "null")
                list.splice(targetIndex, 0, "null"); 
                listLength = list.length;
                updateElements(targetIndex);
            }

            setTimeout(function() {addElement(currentIndex + 1, targetIndex, targetValue);}, animationDelay); // Continue moving to the target index after a delay
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
                        <td><div id="element10" class="square">null</div></td>
                    </tr>       
                </table>
                <br></br>
                <p id="elementTitle">Elements</p>
                <div class="row">
                    <div>
                        <p>Index</p>
                        <input type="text" id="elementIndexToAdd"></input>
                        <p>Value</p>
                        <input type="text" id="elementValueToAdd"></input>
                    </div>
                </div>
                <br></br>
                <button onClick={addElementAnimation}>ADD ELEMENT</button>
            </div>
        </div>
    );
}

export default AddElementToSinglyLinkedList;