import bioPhoto from '../../assets/image/Festus.JPG'
function MyBio() {
    return (

        <>

            {/* <!-- this is the about me section --> */}
            <div
                className="w-[90%] mt-11 pb-14 flex flex-col justify-center items-center py-3 text-gray-700 mx-auto font-mono">
                <div className="mt-7 w-[100%] mx-auto">
                    <img src={ bioPhoto } alt=""
                        className="w-64 h-72 rounded-md border-8 border-t-gray-500 border-l-gray-500 border-b-red-800 border-r-red-800 mx-5 lg:float-right mb-1" />
                    <div>
                        <p>I am Festus Ayomike, a passionate software engineer dedicated to crafting
                            exceptional digital solutions. With a strong foundation in React JS, JavaScript, HTML &
                            CSS,
                            Tailwind CSS, Cyber Security, and Next JS. I thrive on turning ideas into reality
                            through code.
                        </p><br />

                        <p>Driven by a relentless pursuit of excellence, I approach each project with precision and
                            creativity, ensuring that every line of code serves a purpose. My goal is not just to
                            meet
                            expectations but to exceed them, delivering innovative and secure web applications that
                            make
                            a lasting impact.</p> <br />

                        <p>Beyond my technical skills, I believe in the power of collaboration and communication. I
                            value transparency and open dialogue, working closely with clients to understand their
                            needs
                            and deliver solutions that align with their vision.</p> <br />

                        <p>Whether you are a business looking to enhance your online presence or an individual
                            seeking to
                            bring your ideas to life, I am here to help. Let us collaborate and create something
                            extraordinary together.</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default MyBio