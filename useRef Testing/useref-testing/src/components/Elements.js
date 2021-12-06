import React, { useEffect, useState } from 'react';

import ReactToPrint, { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';

const Elements = (props) => {
	const arrLength = props.items.length;

	const [elRefs, setElRefs] = useState([]);

	useEffect(() => {
		// add or remove refs
		setElRefs((elRefs) =>
			Array(arrLength)
				.fill()
				.map((_, i) => elRefs[i])
		);
	}, [arrLength]);

	return (
		<div>
			{props.items.map((el, i) => (
				<div
					key={i}
					//ref={elRefs[i]}
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
							return elRefs[i];
						}}
					/>
					<div style={{ display: 'none' }}>
						<ComponentToPrint ref={elRefs[i]} number={el} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Elements;
