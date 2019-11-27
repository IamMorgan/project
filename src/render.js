import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPosts} from './Redux/state';
import {addMessages} from './Redux/state';


//addPost('Ho-ho-ho');

export let rerenderEntireTree = (state) => {
	ReactDOM.render(<App state={state} addPosts={addPosts} addMessages={addMessages}/>, document.getElementById('root'));
}



