import './App.css';
import Elements from './components/Elements';
import Items from './components/Items';
// import References from './components/References';

const items = [1, 2, 3, 4, 5, 6];

function App() {
	return (
		<div className="App">
			<Items items={items} />
			{/* <Elements items={items} /> */}
			{/* <References items={items} /> */}
		</div>
	);
}

export default App;
