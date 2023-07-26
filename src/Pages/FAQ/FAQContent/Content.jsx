import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="about-content-sec">
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>What Is Dentistry?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						Dentistry is the diagnosis, treatment, and prevention of conditions,
						disorders, and diseases of the teeth, gums, mouth, and jaw. Often
						considered necessary for complete oral health, dentistry can have an
						impact on the health of your entire body.
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>
							Do you have options to pay for treatment if I don't have
							insurance?
						</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						No dental insurance? No problem! We offer flexible financing options
						and a dental plan customized for your needs. The Mellow Dental Plan
						is a discount dental plan that can help you have 20-50% on most
						treatments. Ask our front desk when you come in!
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>What Is A Dentist?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						A dentist is a specialist who works to diagnose, treat, and prevent
						oral health problems. Your dentist has completed at least eight
						years of schooling, and received either a DDS (Doctor of Dental
						Surgery) degree, or a DMD (Doctor of Dental Medicine) degree. If
						your doctor is a pediatric dentist, this means that he or she
						specializes in caring for children from infancy through their teen
						years. A pediatric dentist has received the proper education and
						training needed to work with young kids. Other specializations
						include:
						<ul></ul>
						<li>Endodontics (root canals)</li>
						<li>
							Oral and maxillofacial (including pathology, radiology, and
							surgery)
						</li>
						<li>Orthodontics and dentofacial orthopedics</li>
						<li>Periodontics (gum disease)</li>
						<li>Prosthodontics (implants)</li>
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>Why Is Visiting The Dentist So Important?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						Visiting the dentist regularly will not only help keep your teeth
						and mouth healthy, but will also help keep the rest of your body
						healthy. Dental care is important because it:
						<ul></ul>
						<li>Helps prevent tooth decay</li>
						<li>
							Protects against periodontal (gum) disease, which can lead to
							tooth and bone loss
						</li>
						<li>
							Prevents bad breath – brushing, flossing, and seeing the dentist
							regularly will help reduce the amount of bacteria in your mouth
							that causes bad breath
						</li>
						<li>
							Gives you a more attractive smile and increases your
							self-confidence
						</li>
						<li>
							Helps keep teeth looking bright by preventing them from becoming
							stained by food, drinks, and tobacco
						</li>
						<li>
							Strengthens your teeth so that you can enjoy healthy, beautiful
							smiles for the rest of your life!
						</li>
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>My Teeth Feel Fine. Do I Still Need To See A Dentist?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						Your teeth may feel fine, but it’s still important to see the
						dentist regularly because problems can exist without you knowing.
						Your smile’s appearance is important, and your dentist can help keep
						your smile healthy and looking beautiful. With so many advances in
						dentistry, you no longer have to settle for stained, chipped,
						missing, or misshapen teeth. Today’s dentists offer many treatment
						choices that can help you smile with confidence, including:
						<ul></ul>
						<li>Endodontics (root canals)</li>
						<li>
							Oral and maxillofacial (including pathology, radiology, and
							surgery)
						</li>
						<li>Orthodontics and dentofacial orthopedics</li>
						<li>Periodontics (gum disease)</li>
						<li>Prosthodontics (implants)</li>
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>My Teeth Feel Fine. Do I Still Need To See A Dentist?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						Your teeth may feel fine, but it’s still important to see the
						dentist regularly because problems can exist without you knowing.
						Your smile’s appearance is important, and your dentist can help keep
						your smile healthy and looking beautiful. With so many advances in
						dentistry, you no longer have to settle for stained, chipped,
						missing, or misshapen teeth. Today’s dentists offer many treatment
						choices that can help you smile with confidence, including:
						<ul></ul>
						<li>Professional teeth whitening</li>
						<li>Fillings that mimic the appearance of natural teeth</li>
						<li>Tooth replacement and full smile makeovers</li>
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>
							What Should I Look For When Choosing The Right Dentist For Me?
						</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						Choosing a dentist who “clicks” with you and your family is
						important, and you may wish to consider several dentists before
						making your final decision. During your first visit, you should be
						able to determine whether the dentist is right for you. During your
						appointment, consider the following:
						<ul></ul>
						<li>Is the appointment schedule convenient?</li>
						<li>Is the office easy to get to and close by?</li>
						<li>Does the office appear to be clean and orderly?</li>
						<li>
							Was your medical and dental history recorded and placed in a
							permanent file?
						</li>
						<li>Does the dentist explain techniques for good oral health?</li>
						<li>
							Is information about cost presented to you before treatment is
							scheduled?
						</li>
						<li>
							Is your dentist a member of the ADA (American Dental Association)?
						</li>
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>How Can I Take Care Of My Teeth Between Dental Checkups?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						<li>
							ALWAYS remember to brush your teeth at least two times a day, and
							floss at least once!
						</li>
						<li>
							Make sure to use toothpaste that contains fluoride, and ask your
							dentist if you need a fluoride rinse. This will help prevent
							cavities.
						</li>
						<li>
							Avoid foods with a lot of sugar (sugar increases the amount of
							bacteria that grows in your mouth causing more plaque and possibly
							cavities) and avoid tobacco (this can stain your teeth, cause gum
							disease, and eventually lead to oral cancer).
						</li>
						<li>
							Don’t be afraid to brush your tongue! By brushing your tongue, you
							will remove food particles and reduce the amount of plaque-causing
							bacteria. Tongue brushing also helps keep your breath fresh.
						</li>
						<li>
							Be sure to schedule your routine checkup. It is recommended that
							you visit the dentist every six months.
						</li>
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>
							At What Age Should I Start Taking My Child To See The Dentist?
						</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						The American Academy of Pediatric Dentistry (AAPD) recommends that
						children first see a dentist as early as six months of age and no
						later than one year of age. During this time, your child’s baby
						teeth will be coming in and your dentist can examine the health of
						your child’s first few teeth. After the first visit, be sure to
						schedule regular checkups every six months.
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>How Often Should I See The Dentist?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						Children, teens, and adults should all see the dentist for a regular
						checkup at least once every six months. Patients who are at a
						greater risk for oral cancer or gum disease may be required to see
						the dentist more than just twice a year. Your doctor will help
						determine how often you should visit the dentist for regular
						checkups.
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>How Often Should I Brush My Teeth?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						According to your dentist and the American Dental Association, you
						should brush your teeth at least two times a day. Brushing keeps
						your teeth, gums, and mouth clean and healthy by removing
						bacteria-causing plaque. It is also recommended that you use a
						soft-bristled toothbrush and toothpaste that contains fluoride when
						you brush your teeth. You should spend at least a minute on the top
						teeth and a minute on the bottom teeth, and remember to brush your
						tongue; it will help keep your breath smelling fresh!
					</p>
				</Col>
			</Row>
		</section>
	);
};

export default Content;
