import React, { useState } from 'react';
import {
	withStyles,
	makeStyles,
	useTheme,
	Paper,
	Avatar,
	TextField,
} from '@material-ui/core';

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

// function createData(
// 	question,
// 	option1,
// 	option2,
// 	option3,
// 	option4,

// ) {
// 	return {
// 		question,
// 		option1,
// 		option2,
// 		option3,
// 		option4,

// 	};
// }

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

	const [selectedAchieveValue, setSelectedAchieveValue] = useState('1');
	const [selectedCollaborateValue, setSelectedCollaborateValue] =
		useState('1');
	const [selectedLeadershipValue, setSelectedLeadershipValue] = useState('1');
	const [selectedTopGameValue, setSelectedTopGameValue] = useState('1');

	const [strengths, setStrengths] = useState({
		strengthsPointers: '',
	});
	const [thingsToImprove, setThingsToImprove] = useState({
		thingsToImprovePointers: '',
	});

	const [achieve, setAchieve] = useState({
		achieveRate: '1',
		achieveRemarks: '',
	});

	const [collaborate, setCollaborate] = useState({
		collaborateRate: '1',
		collaborateRemarks: '',
	});
	const [leadership, setLeadership] = useState({
		leadershipRate: '1',
		leadershipRemarks: '',
	});
	const [topGame, setTopGame] = useState({
		topGameRate: '1',
		topGameRemarks: '',
	});
	//textfield handlers
	const handleStrengths = (event) => {
		setStrengths({ ...strengths, strengthsPointers: event.target.value });
	};
	const handleThingsToImprove = (event) => {
		setThingsToImprove({
			...thingsToImprove,
			thingsToImprovePointers: event.target.value,
		});
	};

	//rating handlers
	const handleAchieveRating = (event) => {
		setSelectedAchieveValue(event.target.value);
		setAchieve({ ...achieve, achieveRate: event.target.value });
		console.log(event.target.value);
	};
	const handleCollaborateRating = (event) => {
		setSelectedCollaborateValue(event.target.value);
		setCollaborate({
			...collaborate,
			collaborateRate: event.target.value,
		});

		console.log(event.target.value);
	};
	const handleLeadershipRating = (event) => {
		setSelectedLeadershipValue(event.target.value);
		setLeadership({ ...leadership, leadershipRate: event.target.value });
		console.log(event.target.value);
	};
	const handleTopGameRating = (event) => {
		setSelectedTopGameValue(event.target.value);
		setTopGame({ ...topGame, topGameRate: event.target.value });
		console.log(event.target.value);
	};
	//remarks handlers
	const handleAchieveRemarks = (event) => {
		setAchieve({ ...achieve, achieveRemarks: event.target.value });
		console.log(event.target.value);
	};
	const handleCollaborateRemarks = (event) => {
		setCollaborate({
			...collaborate,
			collaborateRemarks: event.target.value,
		});
		console.log(event.target.value);
	};
	const handleLeadershipRemarks = (event) => {
		setLeadership({ ...leadership, leadershipRemarks: event.target.value });
		console.log(event.target.value);
	};
	const handleTopGameRemarks = (event) => {
		setTopGame({ ...topGame, topGameRemarks: event.target.value });
		console.log(event.target.value);
	};

	const handleSubmit = () => {
		const form = {
			strengths: strengths,
			thingsToImprove: thingsToImprove,
			achieve: achieve,
			collaborate: collaborate,
			leadership: leadership,
			topGame: topGame,
		};

		console.log('submit...');
		console.log(form);
	};

	return (
		<>
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
									src="https://styles.redditmedia.com/t5_2u5py/styles/communityIcon_e0naveun2di51.jpg?width=256&format=pjpg&s=d9a928639882240bff9a68a9666f962be4493721"
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
						onChange={handleStrengths}
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
						onChange={handleThingsToImprove}
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
								<TableRow>
									<TableCell component="th" scope="row">
										Achieve Consistently
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedAchieveValue === '1'}
											onChange={handleAchieveRating}
											value="1"
											name="achieve"
											color="primary"
											inputProps={{
												'aria-label': 'achieve1',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedAchieveValue === '2'}
											onChange={handleAchieveRating}
											value="2"
											name="achieve"
											color="primary"
											inputProps={{
												'aria-label': 'achieve2',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedAchieveValue === '3'}
											onChange={handleAchieveRating}
											value="3"
											name="achieve"
											color="primary"
											inputProps={{
												'aria-label': 'achieve3',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedAchieveValue === '4'}
											onChange={handleAchieveRating}
											value="4"
											name="achieve"
											color="primary"
											inputProps={{
												'aria-label': 'achieve4',
											}}
										/>
									</TableCell>
									<TableCell align="right">
										<TextField
											id="outlined-basic"
											variant="outlined"
											fullWidth
											onChange={handleAchieveRemarks}
										/>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										Collaborate Constructively
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedCollaborateValue === '1'}
											onChange={handleCollaborateRating}
											value="1"
											name="colaborate"
											color="primary"
											inputProps={{
												'aria-label': 'colaborate1',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedCollaborateValue === '2'}
											onChange={handleCollaborateRating}
											value="2"
											name="colaborate"
											color="primary"
											inputProps={{
												'aria-label': 'colaborate2',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedCollaborateValue === '3'}
											onChange={handleCollaborateRating}
											value="3"
											name="colaborate"
											color="primary"
											inputProps={{
												'aria-label': 'colaborate3',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedCollaborateValue === '4'}
											onChange={handleCollaborateRating}
											value="4"
											name="colaborate"
											color="primary"
											inputProps={{
												'aria-label': 'colaborate4',
											}}
										/>
									</TableCell>
									<TableCell align="right">
										<TextField
											id="outlined-basic"
											variant="outlined"
											fullWidth
											onChange={handleCollaborateRemarks}
										/>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell component="th" scope="row">
										Achieve Consistently
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedLeadershipValue === '1'}
											onChange={handleLeadershipRating}
											value="1"
											name="leadership"
											color="primary"
											inputProps={{
												'aria-label': 'leadership1',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedLeadershipValue === '2'}
											onChange={handleLeadershipRating}
											value="2"
											name="leadership"
											color="primary"
											inputProps={{
												'aria-label': 'leadership2',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedLeadershipValue === '3'}
											onChange={handleLeadershipRating}
											value="3"
											name="leadership"
											color="primary"
											inputProps={{
												'aria-label': 'leadership3',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedLeadershipValue === '4'}
											onChange={handleLeadershipRating}
											value="4"
											name="leadership"
											color="primary"
											inputProps={{
												'aria-label': 'leadership4',
											}}
										/>
									</TableCell>
									<TableCell align="right">
										<TextField
											id="outlined-basic"
											variant="outlined"
											fullWidth
											onChange={handleLeadershipRemarks}
										/>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										Collaborate Constructively
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedTopGameValue === '1'}
											onChange={handleTopGameRating}
											value="1"
											name="topgame"
											color="primary"
											inputProps={{
												'aria-label': 'topgame1',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedTopGameValue === '2'}
											onChange={handleTopGameRating}
											value="2"
											name="topgame"
											color="primary"
											inputProps={{
												'aria-label': 'topgame2',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedTopGameValue === '3'}
											onChange={handleTopGameRating}
											value="3"
											name="topgame"
											color="primary"
											inputProps={{
												'aria-label': 'topgame3',
											}}
										/>
									</TableCell>
									<TableCell align="center">
										<Radio
											checked={selectedTopGameValue === '4'}
											onChange={handleTopGameRating}
											value="4"
											name="topgame"
											color="primary"
											inputProps={{
												'aria-label': 'topgame4',
											}}
										/>
									</TableCell>
									<TableCell align="right">
										<TextField
											id="outlined-basic"
											variant="outlined"
											fullWidth
											onChange={handleTopGameRemarks}
										/>
									</TableCell>
								</TableRow>
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
