import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogs-reducer';




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
		props.dispatch(addMessageActionCreator());
	}
	
	let onMessageChange = () => {
		let text = newMessage.current.value;
		props.dispatch(updateNewMessageTextActionCreator(text));
		
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