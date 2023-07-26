import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap';
import drMelo from '../../../Images/a-doctor-melo.png';
import drBoba from '../../../Images/a-doctor-boba.png';
import './Dentist.css';

const Dentist = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="dr-introduction">
			<Container>
				<Row className="align-items-center">
					<Col lg={6}>
						<div className="doctor-image-container" data-aos="zoom-in">
							<img src={drMelo} alt="dr-introduction" className="img-fluid" />
						</div>
					</Col>
					<Col lg={6}>
						<div
							className="dr-introduction-txt mt-5 pt-5"
							data-aos="zoom-in-up"
						>
							<h2>Dr. Melo Tseng</h2>
							<p>
								Dr. Melo Tseng is a highly skilled and compassionate dentist
								with a passion for providing exceptional dental care to her
								patients. She graduated with honors from the prestigious School
								of Dentistry and has been practicing for over 10 years. Dr.
								Tseng is committed to staying up-to-date with the latest
								advancements in dentistry and regularly attends continuing
								education courses to enhance her skills. With a gentle and
								caring approach, Dr. Tseng strives to make every patient feel
								comfortable and at ease during their dental visits. She believes
								in building strong relationships with her patients, taking the
								time to listen to their concerns, and tailoring treatment plans
								to meet their unique needs.
							</p>
							<p>
								In addition to her expertise in general dentistry, Dr. Tseng has
								a special interest in cosmetic dentistry and smile makeovers.
								She takes great pride in helping her patients achieve the smile
								of their dreams, boosting their confidence and self-esteem. When
								not in the office, Dr. Tseng enjoys spending time with her
								family and exploring the great outdoors. She is an avid hiker
								and nature enthusiast. Dr. Tseng also actively participates in
								dental outreach programs, providing dental care to underserved
								communities and advocating for improved oral health access for
								all.
							</p>
						</div>
					</Col>
					<Col lg={6}>
						<div className="doctor-image-container" data-aos="zoom-in">
							<img
								src={drBoba}
								alt="dr-introduction"
								className="doctor-boba-image-size img-fluid"
							/>
						</div>
					</Col>
					<Col lg={6}>
						<div
							className="dr-introduction-txt mt-5 pt-5"
							data-aos="zoom-in-up"
						>
							<h2>Dr. Boba Dong</h2>
							<p>
								Dr. Boba Dong is a dedicated and experienced dentist who has
								been serving the community for over 15 years. He earned his
								dental degree from a renowned dental school and completed
								advanced training in restorative dentistry and dental implants.
								Dr. Dong is passionate about restoring his patients' oral health
								and smiles, providing them with long-lasting and beautiful
								results. Patients appreciate Dr. Dong's warm and friendly
								demeanor, and he takes the time to build strong relationships
								with each individual. He believes in educating his patients
								about their oral health and empowering them to make informed
								decisions about their treatment options.
							</p>
							<p>
								Dr. Dong has a keen eye for detail and is known for his
								meticulous approach to dental procedures. He stays at the
								forefront of dental technology and techniques, ensuring that his
								patients receive the highest standard of care. Apart from his
								commitment to dentistry, Dr. Dong is actively involved in
								various community outreach programs, providing dental care to
								underserved populations. He is a firm believer in giving back to
								the community and improving oral health access for all. In his
								free time, Dr. Dong enjoys playing golf, reading, and spending
								quality time with his family. He is also a passionate advocate
								for environmental conservation and sustainability. Dr. Dong
								believes in promoting eco-friendly practices in his dental
								office to contribute to a greener environment.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Dentist;
