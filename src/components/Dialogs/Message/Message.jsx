import React from 'react';
import classes from './../Dialogs.module.css';




const Message = (props) => {
	console.log(props)
	
	
	return (
		<fieldset className={classes.message}>
			<legend ><img src={props.src}/></legend>
			{props.message}
		</fieldset>
	);
}




export default Message;