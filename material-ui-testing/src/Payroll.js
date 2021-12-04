import React from 'react';
import Paper from '@material-ui/core/Paper';
import PayrollHeader from './components/PayrollHeader';
import PayrollBody from './components/PayrollBody';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	root: {
		margin: '15px',

		padding: 0,
	},

	paper: {
		padding: theme.spacing(4),
		height: '100vh',
	},
}));

const Payroll = () => {
	const classes = useStyles();

	return (
		<Box boxShadow={3} className={classes.root}>
			<Paper className={classes.paper}>
				<PayrollHeader />
				<Divider />
				<PayrollBody />
			</Paper>
		</Box>
	);
};

export default Payroll;
