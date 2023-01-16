import React from 'react';
import './index.scss';

import questions from './questions';

function Result({ correct, setLvl, setRender, setCorrect }) {
	const restart = () => {
		setLvl(0);
		setCorrect(0);
		setRender(true);
	};
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<button onClick={() => restart()}>Попробовать снова</button>
		</div>
	);
}

function Game({ lvl, setLvl, setRender, setCorrect, correct }) {
	const progres = lvl * 33.333;

	const clickVariant = (e) => {
		setLvl(lvl + 1);
		const ansver = e.target.innerText;

		if (questions[lvl].variants.indexOf(ansver) === questions[lvl].correct) {
			setCorrect(correct + 1);
		}
	};

	if (lvl > questions.length - 1) {
		return setRender(false);
	}
	return (
		<>
			<div className="progress">
				<div style={{ width: progres + '%' }} className="progress__inner"></div>
			</div>
			<h1>{questions[lvl].title}</h1>
			{questions[lvl].variants.map((obj, index) => (
				<ul key={index}>
					<li onClick={(e) => clickVariant(e)}>{obj}</li>
				</ul>
			))}
		</>
	);
}

function App() {
	const [render, setRender] = React.useState(true);
	const [lvl, setLvl] = React.useState(0);
	const [correct, setCorrect] = React.useState(0);

	React.useEffect(() => {
		console.log(lvl);
	}, [lvl]);
	return (
		<div className="App">
			{render && <Game lvl={lvl} setLvl={setLvl} setRender={setRender} setCorrect={setCorrect} correct={correct} />}

			{!render && <Result setRender={setRender} setLvl={setLvl} correct={correct} setCorrect={setCorrect} />}
		</div>
	);
}

export default App;
