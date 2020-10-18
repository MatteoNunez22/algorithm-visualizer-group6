import React from "react";
import "../Style/LinearSortArray.css"

function LinearSortArray() {
    return (
        <div>
            <p>Linear Sort Array</p>
            <div id="container">
            <p>Indexes</p>
                <div id="indexes">
                    <div className="elementIndex">0</div>
                    <div className="elementIndex">1</div>
                    <div className="elementIndex">2</div>
                    <div className="elementIndex">3</div>
                    <div className="elementIndex">4</div>
                    <div className="elementIndex">5</div>
                </div>
                <div id="arrows">
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                </div>
                <div id="elements">
                    <div className="square">A</div>
                    <div className="square">B</div>
                    <div className="square">C</div>
                    <div className="square">D</div>
                    <div className="square">E</div>
                    <div className="square">F</div>
                </div>
                <p id="elementTitle">Elements</p>
            </div>
        </div>
    );
}
  
export default LinearSortArray;