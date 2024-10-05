
function HomePageProjects() {
    return (
        <>

            <section className="bg-black text-white">

                <h1 className="text-center py-10 text-3xl font-mono">My Projects</h1>


                {/* <!-- this section is for the main content to display projects --> */}
                <main>
                    {/* <!-- div for the card sections and articles --> */}
                    <div className="flex flex-col gap-5">
                        {/* <!-- div for the first card section of the page --> */}
                        <div className="grid md:grid-cols-3 gap-2 w-[90%] mx-auto">
                            {/* <!-- card 1 --> */}
                            <article className="border-2 border-[#FFDBD9] py-5 px-5 bg-[#1c1c1c] rounded-xl flex-1">
                                <img src="../img/furnitureStore.png" alt="" className="w-[680px] h-[185px]" />
                                <h2 className="font-bold my-3">Furniture store Landing page</h2>
                                <p className="text-sm text-gray-300">Responsive HTML/CSS layout for online furniture store.
                                    HTML5,
                                    CSS3 (SCSS)</p>
                                <div className="mt-10 flex flex-row gap-3 w-[90%] mx-auto md:w-full">
                                    <button className="bg-red-950 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Live
                                        Preview</button>
                                    <button
                                        className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                        on
                                        GitHub</button>
                                </div>
                            </article>

                            {/* <!-- card 2 --> */}
                            <article className="border-2 border-[#FFDBD9] py-5 px-5 bg-[#1c1c1c] rounded-xl flex-1">
                                <img src="../img/fitnessPage.jpeg" alt="" className="w-[480px] h-[185px]" />
                                <h2 className="font-bold my-3">Fitness Web Landing Page</h2>
                                <p className="text-sm text-gray-300">Responsive HTML/CSS layout for online store of a Fitness
                                    Website HTML5, CSS3 (SCSS)</p>
                                <div className="mt-10 flex flex-row gap-3 w-[90%] mx-auto md:w-full">
                                    <button className="bg-red-950 rounded-full px-4 py-1 text-xs flex-1 md:px-1 md:py-2">Live
                                        Preview</button>
                                    <button
                                        className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                        on
                                        GitHub</button>
                                </div>
                            </article>

                            {/* <!-- card 3 --> */}
                            <article className="border-2 border-[#FFDBD9] py-5 px-5 bg-[#1c1c1c] rounded-xl flex-1">
                                <img src="../img/furnitureStore.png" alt="" className="w-[480px] h-[185px]" />
                                <h2 className="font-bold my-3">Furniture store Landing page</h2>
                                <p className="text-sm text-gray-300">Responsive HTML/CSS layout for online furniture store.
                                    HTML5,
                                    CSS3 (SCSS)</p>
                                <div className="mt-10 flex flex-row gap-3 w-[90%] mx-auto md:w-full">
                                    <button className="bg-red-950 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Live
                                        Preview</button>
                                    <button
                                        className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                        on
                                        GitHub</button>
                                </div>
                            </article>
                        </div>

                        {/* <!-- div for the second card section of the page --> */}
                        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-2 w-[90%] mx-auto">
                            {/* <!-- card 4 --> */}
                            <article className="border-2 border-[#FFDBD9] py-5 px-5 bg-[#1c1c1c] rounded-xl flex-1">
                                <img src="../img/bundleMobile.jpeg" alt="" className="w-[480px] h-[185px]" />
                                <h2 className="font-bold my-3">CV/Resume Builder Mobile App</h2>
                                <p className="text-sm text-gray-300">Responsive HTML/CSS layout for landing page for front-end
                                    developer. HTML5, CSS3 (SCSS)</p>
                                <div className="mt-14 mb-3 flex flex-row gap-3 w-[90%] mx-auto md:w-full">
                                    <button className="bg-red-950 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Live
                                        Preview</button>
                                    <button
                                        className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                        on
                                        GitHub</button>
                                </div>
                            </article>

                            {/* <!-- card 5 --> */}
                            <article className="border-2 border-[#FFDBD9] py-5 px-5 bg-[#1c1c1c] rounded-xl flex-1">
                                <img src="../img/filmFusionPage.jpeg" alt="" className="w-[480px] h-[185px]" />
                                <h2 className="font-bold my-3">Online Movie Stream Website page</h2>
                                <p className="text-sm text-gray-300">Responsive HTML/CSS layout for The Venus project. HTML5,
                                    CSS3
                                    (SCSS)</p>
                                <div className="mt-14 mb-3 flex flex-row gap-3 w-[90%] mx-auto md:w-full">
                                    <button className="bg-red-950 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Live
                                        Preview</button>
                                    <button
                                        className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                        on
                                        GitHub</button>
                                </div>
                            </article>

                            {/* <!-- card 6 --> */}
                            <article className="border-2 border-[#FFDBD9] py-5 px-5 bg-[#1c1c1c] rounded-xl flex-1">
                                <img src="../img/bundleMobile.jpeg" alt="" className="w-[480px] h-[185px]" />
                                <h2 className="font-bold my-3">CV/Resume Builder Mobile App</h2>
                                <p className="text-sm text-gray-300">Responsive HTML/CSS layout for landing page for front-end
                                    developer. HTML5, CSS3 (SCSS)</p>
                                <div className="mt-14 mb-3 flex flex-row gap-3 w-[90%] mx-auto md:w-full">
                                    <button className="bg-red-950 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Live
                                        Preview</button>
                                    <button
                                        className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                        on
                                        GitHub</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </main>

                {/* <!-- Meet me section --> */}
                <div className="w-[80%] mx-auto my-14">
                    <h1 className="text-center font-mono text-2xl">Meet Me</h1>
                    <p className="my-5 text-gray-400"> I am a passionate software engineer dedicated to crafting exceptional
                        digital solutions. With a strong foundation in React JS, JavaScript, HTML & CSS, Tailwind CSS,
                        Cyber
                        Security, and Next JS, I thrive on turning ideas into reality through code.</p>
                    <div
                        className="w-52 h-60 rounded-md border-8 border-t-white border-l-white border-b-red-950 border-r-red-950 mx-auto">
                        <img src="../img/filmFusionPage.jpeg" alt="" className="w-full h-full rounded-md" />
                    </div>
                </div>

                {/* <!-- skills proficiency section --> */}
                <div className="w-[80%] mx-auto py-14">
                    <h1 className="text-center font-mono text-2xl">Skills Proficiency</h1>

                    {/* <!-- skills proficiency percentage section --> */}
                    <div className="flex flex-col gap-7">
                        <div>
                            <p className="text-sm text-gray-300">React JS</p>
                            <div className="w-[100%] bg-gray-600 h-2 rounded-full">
                            </div>
                            <div className="w-[82%] h-2 bg-white rounded-full -mt-2"></div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-300">JavaScript</p>
                            <div className="w-[100%] bg-gray-600 h-2 rounded-full">
                            </div>
                            <div className="w-[75%] h-2 bg-white rounded-full -mt-2"></div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-300">HTML & CSS</p>
                            <div className="w-[100%] bg-gray-600 h-2 rounded-full">
                            </div>
                            <div className="w-[93%] h-2 bg-white rounded-full -mt-2"></div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-300">Tailwind CSS</p>
                            <div className="w-[100%] bg-gray-600 h-2 rounded-full">
                            </div>
                            <div className="w-[95%] h-2 bg-white rounded-full -mt-2"></div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-300">Next JS</p>
                            <div className="w-[100%] bg-gray-600 h-2 rounded-full">
                            </div>
                            <div className="w-[70%] h-2 bg-white rounded-full -mt-2"></div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-300">Cyber Security</p>
                            <div className="w-[100%] bg-gray-600 h-2 rounded-full">
                            </div>
                            <div className="w-[90%] h-2 bg-white rounded-full -mt-2"></div>
                        </div>
                    </div>

                    {/* <!-- form section starts here --> */}
                    <div className="pt-14">
                        <form action="" className="bg-[#1C1C1C] lg:w-[50%]">
                            <h1 className="font-mono text-2xl py-5 w-[90%] mx-auto">Contact</h1>
                            <p className="font-mono text-sm text-gray-400 w-[90%] mx-auto">Ready to start your next project or
                                have any questions? Feel free to reach out to me using the form below.</p>
                            <div className="w-[90%] mx-auto">
                                <input type="text" placeholder="Name"
                                    className="bg-transparent border-b-2 border-gray-500 my-5 py-1 w-[95%]" />
                            </div>
                            <div className="w-[90%] mx-auto">
                                <input type="text" placeholder="Email Address"
                                    className="bg-transparent border-b-2 border-gray-500 my-5 py-1 w-[95%]" />
                            </div>
                            <div className="w-[90%] mx-auto">
                                <textarea name="" id="" placeholder="Leave a Message"
                                    className="bg-transparent border-2 border-gray-500 my-5 py-1 w-[95%] h-36"></textarea>
                                {/* <!-- <input type="text" placeholder="Name"
                                className="bg-transparent border-b-2 border-gray-500 my-5 py-1 w-[95%]"> --> */}
                            </div>

                            <div className="w-[90%] mx-auto items">
                                <button className="bg-red-950 rounded-full px-1 py-2 text-xs flex-1 w-[95%] mb-10">Send</button>
                            </div>
                        </form>
                    </div>

                </div>

            </section>

        </>
    )
}

export default HomePageProjects
