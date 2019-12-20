const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
	messagesData: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you ?'},
		{id: 3, message: 'I belive i can fly'},
		{id: 4, message: 'Why ?'},
		{id: 5, message: 'London is the capital of Great Britain'},
		{id: 6, message: 'Where is my mind?'}
	],
	dialogsData: [
		{id: 1, name: 'Vasia'},
		{id: 2, name: 'Vahtang'},
		{id: 3, name: 'Kostik'},
		{id: 4, name: 'Migel Estebano'},
		{id: 5, name: 'Volodia'},
		{id: 6, name: 'Sam Durak'}
	],
	newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

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