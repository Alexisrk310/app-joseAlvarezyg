export const getRestaurant = async (
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
