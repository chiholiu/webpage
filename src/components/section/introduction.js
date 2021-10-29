import React from 'react';

const Introduction = () => {
	return (
		<section id='introduction' className="section-block">
			<div className='section-block-background-skew'>
			</div>
			<div className='section-block-content'>
				<div className="heading-block">
					<h1 className='heading-block-title'>Introduction</h1>
					<p className="heading-block-sub">More than 3 years work experience as Front End Developer and since then I only focuses on ReactJS and also recently gained knowledge on TypeScript. I graduated my Bachelor of Business Administration at University of Applied Sciences (Amsterdam) in 2013. With that in mind I gained lot of marketing knowledge that can be useful in this fast-paced and international environment. </p>
				</div>

				<div className="introduction-content">
					<div className="introduction-content-block">
						<div className="introduction-content-block-header">Chiho Liu</div>
						<div className="introduction-content-block-header-sub">Name</div>
                       
					</div>
					<div className="introduction-content-block">
						<div className="introduction-content-block-header">33</div>
						<div className="introduction-content-block-header-sub">Age</div>
                        
					</div>
					<div className="introduction-content-block">
						<div className="introduction-content-block-header">BBA</div>
						<div className="introduction-content-block-header-sub">Study</div>
					</div>
					<div className="introduction-content-block">
						<div className="introduction-content-block-header">Dutch</div>
						<div className="introduction-content-block-header-sub">Nationality</div>
					</div>
				</div>
			</div>   
			<div className="introduction-container">
				<div className="introduction-container-block introduction-container-content">
					<p>Love traveling to China and learn from this amazing country how they speed up technological development. In 2018 I got the chance to see Alibaba with my own eyes, so I decided to go to Alibaba headquarter in Hangzhou and since then my mindset is completely different. There is no limit. </p>
				</div>
				<div className="introduction-container-block introduction-container-image">
					<figure>
						<img src="images/picture-ali.jpg" className="introduction-alibaba-image"/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Introduction;