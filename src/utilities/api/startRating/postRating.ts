// AGREGAR ESTRELLAS A UN PLATO
export const postRatingPlates = async (ratingValue: any, id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/ratePlate/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(ratingValue),
	});
};
// AGREGAR UN RESTAURANTE
export const postRatingRestaurant = async (ratingValue: any, id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/rateRestaurant/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(ratingValue),
	});
};
