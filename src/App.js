
function App() {

	const listCountries = [
		{ id: 0, country: 'Brazil' },
		{ id: 1, country: 'England' },
		{ id: 2, country: 'Australia' },
		{ id: 3, country: 'Canada' },
		{ id: 4, country: 'France' },
		{ id: 5, country: 'Japan' },
	]

	return (
		<>
			<h3>React Js - Array map()</h3>

			<ul>
				{listCountries.map((country, i) => (
					<li key={i}>{country.country}</li>
				))}
			</ul>
		</>
	);
}

export default App;
