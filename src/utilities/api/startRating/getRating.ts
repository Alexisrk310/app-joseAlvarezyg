// MOSTRAR TODOS LOS RESTAURANTES
export const getRatingPlates = async () => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/ratePlate`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};
