import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts, updateNewPostText, updateNewMessageText} from './Redux/state';
import {addMessages} from './Redux/state';


let rerenderEntireTree = (state) => {
	ReactDOM.render(<App state={state} 
		addPosts={addPosts} 
		addMessages={addMessages} 
		updateNewPostText={updateNewPostText} 
		updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));
}



rerenderEntireTree(state);

subscribe(rerenderEntireTree);






serviceWorker.unregister();