export interface RestaurantValues {
	name?: string;
	specialty: string;
	description: string;
	department?: string;
	city?: string;
	address?: string;
	tel: string;
	facebook?: string;
	instagram?: string;
}

export interface responseGetRestaurant {
	id: string;
	name: string;
	image?: string;
	description: string;
	specialty: string;
	userId: string;
	rate?: string | number;
}
