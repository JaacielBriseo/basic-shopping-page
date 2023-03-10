import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductsProvider>
					<App />
				</ProductsProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
