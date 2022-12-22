import { Values } from '@/models/interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Values = {
	name: '',
	email: '',
	password: '',
	tel: '',
	nameRestaurant: '',
	addressOne: '',
	addressTwo: '',
	addressThree: '',
};
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export default authSlice.reducer;
