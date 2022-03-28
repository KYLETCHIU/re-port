import React from 'react';
import './App.css';
import Navigation from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
	<Router>
	<Navigation />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
    	<Route path='/portfolio' element={<Portfolio/>} />
		<Route path='/contact' element={<Contact/>} />
	</Routes>
	</Router>
);
}

export default App;
