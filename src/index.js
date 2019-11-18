import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

	let dialogsData = [
		{id: 1, name: 'Vasia'},
		{id: 2, name: 'Vahtang'},
		{id: 3, name: 'Kostik'},
		{id: 4, name: 'Migel Estebano'},
		{id: 5, name: 'Volodia'},
		{id: 6, name: 'Sam Durak'}
	];
	let messagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you ?'},
		{id: 3, message: 'Why ?'},
		{id: 4, message: 'I belive i can fly'},
		{id: 5, message: 'London is the capital of Great Britain'},
		{id: 6, message: 'Where is my mind?'}
	];




ReactDOM.render(<App dialogsProps={dialogsData} messageProps={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

