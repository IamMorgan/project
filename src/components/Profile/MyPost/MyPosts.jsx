import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postsData = [
		{id: 1, message: 'OMG!', like: 27},
		{id: 2, message: 'Oh... This Russian', like: 33},
		{id: 3, message: 'Vasia! Uhodim! Tut streliaut!', like: 9},
		{id: 4, message: 'What you doing ?', like: 2},
		{id: 5, message: 'It is my two post', like: 15},
		{id: 6, message: 'It is my first post', like: 1}
	]

	let postsElement = postsData.map((post) => {
		return (
			<Post message={post.message} like={post.like}/>
		)
	});

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{postsElement}
			</div>
		</div>
	);
}

export default MyPosts;