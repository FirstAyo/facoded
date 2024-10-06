import profileImage from '../assets/image/Festus.JPG';

function MeetMe() {

    const aboutMeMEssage = " I'm a passionate software engineer dedicated to crafting exceptional digital solutions. With a strong foundation in React JS, JavaScript, HTML & CSS, Tailwind CSS, Cyber Security, and Next JS, I thrive on turning ideas into reality through code.";

    return (
        <>

            {/* <!-- Meet me section --> */}
            <div className="w-[80%] mx-auto my-14">
                <h1 className="text-center font-mono text-2xl">Meet Me</h1>
                <p className="my-5 text-gray-400 text-center"> { aboutMeMEssage } </p>
                <div
                    className="w-52 h-60 rounded-md border-8 border-t-gray-500 border-l-gray-500 border-b-red-800 border-r-red-800 mx-auto">
                    <img src={ profileImage } alt="" className="w-full h-full rounded-md" />
                </div>
            </div>

        </>
    )
}

export default MeetMe