import { GlobalButton } from './button.model';

const Button: React.FC<GlobalButton> = ({
	type,
	buttonText,
	onClick,
	className,
}) => {
	return (
		<button type={type} onClick={onClick} className={className}>
			{buttonText}
		</button>
	);
};

export default Button;
