import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {
	

	let dialogsElements = props.state.dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id} key = {dialog.id}/>
		)
	});

	let messageElements = props.state.messagesData.map((message) => {
		return (
			<Message message={message.message} id={message.id} key={message.id} icon = {props.icon.friends.find(icon => icon.id === message.id)}/>
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