import logo from '../assets/image/main-logo-transparent.svg';
import menuLinks from '../menuLists.json';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <>
            <section className="shadow-md w-[100%] bg-white font-mono">
                <header
                    className="flex justify-between items-center w-[90%] mx-auto py-5 text-black lg:sticky lg:top-3">
                    <img src={logo} alt="" className='w-24 h-12' />

                    {/* <h1 className="text-red-900 font-bold text-2xl">FaCoded</h1> */}

                    <nav
                        className="border-[#FFDBD9] border-2 lg:border-none nav-links duration-500 absolute top-[-100%] w-[80.1%] lg:w-auto min-h-[35vh] mx-auto flex items-center px-5 lg:min-h-fit lg:static">
                        <ul className="flex flex-col lg:flex-row my-5 lg:my-0 text-lg font-semibold">
                            {menuLinks.map((menuLink => (
                                <Link to={menuLink.path} key={menuLink.id} className='hover:bg-red-800 py-2 px-5 hover:text-white transition hover:duration-700 ease-in-out'> {menuLink.menu}</Link>
                            )))}

                            <button className="bg-red-950 rounded-full px-5 py-2 lg:hidden" id="resume-btn">My Resume</button>
                        </ul>
                    </nav>

                    <div className="hidden lg:visible lg:flex items-center gap-6">
                        <button className="bg-red-800 rounded-md px-10 py-3 text-white lg:block" id="resume-btn">My Resume</button>
                    </div>

                    <button
                        className="lg:hidden text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        id="menu-toggle-btn"
                        onClick={handleMenuToggle}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </header>
            </section>
        </>

    )
}


export default Header