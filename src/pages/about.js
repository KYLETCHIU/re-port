import React from "react";
import BM from "../BM.png";


const About = () => {
return (
	<div className="boutme">
	<h1>About me</h1>
	<h2>I was born and raised in Orange County, California.</h2>
	<h3>Got a BA degree and some wild memories from UGA.</h3>
	<h4>Passion for tinkering and creation led to the dev field.</h4>
	<h5>MERN Certification from GA Tech to make it official.</h5>
	<p>Hobbies include being a nerd, shooting, and hiking.</p>
	<p>Check out my <a className="resume" href='../Resume2022.pdf' download>Resume</a> for more.</p>
	<img src={BM} alt="Bitmoji"/>
	</div>
);
};

export default About;
