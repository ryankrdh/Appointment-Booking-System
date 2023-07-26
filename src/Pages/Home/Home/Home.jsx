import React from 'react';
import Resources from '../../../components/Resources/Resources';
import Service from '../../../components/Service/Service';
import Mission from '../Mission/Mission';
import Appoinment from '../../../components/Appoinment/Appoinment';
import HomeBanner from '../HomeBanner/HomeBanner';
import Awards from '../Awards/Awards';

const Home = () => {
	return (
		<>
			<HomeBanner />
			<Mission />
			<Service />
			<Awards />
			<Resources />
			<Appoinment />
		</>
	);
};

export default Home;
