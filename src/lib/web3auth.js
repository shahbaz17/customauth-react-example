import CustomAuth from '@toruslabs/customauth';

export const torus = new CustomAuth({
	baseUrl: 'http://localhost:3000',
	redirectPathName: 'callback',
	network: 'testnet',
	uxMode: 'redirect',
});

// await torus.init({ skipSw: true });
