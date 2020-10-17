import { render } from '@testing-library/react';
import React from 'react';
import '../Style/StackAndQueue.css';
import * as d3 from 'd3';

function StackAndQueue() {
	const width = window.innerWidth;
	var mainSvg = d3.select('body').append('svg').attr('id', 'main-svg').attr('width', width).attr('height', 600);
	return (
		<div>
			<p>Stack and Queue</p>
			<label>
				User-Defined-List:
				<input type="text" id="user-defined-list" />
			</label>
			<button onClick={CreateStackAnaQueue}>Create</button>
			<br />
		</div>
	);
}

function CreateStackAnaQueue() {
	const userInput = document.getElementById('user-defined-list').value;
	const userList = userInput.split(',').map(Number);
	console.log(userList);
	draw(userList);
}

function draw(list) {
	var mainSvg = d3.select('#main-svg');
	mainSvg.selectAll('*').remove();
	var cy = 30;
	var num;
	for (num of list) {
		console.log(num);
		addCircle(cy, num, mainSvg);
		cy += 70;
	}
}

function addCircle(cy, num, mainSvg) {
	var innerCircle = mainSvg
		.append('circle')
		.attr('cx', 30)
		.attr('cy', cy)
		.attr('r', 30)
		.attr('width', 30)
		.attr('height', 30)
		.attr('fill', '#333');
	var outterCircle = mainSvg
		.append('circle')
		.attr('cx', 30)
		.attr('cy', cy)
		.attr('r', 28)
		.attr('width', 30)
		.attr('height', 30)
		.attr('fill', '#FFF');
	var text = mainSvg
		.append('text')
		.attr('x', 20)
		.attr('y', cy)
		.text(num)
		.attr('font-size', '20px')
		.attr('fill', 'red');
}

export default StackAndQueue;
