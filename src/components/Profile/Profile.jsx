import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts postsData = {props.profilePage.postsData} newPostText={props.profilePage.newPostText} addPosts = {props.addPosts} updateNewPostText={props.updateNewPostText} />
		</div>
	);
}

export default Profile;