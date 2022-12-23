export const auth = async (endpoint: string, inputsValues: any) => {
	const urlAuth = `https://backen-appjose.vercel.app/auth/${endpoint}`;
	return await fetch(urlAuth, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputsValues),
	});
};
