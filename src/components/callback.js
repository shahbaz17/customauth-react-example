import { UserContext } from './../lib/UserContext';
import { WalletContext } from '../lib/WalletContext';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { torus } from '../lib/web3auth';
import Loading from './loading';

const Callback = () => {
	const navigate = useNavigate();
	const [, setUser] = useContext(UserContext);
	const [, setWallet] = useContext(WalletContext);

	useEffect(() => {
		const init = async () => {
			try {
				const loginDetails = await torus.getRedirectResult();
				console.log(loginDetails);
				if (loginDetails?.method === 'triggerLogin') {
					setUser(loginDetails.result?.userInfo);
					setWallet(loginDetails.result);
					navigate('/profile');
				}
			} catch (error) {
				// navigate('/login');
			}
		};
		init();
	}, [navigate, setUser, setWallet]);

	return <Loading />;
};

export default Callback;
