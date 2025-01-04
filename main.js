
import { createRoot } from 'react-dom/client';
import React from 'react'

console.log('inside main.js script here');
import DiceRoll from './src/diceroll.js';
const container2 = document.getElementById('dice_roll_root');
const root2 = createRoot(container2);
root2.render(
	<DiceRoll />
);