import Button from '../components/Button';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='__divider-container'>
				<div className='__divider-container __divider'>
					<span className='__divider-container __divider-number'>02</span>
				</div>
			</div>
			<div className='__footer-image'></div>
			<h1>Experience more together</h1>
			<h2>
				Stay connected with reliable HD meetings and unlimited one-on-one and
				group video sessions.
			</h2>
			<Button
				type={'submit'}
				buttonText={
					<span>
						Download <span className='__version-text'> v1.3</span>
					</span>
				}
				className='button'
			></Button>
		</div>
	);
};

export default Footer;
