import React from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<h3>Component {props.number}</h3>
		</div>
	);
});

export default ComponentToPrint;
