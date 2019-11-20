import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {
	let dialogsElements = props.dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id} key = {dialog.id}/>
		)
	});
	
	let messageElements = props.messagesData.map((message) => {
		return (
			<Message message={message.message} key={message.message}/>
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