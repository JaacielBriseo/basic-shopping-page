import { SignInForm } from '../../components/sign-in-form/sign-in-form.component';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';

import './authentication.styles.scss'

export const Authentication = () => {
	//! Using async-await in useEffect
	// useEffect(
	// 	() => async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await createUserDocumentFromAuth(response.user);
	// 		}
	// 	},
	// 	[]
	// );


	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};
