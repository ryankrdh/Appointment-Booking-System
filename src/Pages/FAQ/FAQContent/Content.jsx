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
						<h1>What Is A Cavity?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						A cavity is a small hole that forms inside the tooth because of
						tooth decay. Cavities are formed when plaque buildup on the outside
						of the tooth combines with sugars and starches in the food you eat.
						This produces an acid that can eat away the enamel on your tooth. If
						a cavity is left untreated, it can lead to more serious oral health
						problems. Cavities can be prevented by remembering to brush your
						teeth at least two times a day and floss between teeth at least
						once.
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>What Is A Filling?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						A filling is a synthetic material that your dentist uses to fill a
						cavity after all of the tooth decay has been removed. Fillings do
						not generally hurt because your dentist will numb your mouth with an
						anesthetic. Fillings are made from a variety of different materials,
						including composites, gold, or ceramic. If you need a filling, be
						sure to talk to your doctor about what type is best for you and your
						teeth.
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
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>When Should I Change My Toothbrush?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						Your toothbrush will eventually wear out, especially if you are
						brushing your teeth twice a day for two to three minutes each time.
						Your dentist recommends that adults and children change their
						toothbrush every three months. If you are using an electric
						toothbrush, be sure to read the directions because you may not need
						to change toothbrush heads as frequently. Patients with gum disease
						are encouraged to change their toothbrush every four to six weeks to
						keep any bacteria from spreading. After brushing, rinse your
						toothbrush with hot water to kill germs and keep the bristles clean.
						If you’ve been sick, be sure to change your toothbrush as soon as
						possible.
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>What Is Gum Disease?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						Also known as periodontal disease, gum disease is mostly caused by
						plaque and bacteria buildup that is not treated in its early stage.
						Other causes of periodontal disease include tobacco use, teeth
						grinding, some medications, and genetics. Gingivitis is the
						beginning stage of gum disease, and, if detected, is treatable.
						Gingivitis left untreated may turn into gum disease. Advanced gum
						disease will lead to tooth and bone loss, and is a permanent
						condition. Brushing your teeth regularly and visiting the dentist
						every six months will help prevent gingivitis and more severe cases
						of periodontal disease. Common signs of gum disease:
						<ul></ul>
						<li>Red, irritated, bleeding, or swollen gums</li>
						<li>Chronic bad breath</li>
						<li>Loose teeth, or loss of teeth</li>
						<li>Extreme tooth sensitivity</li>
						<li>Receding gum line</li>
						<li>Abscessed teeth</li>
					</p>
				</Col>
			</Row>
			<Row className="text-a">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-ac" data-aos="fade">
						<h1>
							If I Have Braces, Do I Still Need Dental Checkups Every Six
							Months?
						</h1>
					</div>
					<p className="w-50 m-auto content-inner text-ac" data-aos="fade">
						Yes! In fact, it’s even more important that patients receiving
						orthodontic treatment visit their dentist regularly. With braces,
						food may be caught in places that your toothbrush can’t reach. This
						causes bacteria to build up and can lead to cavities, gingivitis,
						and gum disease. Your dentist will work closely with your
						orthodontist to make sure that your teeth stay clean and healthy
						while wearing braces.
					</p>
				</Col>
			</Row>
			<Row className="text-b">
				<Col md={12} lg={12} className="text-center">
					<div className="section-title text-bc" data-aos="fade">
						<h1>How Do I Schedule My Next Checkup?</h1>
					</div>
					<p className="w-50 m-auto content-inner text-bc" data-aos="fade">
						Simply call our practice! Our front desk staff will be happy to help
						schedule your next dental checkup at your convenience. If you are a
						new patient, please let us know and we will provide you with all the
						information you need for your first dental visit.
					</p>
				</Col>
			</Row>
		</section>
	);
};

export default Content;
