import { ValuesRegister } from '@/models/interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ValuesRegister = {
	name: '',
	email: '',
	password: '',
	tel: '',
	nameRestaurant: '',
	addresOne: '',
	addresTwo: '',
	addresThree: '',
};
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export default authSlice.reducer;
