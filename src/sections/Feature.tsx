import image1 from '../assets/desktop/image-women-videochatting.jpg';
import image2 from '../assets/desktop/image-woman-in-videocall.jpg';
import image3 from '../assets/desktop/image-men-in-meeting.jpg';
import image4 from '../assets/desktop/image-women-videochatting.jpg';

const images = [image1, image2, image3, image4];

const Feature = () => {
	return (
		<main className='feature-container'>
			<div className='__img-container'>
				{images.map((img, index) => (
					<img key={index} src={img} alt={`Feature ${index + 1}`}></img>
				))}
			</div>
			<h2>BUILT FOR MODERN USE</h2>
			<h1>Smarter meetings, all in one place</h1>
			<p>
				Send messages, share files, show your screen, and record your meetings —
				all in one workspace. Control who can join with invite-only team access,
				data encryption, and data export.
			</p>
		</main>
	);
};

export default Feature;
