import React from 'react';
import './index.scss';

import questions from './questions';

function Result({ correct }) {
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Правельних {correct} відповідей з {questions.length}
			</h2>
			<button>
				<a href="/">Спробувати ще раз</a>
			</button>
		</div>
	);
}

function Game({ onClickVariant, question, lvl }) {
	const progres = Math.floor((lvl / questions.length) * 100);

	return (
		<>
			<div className="progress">
				<div style={{ width: `${progres}%` }} className="progress__inner"></div>
			</div>
			<h1>{question.title}</h1>
			{question.variants.map((obj, index) => (
				<ul key={index}>
					<li onClick={() => onClickVariant(index)}>{obj}</li>
				</ul>
			))}
		</>
	);
}

function App() {
	const [lvl, setLvl] = React.useState(0);
	const [correct, setCorrect] = React.useState(0);
	const question = questions[lvl];

	const onClickVariant = (index) => {
		setLvl(lvl + 1);

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	};

	return (
		<div className="App">
			{questions.length !== lvl ? <Game lvl={lvl} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />}
		</div>
	);
}

export default App;
