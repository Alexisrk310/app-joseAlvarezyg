// PLATES FOR ID
export const getPlatesId = async (token: string, id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/plate/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};

// PLATES FOR ID
export const getPlatesUnique = async (id: string) => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/plate/plate/${id}`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};

// ALL PLATES
export const getPlatesAll = async () => {
	const urlGetRestaurant = `https://backen-appjose.vercel.app/plate`;
	return await fetch(urlGetRestaurant, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});
};
