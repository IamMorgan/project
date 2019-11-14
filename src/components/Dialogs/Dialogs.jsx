import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
	// let path = '/dialogs/'+ props.id;  <NavLink to={path}> можно так
	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
		</div>
	);
}

const Message = (props) => {
	return (
		<div className={classes.message}>
			{props.message}
		</div>
	);
}

const Dialogs = (props) => {

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
	let dialogsElements = dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id} />
		)
	});
	
	let messageElements = messagesData.map((message) => {
		return (
			<Message message={message.message} />
		)
	});

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messageElements}
			</div>
		</div>
	);
}


export default Dialogs;