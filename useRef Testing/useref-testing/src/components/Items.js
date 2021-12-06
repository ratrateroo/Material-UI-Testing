import React, { useRef, useEffect } from 'react';

import ReactToPrint, { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';
const Items = (props) => {
	const itemsRef = useRef([]);
	// you can access the elements with itemsRef.current[n]

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, props.items.length);
	}, [props.items]);

	return props.items.map((el, i) => (
		<div
			key={i}
			//ref={(el) => (itemsRef.current[i] = el)}
			style={{
				background: 'yellowgreen',
				height: '80px',
				width: '300px',
				margin: '5px',
				border: '1px solid black',
				display: 'flex',
			}}>
			<ReactToPrint
				trigger={() => (
					<button
						style={{
							background: 'blue',

							margin: '5px',
						}}>
						Print {el}
					</button>
				)}
				content={() => {
					return itemsRef.current[i];
				}}
			/>
			<div style={{ display: 'none' }}>
				<ComponentToPrint
					ref={(el) => (itemsRef.current[i] = el)}
					number={el}
				/>
			</div>
		</div>
	));
};

export default Items;
