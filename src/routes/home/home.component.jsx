import { Outlet } from 'react-router-dom';
import categories from '../../categories.json';
import { Directory } from '../../components/directory';
export const Home = () => (
	<>
		<Directory categories={categories} />
		<Outlet />;
	</>
);
