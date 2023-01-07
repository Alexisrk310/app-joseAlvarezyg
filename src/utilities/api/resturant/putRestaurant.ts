// MODIFICAR UN RESTAURANTE
export const putRestaurant = async (
	inputsValues: any,
	token: string,
	id: string
) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/restaurant/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'PUT',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
			// 'Content-Type': 'multipart/form-data',
		},
		body: JSON.stringify(inputsValues),
	});
};
