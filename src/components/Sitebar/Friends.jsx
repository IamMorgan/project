import React from 'react';
import './../../App.css';
import './Friends.module.css';
import classes from './Friends.module.css';


const Friends = (props) => {
	let friendsIcon = props.state.map((icon) => {
		return (
			<div className={classes.avatar} key = {icon.id}>
				<img src = {icon.icon}></img>
			</div>
		)
	});
	return (
		<div className={classes.friends}>
			{friendsIcon}
		</div>
	)
};

export default Friends;