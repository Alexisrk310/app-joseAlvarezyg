import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './rootStyle.css';
import { store } from './store/store';
// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
);
