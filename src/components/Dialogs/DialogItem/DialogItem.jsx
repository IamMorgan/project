import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
	// let path = '/dialogs/'+ props.id;  <NavLink to={path}> можно так
	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
		</div>
	);
}



export default DialogItem;