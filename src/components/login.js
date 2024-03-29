import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { torus } from '../lib/web3auth';
import { UserContext } from '../lib/UserContext';
import Loading from './loading';

const Login = () => {
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	const navigate = useNavigate();
	const [user] = useContext(UserContext);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
		const init = async () => {
			await torus.init({ skipSw: true });
		};
		init();
	}, [user, navigate]);

	const googleLogin = async () => {
		setIsLoggingIn(true);
		const loginParams = {
			typeOfLogin: 'google',
			verifier: 'web3auth-core-google',
			clientId:
				'774338308167-q463s7kpvja16l4l0kko3nb925ikds2p.apps.googleusercontent.com',
		};

		try {
			await torus.triggerLogin(loginParams);
		} catch {
			setIsLoggingIn(false);
		}
	};

	return (
		<>
			{isLoggingIn ? (
				<Loading />
			) : (
				<div>
					<button onClick={googleLogin} disabled={isLoggingIn}>
						Login with Google
					</button>
					<h5>Using CustomAuth SDK</h5>
				</div>
			)}
		</>
	);
};

export default Login;
