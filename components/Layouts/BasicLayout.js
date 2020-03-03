import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../../css/basiclayout.css';

function BasicLayout(props) {
	return (
		<div>
			<div className="scrollover ">
			<Navbar />
             {props.children}
			</div>
			<Footer />
		</div>
	);
}

export default BasicLayout;
