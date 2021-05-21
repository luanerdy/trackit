import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TopBar from './components/TopBar';
import Menu from './components/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Habits from './components/Habits';
import History from './components/History';
import Today from './components/Today';

const App = () => {
	const [userData, setUserData] = useState('');
	const [percentage, setPercentage] = useState(50);

	const verifyLogin = (history) => {
		const user = window.localStorage.getItem('user');
		const path = history.location.pathname;

		if (user) {
			setUserData(JSON.parse(user));

			if (['/', '/cadastro'].includes(path)) {
				history.push('/hoje');
			}

			return;
		}

		if (!['/', '/cadastro'].includes(path)) {
			history.push('/');
		}
	};

	const logout = (history) => {
		window.localStorage.removeItem('user');
		history.push('/');
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Login
						setUserData={setUserData}
						verifyLogin={verifyLogin}
					/>
				</Route>
				<Route path="/cadastro" exact>
					<SignUp verifyLogin={verifyLogin} />
				</Route>
				<UserContext.Provider
					value={{ userData, verifyLogin, logout, percentage }}
				>
					<Route path="/hoje" exact>
						<TopBar />
						<Today />
						<Menu />
					</Route>
					<Route path="/habitos" exact>
						<TopBar />
						<Habits />
						<Menu />
					</Route>
					<Route path="/historico" exact>
						<TopBar />
						<History />
						<Menu />
					</Route>
				</UserContext.Provider>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
