import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts, updateNewPostText} from './Redux/state';
import {addMessages} from './Redux/state';


export let rerenderEntireTree = (state) => {
	ReactDOM.render(<App state={state} addPosts={addPosts} addMessages={addMessages} updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}
