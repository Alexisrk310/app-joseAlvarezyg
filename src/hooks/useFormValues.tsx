import React, { useState } from 'react';

export const useFormValues = (initialState: any) => {
	const [formValues, setFormValues] = useState(initialState);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};
	return [handleChange, formValues, setFormValues];
};
