import CustomAuth from '@toruslabs/customauth';

export const torus = new CustomAuth({
	baseUrl: `${process.env.REACT_APP_BASE_URL}`,
	redirectPathName: 'callback',
	network: 'testnet',
	uxMode: 'redirect',
});

// await torus.init({ skipSw: true });
