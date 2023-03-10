import { CategoryItem } from '../category-item';
import './directory.styles.scss';
export const Directory = ({ categories }) => (
	<div className='directory-container'>
		{categories.map(category => (
			<CategoryItem key={category.id} category={category} />
		))}
	</div>
);
