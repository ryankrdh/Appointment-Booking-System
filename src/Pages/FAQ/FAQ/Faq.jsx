import React from 'react';
import Resources from '../../../components/Resources/Resources';
import Content from '../FAQContent/Content';
import Technology from '../Technology/Technology';
import Banner from '../../../components/Banner/Banner';
import LeaveItToUs from '../LeaveItToUs/LeaveItToUs';

const About = () => {
	return (
		<>
			<Banner />
			<Content />
			<LeaveItToUs />
			<Technology />
			<Resources />
		</>
	);
};

export default About;
