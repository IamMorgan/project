const ADD_MESSAGES = 'ADD-MESSAGES';



let initialState = {
	friends: [
		{id:1, icon: 'https://1ats.ru/netcat_files/327/324/man.png'},
		{id:2, icon: 'https://broteko.kz/modules/whatsappchat/views/img/agent/boy-icon-png-10.jpg'},
		{id:3, icon: 'https://huntpng.com/images250/avatar-png-icon-5.png'},
		{id:4, icon: 'https://broteko.kz/modules/whatsappchat/views/img/agent/89-512.png'},
		{id:5, icon: 'https://huntpng.com/images250/avatar-clip-transparent-5.png'},
		{id:6, icon: 'https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png'}
	]
};

const siteBarReducer = (state = initialState, action) => {
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