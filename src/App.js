import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';






const App = (props) => {
	
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.state.siteBar} />
				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <Dialogs state = {props.state.dialogsPage} 
						icon={props.state.siteBar} 
						dispatch = {props.dispatch}/>} />
					<Route path='/profile' render={() => <Profile profilePage = {props.state.profilePage} 
						dispatch = {props.dispatch} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
				
			</div>
		</BrowserRouter>
	);
}

export default App;