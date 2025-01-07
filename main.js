
import { createRoot } from 'react-dom/client';
import React from 'react'

console.log('inside main.js script here');
import DiceRoll from './src/diceroll.js';
import MyGridComponent from './src/MyGridComponent.js';
import MyGridEfficient from './src/MyGridEfficient.js';
import MyRestExpt from './src/MyRestExpt.js';
const container2 = document.getElementById('dice_roll_root');
const root2 = createRoot(container2);
let theContent="Somewhere";
let theContentArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let theContentArray2 = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];


root2.render(
	<div>
	<DiceRoll />
	<MyGridComponent content={theContentArray}/>
	<MyGridEfficient content={theContentArray2}/>
	<MyRestExpt />
	</div>
);