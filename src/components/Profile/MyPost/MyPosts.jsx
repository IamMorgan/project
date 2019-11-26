import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


	let postsElement = props.postsData.map((post) => {
		return (
			<Post message={post.message} like={post.like} key = {post.id} />
		)
	});

	let newPostElement = React.createRef();

	let AddPost = () => {
		let text = newPostElement.current.value;
		alert('in development' + ' ' + text);
	};


	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<button onClick={AddPost}>Add post</button>
				</div>
				<div>
					<textarea className={classes.text} ref={newPostElement} placeholder='add post'></textarea>
				</div>
			</div>
			<div className={classes.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts;