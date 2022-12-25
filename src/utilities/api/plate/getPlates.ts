export const getPlatesId = async (token: string, id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/plate/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'x-token': token,
			'Content-type': 'application/json',
		},
	});
};
