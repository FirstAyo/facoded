import logo from '../assets/image/main-logo-transparent.svg';
import menuLinks from '../menuLists.json';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    // const handleMenuToggle = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (

        <>
            <section className="shadow-md w-[100%] bg-white font-mono">
                <header
                    className="flex justify-between items-center w-[90%] mx-auto py-5 text-black lg:sticky lg:top-3">
                    <Link to={'/'}><img src={logo} alt="" className='w-24 h-12' /></Link>

                    {/* <h1 className="text-red-900 font-bold text-2xl">FaCoded</h1> */}

                    <nav
                        className={`duration-500 absolute lg:w-auto mx-auto flex items-center px-5 lg:min-h-fit lg:static ${
                            menuOpen ? 'top-[90px] bg-white/95 w-[100%] left-0' : 'top-[-100%] bg-white w-[100%]'
                          }`}>
                        <ul className="flex flex-col lg:flex-row my-5 lg:my-0 text-lg font-semibold">
                            {menuLinks.map((menuLink => (
                                <Link to={menuLink.path} key={menuLink.id} className='hover:bg-red-800 py-3 lg:py-2 px-5 hover:text-white transition hover:duration-700 ease-in-out'> {menuLink.menu}</Link>
                            )))}

                            <button className="bg-red-800 text-white rounded-md px-5 my-2 py-2 lg:hidden" id="resume-btn">My Resume</button>
                        </ul>
                    </nav>

                    <div className="hidden lg:visible lg:flex items-center gap-6">
                        <button className="bg-red-800 rounded-md px-10 py-3 text-white lg:block" id="resume-btn">My Resume</button>
                    </div>

                    <button
                        className="lg:hidden text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out w-48 flex justify-end"
                        id="menu-toggle-btn" onClick={() => setMenuOpen (currentVal => !currentVal)}
                    >
                        <FontAwesomeIcon icon={faBars} className='w-10 h-10' />
                    </button>
                </header>
            </section>
        </>

    )
}


export default Header