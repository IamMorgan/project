const ADD_MESSAGES = 'ADD-MESSAGES';


const siteBarReducer = (state, action) => {
	switch(action.type) {
		case ADD_MESSAGES:
			let newIcon = {
				id: 7, icon: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
			}
			state.friends.push(newIcon);
			return state;
		default:
			return state;
	}
}




export default siteBarReducer;