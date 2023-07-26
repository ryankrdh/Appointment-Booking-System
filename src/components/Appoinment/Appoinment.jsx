import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Appoinment.css';

import meloImage from '../../Images/a-melo.png';
import bobaImage from '../../Images/a-boba.png';

const Appoinment = () => {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const [doctorPreference, setDoctorPreference] = useState('');

	const handleDoctorChange = (event) => {
		setDoctorPreference(event.target.value);
	};

	let selectedDoctorImage = null;
	if (doctorPreference === 'Dr. Melo') {
		selectedDoctorImage = meloImage;
	} else if (doctorPreference === 'Dr. Boba') {
		selectedDoctorImage = bobaImage;
	}

	const [treatmentPreference, setTreatmentPreference] = useState('');

	const handleTreatmentChange = (event) => {
		setTreatmentPreference(event.target.value);
	};

	return (
		<section className="appoinment-wrapper">
			<Container>
				<Row>
					<Col sm={12} md={12}>
						<div className="section-title">
							<h1 className="mt-5">Request Appointment</h1>
						</div>
						<div className="appoinment-form">
							<form action="#" className="row form-control">
								<Col md={6} lg={6}>
									<input
										type="text"
										placeholder="Full Name"
										className="form-control"
									/>
								</Col>
								<Col md={6} lg={6}>
									<input
										type="email"
										placeholder="Email"
										className="form-control"
									/>
								</Col>
								<Col md={6} lg={6}>
									<input
										type="phone"
										placeholder="Phone Number"
										className="form-control"
									/>
								</Col>
								<Col md={4} lg={4} className="doctor-pref ">
									<select
										value={doctorPreference}
										onChange={handleDoctorChange}
										className=""
									>
										<option value="">Select Doctor Preference</option>
										<option value="Dr. Melo">Dr. Melo</option>
										<option value="Dr. Boba">Dr. Boba</option>
									</select>
									{selectedDoctorImage && (
										<img
											src={selectedDoctorImage}
											alt={doctorPreference}
											className="doctor-image"
										/>
									)}
								</Col>
								<Col md={6} lg={6}>
									<DatePicker
										selected={selectedDate}
										onChange={handleDateChange}
										placeholderText="Select Date"
										className="form-control"
									/>
								</Col>
								<Col md={6} lg={6} className="treatment-pref">
									<select
										value={treatmentPreference}
										onChange={handleTreatmentChange}
										className=""
									>
										<option value="">Select Treatment</option>
										<option value="New Patient Exam">
											New Patient Exam + Cleaning
										</option>
										<option value="New Patient Exam">
											Recall Exam + Cleaning
										</option>
										<option value="Filling">Filling</option>
										<option value="Crown">Crown</option>
										<option value="Oral Surgery">Oral Surgery</option>
										<option value="New Ortho Appointment">
											New Ortho Appointment
										</option>
										<option value="Ongoing Ortho Appointment">
											Ongoing Ortho Appointment
										</option>
										<option value="Emergency">Emergency</option>
										<option value="Limited Exam">
											Limited Exam / Consultations
										</option>
									</select>
								</Col>
								<Col md={12} lg={12}>
									<textarea
										name="Message"
										cols="30"
										rows="10"
										placeholder="Please Provide Details."
										className="form-control"
									></textarea>
								</Col>
								<Link to="/messagereceived">
									<button className="theme-btn btn-fill form-btn mt-5 form-control">
										<span className="submit-text">Submit</span>
									</button>
								</Link>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Appoinment;
