// ENCONTRAR RESTAURANTE POR ID
export const getRestaurantiD = async (id: string, token: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
	});
};
// MOSTRAR TODOS LOS RESTAURANTES
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
