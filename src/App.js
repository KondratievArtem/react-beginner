import React from 'react';
import './index.scss';

function App() {
	const [count, setCount] = React.useState(0);
	const [status, setStatus] = React.useState('');

	const countStatus = () => {
		if (count === 0) {
			setStatus('');
		}
		if (count < 0) {
			setStatus('minus');
		}
		if (count > 0) {
			setStatus('plus');
		}
	};

	React.useEffect(() => {
		countStatus();
	}, [count]);

	return (
		<div className="App">
			<div>
				<h2>Лічильник:</h2>
				<h1 className={status}>{count}</h1>
				<button className="minus" onClick={() => setCount(count - 1)}>
					- Мінус
				</button>
				<button className="reset" onClick={() => setCount(0)}>
					Обнулкння
				</button>
				<button className="plus" onClick={() => setCount(count + 1)}>
					Плюс +
				</button>
			</div>
		</div>
	);
}

export default App;
