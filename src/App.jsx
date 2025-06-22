import { useState } from 'react';
import '../src/main.css';
import '../src/styles/globals.css';
import '../src/styles/theme.css';
import { Layout } from './components/Layout/Layout';
import { RulesLayout } from './components/RulesLayout/RulesLayout';

function App() {
	const [areRulesShown, setAreRulesShown] = useState(true);

	const handleRulesButtonClick = () => {
		setAreRulesShown((prevRules) => !prevRules);
	};

	return (
		<>
			{areRulesShown ? (
				<Layout showRules={handleRulesButtonClick} />
			) : (
				<RulesLayout showRules={handleRulesButtonClick} />
			)}
		</>
	);
}

export default App;
