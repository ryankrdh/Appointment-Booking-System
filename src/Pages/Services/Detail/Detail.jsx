import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import dentalCare from '../../../Images/a-dental-care.mp4';
import dentalOrtho from '../../../Images/a-dental-ortho.mp4';
import dentalCrown from '../../../Images/a-dental-crown.mp4';
import dentalSurgery from '../../../Images/a-dental-extraction.mp4';
import dentalSchedule from '../../../Images/a-dental-scheduling.mp4';
import dentalEmergency from '../../../Images/a-dental-emergency.mp4';
import './Detail.css';

const Detail = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<section className="about-detail">
				<Container>
					<Row className="align-items-center p-5">
						<Col lg={6} sm={12} xs={12}>
							<div className="single-service-box-detail" data-aos="zoom-in">
								<div className="service-icon">
									<video
										src={dentalCare}
										autoPlay
										loop
										muted
										className="video"
									/>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div
								className="expertDentist-txt mt-5 mt-lg-0"
								data-aos="zoom-in-up"
							>
								<h2 className="fw-bold">Dental Exam + Cleaning</h2>
								<p>
									At Mellow Dental, our regular dental exams and cleanings are
									essential for achieving and maintaining optimal oral health.
									During your dental exam, our skilled dentists thoroughly
									examine your teeth, gums, and mouth to detect any dental
									issues early on, preventing potential problems from
									progressing. Our professional dental cleanings complement your
									daily oral hygiene routine, removing plaque and tartar
									buildup, preventing tooth decay and gum disease, and leaving
									you with a fresh, confident smile. With personalized treatment
									plans and a caring approach, we ensure that each patient
									receives the individualized care they deserve. By scheduling
									regular dental visits every six months, you can enjoy a
									lifetime of healthy smiles and overall well-being. Visit us
									today and experience the difference our comprehensive dental
									care can make for your oral health.
								</p>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div className="single-service-box-detail" data-aos="zoom-in">
								<div className="service-icon">
									<video
										src={dentalCrown}
										autoPlay
										loop
										muted
										className="video"
									/>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div
								className="expertDentist-txt mt-5 mt-lg-0"
								data-aos="zoom-in-up"
							>
								<h2 className="fw-bold">Same-Day Crowns</h2>
								<p>
									Experience the convenience and efficiency of our same-day
									crown service! With our state-of-the-art CEREC machine, we
									offer a revolutionary dental solution that allows you to get a
									custom-fitted, natural-looking crown in just one visit. Say
									goodbye to the hassle of multiple appointments and temporary
									crowns. Our skilled dentists use advanced CAD/CAM technology
									to design and fabricate your crown right in our office,
									providing you with a durable and precise restoration in a
									matter of hours. Whether you need to repair a damaged tooth or
									improve its appearance, our same-day crown service ensures
									minimal downtime and maximum comfort. Enjoy the benefits of a
									beautiful smile and restored dental health in no time. Book
									your appointment today and discover the speed and precision of
									our CEREC machine for same-day crowns!
								</p>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div className="single-service-box-detail" data-aos="zoom-in">
								<div className="service-icon">
									<video
										src={dentalOrtho}
										autoPlay
										loop
										muted
										className="video"
									/>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div
								className="expertDentist-txt mt-5 mt-lg-0"
								data-aos="zoom-in-up"
							>
								<h2 className="fw-bold">Orthodontics</h2>
								<p>
									Unlock the path to a stunning and confident smile with our
									in-office orthodontist specialist! Our expert orthodontist is
									dedicated to providing personalized and top-notch orthodontic
									care for patients of all ages. Whether you're a child, teen,
									or adult seeking straighter teeth, we offer a comprehensive
									range of orthodontic treatments tailored to meet your unique
									needs. From traditional braces to innovative clear aligners,
									our orthodontist will guide you through the journey to achieve
									the smile you've always dreamed of. With a keen eye for detail
									and years of experience, our specialist will carefully assess
									your dental structure and develop a customized treatment plan
									that fits your lifestyle and goals. Say goodbye to misaligned
									teeth and hello to a picture-perfect smile with the
									exceptional care of our in-office orthodontist specialist.
									Book your consultation today and take the first step towards a
									radiant smile that leaves a lasting impression!
								</p>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div className="single-service-box-detail" data-aos="zoom-in">
								<div className="service-icon">
									<video
										src={dentalSurgery}
										autoPlay
										loop
										muted
										className="video"
									/>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div
								className="expertDentist-txt mt-5 mt-lg-0"
								data-aos="zoom-in-up"
							>
								<h2 className="fw-bold">Oral Surgery</h2>
								<p>
									Discover unparalleled oral care and surgical expertise with
									our in-office oral surgeon specialist. Our highly skilled oral
									surgeon is dedicated to providing exceptional and
									compassionate care for a wide range of oral health needs. From
									complex wisdom tooth extractions and dental implants to
									corrective jaw surgeries, our specialist possesses extensive
									experience in oral surgical procedures. With state-of-the-art
									equipment and advanced techniques, our oral surgeon ensures
									precise and comfortable treatments, minimizing discomfort and
									recovery time. Whether you require dental surgery for medical
									reasons or wish to enhance your smile, our specialist will
									guide you through every step of the process, answering your
									questions and addressing any concerns. Trust in the hands of
									our proficient oral surgeon to restore your oral health and
									rejuvenate your smile. Schedule your consultation today to
									experience the highest level of care and achieve optimal oral
									well-being with our esteemed in-office oral surgeon
									specialist.
								</p>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div className="single-service-box-detail" data-aos="zoom-in">
								<div className="service-icon">
									<video
										src={dentalSchedule}
										autoPlay
										loop
										muted
										className="video"
									/>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div
								className="expertDentist-txt mt-5 mt-lg-0"
								data-aos="zoom-in-up"
							>
								<h2 className="fw-bold">Online Appointment</h2>
								<p>
									Experience the convenience and efficiency of our online
									appointment service. Say goodbye to lengthy phone calls and
									waiting times by scheduling your dental visit with just a few
									clicks. Our user-friendly online platform allows you to choose
									your preferred date and time, select your desired dental
									service, and receive instant confirmation, all from the
									comfort of your home. Whether you need a routine dental
									check-up, a cleaning, or a cosmetic treatment, our online
									appointment service ensures that you can access our expert
									dental care at your convenience. Rest assured that your
									information is secure, and our team will be ready to welcome
									you on your scheduled visit. Embrace the future of dental care
									with ease and simplicity by booking your next appointment
									online. Your smile is just a few clicks away!
								</p>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div className="single-service-box-detail" data-aos="zoom-in">
								<div className="service-icon">
									<video
										src={dentalEmergency}
										autoPlay
										loop
										muted
										className="video"
									/>
								</div>
							</div>
						</Col>
						<Col lg={6} sm={12} xs={12}>
							<div
								className="expertDentist-txt mt-5 mt-lg-0"
								data-aos="zoom-in-up"
							>
								<h2 className="fw-bold">Emergency</h2>
								<p>
									When dental emergencies strike, trust [Dental Care Clinic] for
									prompt and reliable care that puts your well-being first. Our
									dedicated team of experienced dentists is available to address
									any dental emergency with utmost professionalism and
									compassion. Whether you're experiencing severe tooth pain, a
									broken tooth, or any other urgent dental issue, we've got you
									covered. Our state-of-the-art facility is equipped to handle a
									wide range of emergencies, and we prioritize same-day
									appointments to provide you with immediate relief and peace of
									mind. Rest assured that your comfort and safety are our top
									priorities, and we will work tirelessly to alleviate your
									discomfort and restore your oral health. Don't let a dental
									emergency disrupt your life; reach out to us for exceptional
									and timely care whenever you need it most. Your smile matters
									to us, and we are here to help, day or night.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Detail;
