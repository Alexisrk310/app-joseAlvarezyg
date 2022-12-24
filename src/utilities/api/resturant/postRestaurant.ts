// AGREGAR UN RESTAURANTE
export const addRestaurant = async (inputsValues: any, token: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant/`;
	return await fetch(urlGetRestaurant, {
		method: 'POST',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputsValues),
	});
};
