import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({postsData}) => {
	
	return (
		<div>
			<ProfileInfo />
			<MyPosts postsProps = {postsData} />
		</div>
	);
}

export default Profile;