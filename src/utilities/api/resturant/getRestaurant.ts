export const getRestaurantiD = async (
	endpoint: string,
	inputsValues: any,
	token: string
) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant/${endpoint}`;
	return await fetch(urlGetRestaurant, {
		method: 'POST',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputsValues),
	});
};
export const getRestaurant = async (token: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
	});
};
