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
	let friendsIcon = props.icon.friends.map((icon) => {
		return (
			<Message src={icon.icon} id={icon.id} key={icon.id} />
		)
	});
	let messageElements = props.state.messagesData.map((message) => {
		return (
			<Message message={message.message} id={message.id} key={message.message}/>
		)
	});
	
	
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{friendsIcon}
				{messageElements}
			</div>
		</div>
	);
}



export default Dialogs;