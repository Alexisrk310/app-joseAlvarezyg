export const putPlatesId = async (
	token: string,
	id: string,
	inputValues: any
) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/plate/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'PUT',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
		body: JSON.stringify(inputValues),
	});
};
