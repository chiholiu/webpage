import React from 'react';

const Introduction = () => {
	return (
		<section id='introduction' className="section-block">
			<div className='section-block-background-skew'>
			</div>
			<div className='section-block-content'>
				<div className="heading-block">
					<h1 className='heading-block-title'>Introduction</h1>
					<p className="heading-block-sub">Have been started with programming almost 2 years ago, and as you probably noticed I graduated my Bachelor of Business Administration at University of Applied Sciences (Amsterdam) in 2013. With that in mind I gained lot of marketing knowledge that can be useful in this fast-paced and international environment. </p>
				</div>

				<div className="introduction-content">
					<div className="introduction-content-block">
						<div className="introduction-content-block-header">Chiho Liu</div>
						<div className="introduction-content-block-header-sub">Name</div>
                       
					</div>
					<div className="introduction-content-block">
						<div className="introduction-content-block-header">32</div>
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
		</section>
	);
};

export default Introduction;