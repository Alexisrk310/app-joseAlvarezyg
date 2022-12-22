import { Values } from '@/models/interface';

export const auth = async (endpoint: string, inputsValues: Values) => {
	const urlRegister = `https://proyectggg.herokuapp.com/api/${endpoint}`;
	return await fetch(urlRegister, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputsValues),
	});
};
