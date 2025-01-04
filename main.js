
import { createRoot } from 'react-dom/client';
import React from 'react'

console.log('inside main.js script here');
import DiceRoll from './src/diceroll.js';
import MyGridComponent from './src/MyGridComponent.js';
const container2 = document.getElementById('dice_roll_root');
const root2 = createRoot(container2);
let theContent="Somewhere";
root2.render(
	<div>
	<DiceRoll />
	<MyGridComponent content={theContent}/>
	</div>
);