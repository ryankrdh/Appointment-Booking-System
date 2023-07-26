import dentalCare from '../Images/a-dental-care.mp4';
import dentalOrtho from '../Images/a-dental-ortho.mp4';
import dentalCrown from '../Images/a-dental-crown.mp4';
import dentalSurgery from '../Images/a-dental-extraction.mp4';
import dentalSchedule from '../Images/a-dental-scheduling.mp4';
import dentalEmergency from '../Images/a-dental-emergency.mp4';

export const FakeService = [
	{
		id: '001',
		title: 'Dental Exam + Cleaning',
		description:
			'A comprehensive wellness visit with a comfortable cleaning, xrays, and a personalized exam.',
		link: 'Learn More',
		video: dentalCare,
	},
	{
		id: '002',
		title: 'Same-Day Crowns',
		description:
			"No more multiple visits! Our in-house miller will prepare your crown while you're in the chair",
		link: 'Learn More',
		video: dentalCrown,
	},
	{
		id: '003',
		title: 'Orthodontics',
		description:
			'Never feel insecure about your smile ever again! Straighten your smile withour Orthodontist.',
		link: 'Learn More',
		video: dentalOrtho,
	},

	{
		id: '004',
		title: 'Oral Surgery',
		description:
			'Free consultation with our in-office Oral Surgeon! General anesthesia available.',
		link: 'Learn More',
		video: dentalSurgery,
	},

	{
		id: '005',
		title: 'Online Appointments',
		description: 'Make your appointments online at your convenience!',
		link: 'Learn More',
		video: dentalSchedule,
	},

	{
		id: '006',
		title: 'Emergency',
		description:
			"Chipped tooth? Filling came out? Toothache? We'll see you ASAP.",
		link: 'Learn More',
		video: dentalEmergency,
	},
];
