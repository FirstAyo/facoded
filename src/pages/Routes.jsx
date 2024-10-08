import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import Dashboard from './Dashboard';

const routes = (
  <Routes>
    <Route path="/" element = {<HomePage />} />
    <Route path="/about-me" element = {<AboutMe />} />
    <Route path="/my-projects" element = {<MyProjects />} />
    <Route path="/contact-me" element = { <ContactMe />} />
    <Route path = "dashboard" element = { <Dashboard />} />
    
    {/* <!-- Add more routes here --> */}
  </Routes>
);

export default routes;