const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{id: 1, message: 'OMG!', like: 27},
		{id: 2, message: 'Oh... This Russian', like: 33},
		{id: 3, message: 'Vasia! Uhodim! Tut streliaut!', like: 9},
		{id: 4, message: 'What you doing ?', like: 2},
		{id: 5, message: 'It is my two post', like: 15},
		{id: 6, message: 'It is my first post', like: 1}
	],
	newPostText: ''
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			let newPost = {
					id: 7, message: state.newPostText, like: 0
				};
				state.postsData.push(newPost);
				state.newPostText = '';
				return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
};
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT, newText: text
	}
};


export default profileReducer;