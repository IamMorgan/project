const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {

	switch(action.type) {
		case ADD_MESSAGES:
			let newMessage = {
				id: 7, message: state.newMessageText
			}
			state.messagesData.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default:
			return state;
	}
}



export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGES
	}
};
export const updateNewMessageTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT, newText: text
	}
};


export default dialogsReducer;