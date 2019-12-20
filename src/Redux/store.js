import siteBarReducer from "./siteBar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
	_state: {
		profilePage: {
			postsData: [
				{id: 1, message: 'OMG!', like: 27},
				{id: 2, message: 'Oh... This Russian', like: 33},
				{id: 3, message: 'Vasia! Uhodim! Tut streliaut!', like: 9},
				{id: 4, message: 'What you doing ?', like: 2},
				{id: 5, message: 'It is my two post', like: 15},
				{id: 6, message: 'It is my first post', like: 1}
			],
			newPostText: ''
			
		},
		dialogsPage: {
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
		},
		siteBar: {
			friends: [
				{id:1, icon: 'https://1ats.ru/netcat_files/327/324/man.png'},
				{id:2, icon: 'https://broteko.kz/modules/whatsappchat/views/img/agent/boy-icon-png-10.jpg'},
				{id:3, icon: 'https://huntpng.com/images250/avatar-png-icon-5.png'},
				{id:4, icon: 'https://broteko.kz/modules/whatsappchat/views/img/agent/89-512.png'},
				{id:5, icon: 'https://huntpng.com/images250/avatar-clip-transparent-5.png'},
				{id:6, icon: 'https://www.pngarts.com/files/3/Avatar-PNG-High-Quality-Image.png'}
			]
		}
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('state changed');
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		profileReducer(this._state.profilePage, action);
		dialogsReducer(this._state.dialogsPage, action);
		siteBarReducer(this._state.siteBar, action);

		this._callSubscriber(this._state)
	}
}


export default store;
window.state = store;