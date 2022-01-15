import React, { useState } from 'react';
import {
	withStyles,
	makeStyles,
	useTheme,
	Paper,
	Avatar,
	TextField,
} from '@material-ui/core';
import PageHeader from '../components/main/pageHeader';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowRight from '@material-ui/icons/ArrowRight';

import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 'auto',
		margin: theme.spacing(2),
		padding: theme.spacing(2),
	},
	card: {
		display: 'flex',
		// width: '60vh',
		marginBottom: theme.spacing(2),
		height: '100%',
		marginTop: '5px',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
		borderRadius: '50%',
	},
	avatar: {
		marginLeft: theme.spacing(2),
		marginTop: theme.spacing(2),
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	table: {
		minWidth: 650,
	},
	tableheading: {
		background: theme.palette.secondary.main,
		color: 'white',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.common.white,
		fontWeight: 'bold',
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

function createData(question, option1, option2, option3, option4) {
	return { question, option1, option2, option3, option4 };
}

const rows = [
	createData(
		'Achieve Consistently',
		'option1',
		'option2',
		'option3',
		'option4'
	),
	createData(
		'Collaborate Constructively',
		'option5',
		'option6',
		'option7',
		'option8'
	),
	createData('Leadership', 'option9', 'option10', 'option11', 'option12'),
	createData(
		'Being on Top of the Game',
		'option13',
		'option14',
		'option15',
		'option16'
	),
];

function createMeasuringScaleData(rating, description) {
	return { rating, description };
}

const measuringScaleRows = [
	createMeasuringScaleData(
		1,
		'Needs improvement - Needs heavy guidance to do work / Is not performing well'
	),
	createMeasuringScaleData(
		2,
		'Building - Has initiative but is not delivering consistently'
	),
	createMeasuringScaleData(
		3,
		'Solid - Delivers what is required consistently'
	),
	createMeasuringScaleData(
		4,
		'Outstanding - Delivers what is required and beyond his/her responsibilities'
	),
];

export default function Feedback() {
	const classes = useStyles();
	const theme = useTheme();

	const [selectedValue, setSelectedValue] = React.useState('');

	const [strengths, setStrengths] = useState('');
	const [thingToImprove, setThingToImprove] = useState(0);
	const [collaborate, setCollaborate] = useState({
		collaborateRate: 0,
		collaborateRemarks: '',
	});
	const [leadership, setLeadership] = useState({
		leadershipRate: 0,
		leadershipRemarks: '',
	});
	const [topGame, setTopGame] = useState({
		topGameRate: 0,
		topGameRemarks: '',
	});

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
		console.log(event.target.value);
	};

	const handleSubmit = () => {
		const form = {
			strengths: strengths,
			thingToImprove: thingToImprove,
			collaborate: collaborate,
			leadership: leadership,
			topGame: topGame,
		};

		console.log('submit...');
		console.log(form);
	};

	return (
		<>
			<PageHeader
				title="360 Evaluation Form"
				icon={<FeedbackIcon fontSize="large" />}
			/>
			<div>
				<Paper className={classes.root}>
					<Grid container spacing={4} style={{ marginBottom: '1rem' }}>
						<Grid item xs={6}>
							<Box>
								<Typography variant="h6" color="textPrimary">
									Hello Ken!
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									align="justify">
									You are invited for 360 feedback for Carlo B.
									Anastacio. This form will assist management in
									preparing the performance evaluation of the
									individual listed above. Your feedback will be used
									to create goals and improve overall performance of
									the individual. We highly encourage you to be
									constructive and list actual events that is related
									to the 4 key points. We assure that your feedback
									will be kept highly confidential.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Card className={classes.card}>
								<Avatar
									alt="Remy Sharp"
									src="./images/cmd-avatar.png"
									className={classes.avatar}
								/>
								<div className={classes.details}>
									<CardContent className={classes.content}>
										<Typography component="h6" variant="h6">
											Balmond Santos
										</Typography>
										<Typography variant="body2" color="textSecondary">
											Finance
										</Typography>
										<Typography variant="body2" color="textSecondary">
											Mobile: 0924 412 8755
										</Typography>
									</CardContent>
								</div>
							</Card>
						</Grid>
					</Grid>

					<TextField
						id="outlined-basic"
						label="3 Strengths"
						variant="outlined"
						style={{ marginBottom: '1em' }}
						fullWidth
						multiline
						minRows={3}
						maxRows={3}
					/>
					<TextField
						id="outlined-basic"
						label="3 Things to improve"
						variant="outlined"
						style={{ marginBottom: '1em' }}
						fullWidth
						multiline
						minRows={3}
						maxRows={3}
					/>
					<Box
						style={{
							marginBottom: '1rem',
							marginTop: '1rem',
						}}>
						<Typography
							component="h6"
							variant="h6"
							style={{
								color: theme.palette.secondary.main,
								marginBottom: '1rem',
							}}>
							Key Points Guideline:
						</Typography>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography
									variant="subtitle1"
									style={{ color: theme.palette.success.main }}>
									Achieve Consistently
								</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								<List
									aria-label="achieve-consistently-list"
									style={{ margin: 0 }}>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Work quality consistency
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Good working habits
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Delivers work on time
										</Typography>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography
									variant="subtitle1"
									style={{ color: theme.palette.success.main }}>
									Collaborate Constructively
								</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								<List
									aria-label="achieve-consistently-list"
									style={{ margin: 0 }}>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Able to collaborate with peers in a
											professional manner
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Can support peers on tasks
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Can interact with counterparts/clients &#40;if
											applicable &#41;
										</Typography>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>

						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography
									variant="subtitle1"
									style={{ color: theme.palette.success.main }}>
									Leadership
								</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								<List
									aria-label="achieve-consistently-list"
									style={{ margin: 0 }}>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Takes initiative on tasks
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Shows positive outlook with everyone
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Active on providing solutions for the team
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Actively participating on events
										</Typography>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>

						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography
									variant="subtitle1"
									style={{ color: theme.palette.success.main }}>
									Being on top of your Game
								</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ padding: 0 }}>
								<List
									aria-label="achieve-consistently-list"
									style={{ margin: 0 }}>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Maintains and actively improves professional
											growth
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Proactive on sharing learnings with everyone
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ArrowRight />
										</ListItemIcon>
										<Typography variant="body2">
											Proactively seeks challenges
										</Typography>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>
					</Box>

					<TableContainer
						component={Paper}
						style={{ marginBottom: '1em' }}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										className={classes.tableheading}>
										Measuring Scale
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{measuringScaleRows.map((row) => (
									<TableRow key={row.rating}>
										<TableCell component="th" scope="row">
											{row.rating}
										</TableCell>
										<TableCell align="left">
											{row.description}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>

					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<StyledTableCell align="center">
										Aptitudes
									</StyledTableCell>
									<StyledTableCell align="center">1</StyledTableCell>
									<StyledTableCell align="center">2</StyledTableCell>
									<StyledTableCell align="center">3</StyledTableCell>
									<StyledTableCell align="center">4</StyledTableCell>
									<StyledTableCell align="center">
										Remarks
									</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.question}>
										<TableCell component="th" scope="row">
											{row.question}
										</TableCell>
										<TableCell align="center">
											<Radio
												checked={selectedValue === row.option1}
												onChange={handleChange}
												value={row.option1}
												name={row.question}
												color="primary"
												inputProps={{
													'aria-label': row.option1,
												}}
											/>
										</TableCell>
										<TableCell align="center">
											<Radio
												checked={selectedValue === row.option2}
												onChange={handleChange}
												value={row.option2}
												name={row.question}
												color="primary"
												inputProps={{
													'aria-label': row.option2,
												}}
											/>
										</TableCell>
										<TableCell align="center">
											<Radio
												checked={selectedValue === row.option3}
												onChange={handleChange}
												value={row.option3}
												name={row.question}
												color="primary"
												inputProps={{
													'aria-label': row.option3,
												}}
											/>
										</TableCell>
										<TableCell align="center">
											<Radio
												checked={selectedValue === row.option4}
												onChange={handleChange}
												value={row.option4}
												name={row.question}
												color="primary"
												inputProps={{
													'aria-label': row.option4,
												}}
											/>
										</TableCell>
										<TableCell align="right">
											<TextField
												id="outlined-basic"
												variant="outlined"
												fullWidth
											/>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<div className={classes.buttons}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit}
							className={classes.button}>
							Save
						</Button>
					</div>
				</Paper>
			</div>
		</>
	);
}
