import { Home, Navigation } from './routes';
import { Route, Routes } from 'react-router-dom';
import { Authentication } from './routes/authentication/authentication.component';
import { Shop } from './routes/shop/shop.component';


const App = () => (
	<Routes>
		<Route path='/' element={<Navigation />}>
			<Route index element={<Home />} />
			<Route path='shop' element={<Shop />} />
			<Route path='auth' element={<Authentication />} />
		</Route>
	</Routes>
);

export default App;
