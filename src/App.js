import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [getUsers, setGetUsers] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [invited, setInvited] = React.useState([]);
	const [sendUsers, setSendUsers] = React.useState(false);

	const onClickInvit = (id) => {
		if (invited.includes(id)) {
			setInvited((prev) => prev.filter((_id) => _id !== id));
		} else {
			setInvited((prev) => [...prev, id]);
		}
	};

	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then(({ data }) => setGetUsers(data))
			.catch((err) => {
				console.error('Error: ', err);
				alert('Помилка загрузки користувачів');
			})
			.finally(setIsLoading(false));
	}, []);

	return (
		<div className="App">
			{sendUsers ? (
				<Success count={invited.length} />
			) : (
				<Users setSendUsers={setSendUsers} invited={invited} onClickInvit={onClickInvit} items={getUsers} isLoading={isLoading} />
			)}
		</div>
	);
}

export default App;
