import React from 'react';

const allSections = [{'portfolio': [
	{ 'id': 1, 'header': 'Cargill [Veliche]','image': 'images/cargill.png', 'url': 'https://www.veliche.com'},
	{ 'id': 2, 'header': 'G4S','image': 'images/g4s.png', 'url': 'https://www.g4spay.nl/'},
	{ 'id': 3, 'header': 'Royal Flora Holland','image': 'images/royal-flora-holland.png', 'url': 'https://www.royalfloraholland.com/en'},
	{ 'id': 4, 'header': 'Subaru email campaign','image': 'images/subaru.png', 'url': 'https://www.subaru.nl/'},
	{ 'id': 5, 'header': 'Anders Reizen','image': 'images/anders-reizen.png', 'url': 'https://www.andersreizen.nu/'},
	{ 'id': 6, 'header': 'Conclusion Digital', 'image': 'images/conclusion.png', 'url': 'https://thehumanperspective.nl/'}

]}];

const Portfolio = () => {
	let portfolio = allSections[0].portfolio.map((website, index) => {
		return (
			<div key={index} className="portfolio-block-container">
				<a href={website.url} target="_blank" rel="noopener noreferrer">
					<img src={website.image} className="website-images"/>
				</a>
				<p className="portfolio-block-container-caption">{website.header}</p>
			</div>
		);
	});

	return (
		<section id="websites" className="section-block">
			<div className="section-block-background-skew">
			</div>
			<div className='section-block-content'>
				<div className="heading-block">
					<h1 className='heading-block-title'>Portfolio</h1>
					<p className="heading-block-sub">A brief selection of some clients me and my (former) team have worked on the last years. If you click on the Conclusion logo you will exactly get an indication of my creativity and the way how I style website from scratch. Furthermore if you really want to know my JavaScript skills, I would recommend you to click on the link in the Footer that redirects you to my GitHub account. This current portfolio website is also made in ReactJS ;) </p>
				</div>

				<div className="portfolio-block">
					{portfolio}
				</div>
			</div>
            
		</section>
	);
};

export default Portfolio;