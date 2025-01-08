// GrandMaComponent.js
import { useState } from 'react';
import React from 'react';
import { createContext } from 'react';
import GrandChildComponent from './GrandChildComponent.js';
export const GrandMaContext = createContext(null);

export default function GrandMaComponent({content}) {
	const [breakfastChoice, setBreakfastChoice] = useState('hardboiledeggs');

	return (
    		<GrandMaContext.Provider value={breakfastChoice}>
      			<GrandChildComponent />
      			<GrandChildComponent />
    		</GrandMaContext.Provider>
	 );
};