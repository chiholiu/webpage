import React from 'react';

const alltools = [
	{ 'id': 1, 'text': 'ReactJS', 'image': 'images/react-logo.png'},
	{ 'id': 2, 'text': 'Redux','image': 'images/redux.png'},
	{ 'id': 3, 'text': 'SASS','image': 'images/javascript.png'},
	{ 'id': 4, 'text': 'Webpack','image': 'images/git.png'},
	{ 'id': 5, 'text': 'TypeScript','image': 'images/typescript.png'},
	{ 'id': 6, 'text': 'Styled-Component','image': 'images/styled-component.png'},
];

const Introduction = () => {
	let tools = alltools.map((tool, index) => {

		return (
			<div key={index} className="tools-content-block-child">
				<img src={tool.image} className="tools-content-block-image" alt={tool.text}/>
			</div>
		);

	});
	return (
		<section id='introduction' className="section-block">
			<div className='section-block-background-skew'>
			</div>
			<div className='section-block-content'>
				<div className="heading-block">
					<h1 className='heading-block-title'>Tools</h1>
					<p className="heading-block-sub">As a Front End Developer the train should never stop, so that is exactly what I will do. Therefore I have the inquisitiveness of a Junior, which helps me to keep innovating and developing myself continuously. As Jack Ma said: "There are no experts of tomorrow, only of yesterday". Vanilla CSS and JavaScript are my favorite ones, so in spare time I experiment with that a lot.  </p>
				</div>

				<div className="tools-content-block">
					{tools}
				</div>
			</div>
		</section>
	);
};

export default Introduction;