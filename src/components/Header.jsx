

function Header() {
    return (

        <>
            <section className="shadow-md w-[100%]">
                <header
                    className="flex justify-between items-center w-[90%] mx-auto py-5 text-black lg:sticky lg:top-3">
                    <h1 className="text-red-900 font-bold text-2xl">FaCoded</h1>

                    <nav
                        className="border-[#FFDBD9] border-2 lg:border-none nav-links duration-500 absolute top-[-100%] w-[80.1%] lg:w-auto min-h-[35vh] mx-auto flex items-center px-5 lg:min-h-fit lg:static">
                        <ul className="flex flex-col gap-6 lg:flex-row justify-between lg:gap-10 my-5 lg:my-0 text-lg font-semibold">
                            <a href="index.html">Home</a>
                            <a href="#">My Projects</a>
                            <a href="about.html">About</a>
                            <a href="#">Contact</a>
                            <a href="./dashboard/dashboard.html">Dashboard</a>
                            <button className="bg-red-950 rounded-full px-5 py-2 lg:hidden" id="resume-btn">My Resume</button>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-6">
                        <button className="bg-red-900 rounded-md px-10 py-3 text-white lg:block" id="resume-btn">My Resume</button>
                    </div>
                </header>
            </section>
        </>

    )
}


export default Header