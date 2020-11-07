import React from "react";
import "../Style/RemoveElementFromSinglyLinkedList.css";

function RemoveElementFromSinglyLinkedList() 
{
    let list = [];
    let listLength = 10; // The length of the list
    let maxValue = 20; // the maximum value of a number generated in the array
    let animationDelay = 400; // the amount of milliseconds to pause between frames of the animation
    
    // Randomly generate a list of values between 1 and 20
    function randomListGenerate() {
        for (let i = 0; i < listLength; i++) {
            list[i] = Math.floor((Math.random() * maxValue) + 1);
        }

        updateElements(-1); // Update the numbers displayed on the screen while not highlighting an element
    }

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

    function removeElementAnimation()
    {
        let targetIndex = parseInt(document.getElementById("elementToRemove").value);

        if (isNaN(targetIndex)) { // Return if not a number
            return;
        }

        if (targetIndex > listLength)
        {
            targetIndex = listLength;
        }

        removeElement(0, targetIndex);
    }


    function removeElement(currentIndex, targetIndex) {
        
        updateElements(currentIndex);

        if (currentIndex == targetIndex + 2) // We have passed the target index and removed the element
        {
            // Update the list
            list = list.filter(function(value, index, arr){ return value != "null";})
            listLength = list.length;
            updateElements(-1);
        }
        else // We have not yet removed the element
        {
            if (currentIndex == targetIndex + 1) // We have passed the target index
            {
                // Remove the element
                list[targetIndex] = "null"; 
                updateElements(targetIndex);
            }

            setTimeout(function() {removeElement(currentIndex + 1, targetIndex);}, animationDelay); // Continue moving to the target index after a delay
        }

    }

    return (
        <div id="container">
            <p>Remove Element from Singly Linked List</p>
            <div id="array">
                <p>List</p>
                <table id="indexesTable">
                    <tr>
                        <td><div class="elementIndex">0</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">1</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">2</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">3</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">4</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">5</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">6</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">7</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">8</div></td>
                        <td><brIndex></brIndex></td>
                        <td><div class="elementIndex">9</div></td>
                    </tr>
                </table>
                <br></br>
                <br></br>
                <table id="elements">
                    <tr id="elementTable">
                        <td><div id="element0" class="square">A</div></td>
                        <td><div id="arrow0" class="arrow right"></div></td>
                        <td><div id="element1" class="square">A</div></td>
                        <td><div id="arrow1" class="arrow right"></div></td>
                        <td><div id="element2" class="square">A</div></td>
                        <td><div id="arrow2" class="arrow right"></div></td>
                        <td><div id="element3" class="square">A</div></td>
                        <td><div id="arrow3" class="arrow right"></div></td>
                        <td><div id="element4" class="square">A</div></td>
                        <td><div id="arrow4" class="arrow right"></div></td>
                        <td><div id="element5" class="square">A</div></td>
                        <td><div id="arrow5" class="arrow right"></div></td>
                        <td><div id="element6" class="square">A</div></td>
                        <td><div id="arrow6" class="arrow right"></div></td>
                        <td><div id="element7" class="square">A</div></td>
                        <td><div id="arrow7" class="arrow right"></div></td>
                        <td><div id="element8" class="square">A</div></td>
                        <td><div id="arrow8" class="arrow right"></div></td>
                        <td><div id="element9" class="square">A</div></td>
                        <td><div id="arrow9" class="arrow right"></div></td>
                        <td><div id="element10" class="square">A</div></td>
                    </tr>       
                </table>
                <br></br>
                <p id="elementTitle">Elements</p>
                <button onClick={randomListGenerate}>RANDOM LIST</button>
                <br></br>
                <div class="row">
                    <button onClick={removeElementAnimation}>REMOVE ELEMENT</button>
                    <input type="text" id="elementToRemove"></input>
                </div>
            </div>
        </div>
    );
}

export default RemoveElementFromSinglyLinkedList;