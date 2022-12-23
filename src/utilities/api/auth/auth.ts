// import { Values } from '@/models/interface';

export const auth = async (endpoint: string, inputsValues: any) => {
	const urlRegister = `https://backen-appjose.vercel.app/auth/${endpoint}`;
	return await fetch(urlRegister, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputsValues),
	});
};
