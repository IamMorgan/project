import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	
	return (
		<div className={classes.item}>
			<div>
				<img src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png' alt='avatar'/>
			</div>
			<div className={classes.message}>
				{props.message}
			</div>
			<span className={classes.likes}>Like {props.like}</span>
		</div>
	);
}

export default Post;