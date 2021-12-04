import React from 'react';
import Payroll from './Payroll';

export const ComponentToPrint = React.forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<Payroll />
		</div>
	);
});
