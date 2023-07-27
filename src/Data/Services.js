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
		flippedDescription: `At Mellow Dental, we provide essential dental exams and cleanings for optimal oral health. Our skilled dentists detect dental issues early, preventing problems from worsening. Enjoy a fresh, confident smile with our professional cleanings that prevent tooth decay and gum disease. Schedule regular visits every six months for lasting oral well-being. Experience comprehensive dental care and improved oral health with us today.`,
		link: 'Learn More',
		video: dentalCare,
	},
	{
		id: '002',
		title: 'Same-Day Crowns',
		description:
			"No more multiple visits! Our in-house miller will prepare your crown while you're in the chair",
		flippedDescription: `Experience the convenience of our same-day crown service! Our state-of-the-art CEREC machine allows you to get a custom-fitted, natural-looking crown in just one visit. No more multiple appointments or temporary crowns. Our skilled dentists use advanced CAD/CAM technology for a durable and precise restoration in hours. Book now and discover the speed and precision of our CEREC machine!`,
		link: 'Learn More',
		video: dentalCrown,
	},
	{
		id: '003',
		title: 'Orthodontics',
		description:
			'Never feel insecure about your smile ever again! Straighten your smile withour Orthodontist.',
		flippedDescription: `Unlock the path to a stunning smile with our in-office orthodontist specialist! We provide personalized orthodontic care for all ages, offering braces and clear aligners. Our expert will assess your dental structure and create a customized plan for a picture-perfect smile. Book a consultation now to take the first step towards radiant, straight teeth.`,
		link: 'Learn More',
		video: dentalOrtho,
	},

	{
		id: '004',
		title: 'Oral Surgery',
		description:
			'Free consultation with our in-office Oral Surgeon! General anesthesia available.',
		flippedDescription: `Discover unparalleled oral care and surgical expertise with our in-office oral surgeon. From wisdom tooth extractions to dental implants, our specialist delivers compassionate care. With state-of-the-art equipment, precise treatments are guaranteed. Trust us for a restored smile and optimal oral well-being.`,
		link: 'Learn More',
		video: dentalSurgery,
	},

	{
		id: '005',
		title: 'Online Appointments',
		description: 'Make your appointments online at your convenience!',
		flippedDescription: `Experience the efficiency of our online appointment service. Schedule your dental visit with just a few clicks. Choose your date, time, and service from the comfort of your home. Whether it's a check-up, cleaning, or cosmetic treatment, access expert dental care conveniently and securely.`,
		link: 'Learn More',
		video: dentalSchedule,
	},

	{
		id: '006',
		title: 'Emergency',
		description:
			"Chipped tooth? Filling came out? Toothache? We'll see you ASAP.",
		flippedDescription: `Trust us for prompt and reliable care during dental emergencies. Our experienced dentists prioritize same-day appointments for immediate relief. Your well-being is our priority, and we work tirelessly to restore your oral health. Reach out to us anytime for exceptional and timely care. Your smile matters to us, day or night.`,
		link: 'Learn More',
		video: dentalEmergency,
	},
];
