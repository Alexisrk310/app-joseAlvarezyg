export const postPlates = async (inputsValues: any, token: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/plate`;
	return await fetch(urlGetRestaurant, {
		method: 'POST',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputsValues),
	});
};
