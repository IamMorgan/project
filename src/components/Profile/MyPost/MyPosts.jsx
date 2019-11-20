import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


	let postsElement = props.postsData.map((post) => {
		return (
			<Post message={post.message} like={post.like} key = {post.id} />
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