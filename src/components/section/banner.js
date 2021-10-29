import React from 'react';

const Banner = () => {
	return (
		<section id='banner' className="section-block">
			<div className='section-block-background-skew'>
			</div>
			<div className='section-block-content'>
				<div className="heading-block">
					<h1 className='heading-block-title'>Portfolio website</h1>
				</div>

				<div className="banner-content-block">
					<div className="banner-content-block-left banner-content">
						<p><b>Welcome to my new website a great place where I could showcase some stuff that I made and where I will tell you what my ambitions are and plans for the coming time.</b><br/>My greatest love for ReactJS supported by a big community made me to keep focusing on this library. Besides that I am able to use vanilla CSS and Styled-Components to make codes more readable, clean, reusable and maintainable. <br/><br/>Furthermore focusing on the latest tools like TypeScript to make the code more predictable, readable and easier to spot bugs in early phase, and working with a team on a complex application gives me a satisfied feeling and motivation to continue this journey in order to become a better Front End Developer. The openness in the Development world is something that I really admire, and to me that is how every team should work these days. There are no limits, except fair that someone needs to overcome in order to upgrade themselves to the next level. One mission for me is to change the world one day with my own composite team by building meaningful and impactful app. </p>
					</div>
					<div className="banner-content-block-right banner-image">
						<img src="images/chiho-cartoon.png" alt="chiho-cartoon"/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;