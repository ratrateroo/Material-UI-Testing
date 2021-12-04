import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../Images/cmd-logo1.png';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	titles: {
		fontWeight: 'bold',
	},
	div: {
		marginBottom: '30px',
	},
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
}));

const Payroll = () => {
	const classes = useStyles();

	return (
		<div className={classes.div}>
			<Grid container>
				<Grid item xs={3} sm={3} md={3} lg={3}>
					<Typography variant="h4" gutterBottom>
						PAYSLIP
					</Typography>
					<Typography variant="body1" gutterBottom>
						Juan Z. Dela Cruz
					</Typography>
				</Grid>
				<Grid item xs={3} sm={3} md={3} lg={3}>
					<Typography className={classes.titles}>Payday</Typography>
					<Typography variant="body2" gutterBottom>
						30 Nov 2021
					</Typography>
					<Typography className={classes.titles}>Pay Period</Typography>
					<Typography variant="body2" gutterBottom>
						16 Nov 2021 to 30 Nov 2021
					</Typography>
				</Grid>
				<Grid item xs={5} sm={5} md={5} lg={5}>
					<Typography
						gutterBottom
						variant="subtitle1"
						className={classes.titles}>
						THE CMD STUDIOS
					</Typography>
					<Typography variant="body2" gutterBottom>
						2449-6 Del Carmen Street Barangay 727, Malate Manila 1004, NCR
						Philippines
					</Typography>
					<Typography variant="body2" gutterBottom>
						(+63) 956 160 5586
					</Typography>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={1}>
					<Avatar alt="Remy Sharp" src={Logo} className={classes.large} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Payroll;
