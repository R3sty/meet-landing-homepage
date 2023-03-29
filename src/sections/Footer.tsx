import Button from '../components/Button';

const Footer = () => {
	return (
		<>
			<div className='__divider-container'>
				<div className='__divider-container __divider'>
					<span className='__divider-container __divider-number'>02</span>
				</div>
			</div>
			<div className='footer-container'>
				<div className='__footer-content'>
					<h1>Experience more together</h1>
					<p>
						Stay connected with reliable HD meetings and unlimited one-on-one
						and group video sessions.
					</p>
					<div className='__button'>
						<Button
							type={'submit'}
							buttonText={
								<span>
									Download <span className='__version-text'> v1.3</span>
								</span>
							}
							className='button __secondary'
						></Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
