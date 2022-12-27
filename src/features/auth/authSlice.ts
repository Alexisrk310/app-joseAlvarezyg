import { ValuesRegister } from '@/models/interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ValuesRegister = {
	name: '',
	email: '',
	password: '',
	tel: '',
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
