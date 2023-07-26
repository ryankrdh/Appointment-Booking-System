import React from 'react';
import Appoinment from '../../../components/Appoinment/Appoinment';
import TeamContent from '../TeamContent/Content';
import Banner from '../../../components/Banner/Banner';
import Dentist from '../MeetDentist/Dentist';

const About = () => {
	return (
		<>
			<Banner />
			<Dentist />
			<TeamContent />
			<Appoinment />
		</>
	);
};

export default About;
