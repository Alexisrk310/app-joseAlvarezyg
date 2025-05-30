// ENCONTRAR RESTAURANTE POR ID DE RESTAURANTE
export const getRestaurantiD = async (id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};
// ENCONTRAR RESTAURANTE POR ID DE USUARIO
export const getRestaurantiDUsuario = async (id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant/user/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};
// MOSTRAR TODOS LOS RESTAURANTES
export const getRestaurant = async () => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};

// MOSTRAR TODOS LOS RESTAURANTES RECOMENDADOS / POPULATE
export const getRestaurantPopulate = async () => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/populate/restaurant`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};
