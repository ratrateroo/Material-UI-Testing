import React, { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';

const References = (props) => {
	const arrLength = props.items.length;

	const elRefs = useRef([]);
	const componentRef = useRef();

	if (elRefs.current.length !== arrLength) {
		// add or remove refs
		elRefs.current = Array(arrLength)
			.fill()
			.map((_, i) => elRefs.current[i]);
	}

	// const handlePrint = (i) => {
	// 	useReactToPrint({
	// 		content: (i) => elRefs.current[i],
	// 	});
	// };

	return (
		<div>
			{props.items.map((el, i) => (
				<div
					key={i}
					//ref={elRefs.current[i]}
					style={{
						background: 'yellowgreen',
						height: '80px',
						width: '300px',
						margin: '5px',
						border: '1px solid black',
						display: 'flex',
					}}>
					<h3>Item {el}</h3>
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
							return elRefs.current[i];
						}}
					/>
					{/* <button
						onClick={handlePrint(i)}
						style={{
							background: 'blue',

							margin: '5px',
						}}>
						Print {el}
					</button> */}
					<div style={{ display: 'none' }}>
						<ComponentToPrint ref={elRefs.current[i]} number={el} />
					</div>
				</div>
			))}
		</div>
	);
};

export default References;
