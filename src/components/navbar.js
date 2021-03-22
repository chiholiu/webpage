import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const navigationBarHeight = '85';

export const allSections = ['banner', 'introduction', 'websites', 'contact'];

const Navbar = () => {
	const [activeTab, setActiveTab] = useState(allSections[0]);
	const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());

	const handler = (index) => {
		setActiveTab(allSections[index]);
	};

	const [scrollY, setScrollY] = useState(bodyOffset.top);
	const listener = () => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.y);
	};

	useEffect(() => {
		document.addEventListener("scroll", listener);
		return () => {
			document.removeEventListener("scroll", listener);
		};
	});

	let outputSection = allSections.map((navLink, index) => {
		return (
			<li className='navigation-link' key={index} className={`link ${activeTab === navLink? 'active' : ''}`}>
				<AnchorLink href={"#" + navLink} onClick={() => handler(index)} offset={navigationBarHeight}>{navLink}</AnchorLink>
			</li>
		);
	});

	return (
		<nav id="navigation-bar" className={"navigation " + (scrollY > 20 ? 'box-shadow': '')}>
			<ul>
				{ outputSection }
			</ul>
		</nav>
	);
};

export default Navbar;