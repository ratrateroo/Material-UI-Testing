import React, { useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';
// props content : items = [1, 2, 3, 4, 5, 6];
const Items = (props) => {
	const itemsRef = useRef([]);
	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, props.items.length);
	}, [props.items]);
	return props.items.map((el, i) => (
		<div
			key={i}
			style={{
				background: 'yellowgreen',
			}}>
			<ReactToPrint
				trigger={() => (
					<button
						style={{
							background: 'blue',
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
