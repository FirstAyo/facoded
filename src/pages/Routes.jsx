import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import Dashboard from './Dashboard';
import Categories from './Categories';
import ReactJs from '../components/categories/ReactJs';
import SinglePost from './SinglePost';
// import SinglePosts from '../components/singleposts/SinglePosts';


const routes = (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/my-projects" element={<MyProjects />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="categories" element={<Categories />} />
      <Route path="react-js" element={<ReactJs />} />
      <Route path="single-post/:id" element={<SinglePost />} />

      {/* <!-- Add more routes here --> */}
    </Routes>
);

export default routes;