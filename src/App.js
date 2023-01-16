import React from 'react';
import './index.scss';
import Modal from './modal';

function App() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="App">
			<button className="open-modal-btn" onClick={() => setOpen(true)}>
				✨ Открыть окно
			</button>

			<Modal open={open} setOpen={setOpen} />
		</div>
	);
}

export default App;
