import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg' alt='image'/>
			</div>
			<div className={classes.descriptionBlock}>
				ava + description
			</div>
		</div>
	);
}

export default ProfileInfo;