import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	table: { padding: 0 },
	tableheadings: {
		fontWeight: 'bold',
		fontSize: '20px',
	},
	subtotal: {
		fontWeight: 'bold',
		fontSize: '16px',
	},
	subtotalamount: {
		fontSize: '14px',
		fontWeight: 'bold',
	},
	div: {
		marginTop: '40px',
	},
});

export default function BasicTable() {
	const classes = useStyles();

	return (
		<div className={classes.div}>
			<Grid container>
				<Grid item md={12} lg={12}>
					<TableContainer component={Container}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell className={classes.tableheadings}>
										Earnings
									</TableCell>
									<TableCell
										align="right"
										className={classes.tableheadings}>
										Amount PHP
									</TableCell>
									<TableCell className={classes.tableheadings}>
										Deductions
									</TableCell>
									<TableCell
										align="right"
										className={classes.tableheadings}>
										Amount PHP
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>
										Ordinary Time (1.00 @ 50000.00)
									</TableCell>
									<TableCell align="right">50,000.00</TableCell>
									<TableCell>Cash Advance Deductions</TableCell>
									<TableCell align="right">2,000.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Overtime (1.00 @ 1000.00)</TableCell>
									<TableCell align="right">1,000.00</TableCell>
									<TableCell></TableCell>
									<TableCell align="right"></TableCell>
								</TableRow>

								<TableRow>
									<TableCell className={classes.subtotal}>
										Total Earnings
									</TableCell>
									<TableCell
										align="right"
										className={classes.subtotalamount}>
										51,000.00
									</TableCell>
									<TableCell className={classes.subtotal}>
										Total Deductions
									</TableCell>
									<TableCell
										align="right"
										className={classes.subtotalamount}>
										2,000.00
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>

				{/* <Grid item md={6} lg={6}>
					<TableContainer component={Container}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell className={classes.tableheadings}>
										Deductions
									</TableCell>
									<TableCell
										align="right"
										className={classes.tableheadings}>
										Amount PHP
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>Cash Advance Deductions</TableCell>
									<TableCell align="right">2,000.00</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className={classes.subtotal}>
										Total Deductions
									</TableCell>
									<TableCell
										align="right"
										className={classes.subtotalamount}>
										2,000.00
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid> */}
			</Grid>
		</div>
	);
}
