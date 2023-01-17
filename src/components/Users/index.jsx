import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ items, isLoading, onClickInvit, invited, setSendUsers }) => {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<>
			<div className="search">
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
				</svg>
				<input onChange={(event) => setSearchValue(event.target.value.trim().toLowerCase())} type="text" placeholder="Найти пользователя..." />
			</div>
			{isLoading ? (
				<div className="skeleton-list">
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<ul className="users-list">
					{items
						.filter((obj) => {
							const fullName = obj.first_name + ' ' + obj.last_name;

							return fullName.toLowerCase().includes(searchValue) || obj.email.toLowerCase().includes(searchValue);
						})
						.map((obj) => (
							<User isInvited={invited.includes(obj.id)} onClickInvit={onClickInvit} key={obj.id} {...obj} />
						))}
				</ul>
			)}
			{invited.length > 0 && (
				<button onClick={() => setSendUsers(true)} className="send-invite-btn">
					Отправить приглашение
				</button>
			)}
		</>
	);
};
