import React from 'react';

import './App.css';
import NavBar from './components/navBar';
import AddCode from './components/AddCode';
import ManageCode from './components/ManageCode';
import ReadData from './components/ReadData';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />

				<Switch>
					<Route path="/insert">
						<AddCode />
					</Route>
					<Route path="/manage">
						<ManageCode />
					</Route>
					<Route path="/">
						<ReadData />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
