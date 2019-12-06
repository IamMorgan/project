import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} 
			addPosts={store.addPosts.bind(store)} 
			addMessages={store.addMessages.bind(store)} 
			updateNewPostText={store.updateNewPostText.bind(store)} 
			updateNewMessageText={store.updateNewMessageText.bind(store)}/>
		</BrowserRouter>, document.getElementById('root'));
}



rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);






serviceWorker.unregister();