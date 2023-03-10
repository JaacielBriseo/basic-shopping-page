import './button.styles.scss';

/**
 * default
 * inverted
 * google sign in
 */
const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
};
export const Button = ({ children, buttonType, ...rest }) => {
	return (
		<button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...rest}>
			{children}
		</button>
	);
};
