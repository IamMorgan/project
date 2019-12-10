import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {
	

	let dialogsElements = props.state.dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id} key = {dialog.id} icon = {props.icon.friends.find(icon => icon.id === dialog.id)}/>
		)
	});

	let messageElements = props.state.messagesData.map((message) => {
		return (
			<Message message={message.message} id={message.id} key={message.id} icon = {props.icon.friends.find(icon => icon.id === message.id)}/>
		)
	});

	let newMessage = React.createRef();
	let addMessage = () => {
		props.dispatch({type:'ADD-MESSAGES'});
	}
	
	let onMessageChange = () => {
		let text = newMessage.current.value;
		props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText: text});
		
	}

	
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messageElements}
				<textarea className={classes.text} onChange={onMessageChange} ref={newMessage} value={props.state.newMessageText} placeholder='add message'/>
				<div>
					<button onClick={addMessage}>Set Message</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;