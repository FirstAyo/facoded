import gitHubIcon from '../assets/image/github.png';
import linkedInIcon from '../assets/image/linkedin.png';
import emailIcon from '../assets/image/email.png';
import { Link } from 'react-router-dom';

function Footer() {

    const socialIcons = [
        {
            "id": "1",
            "image": gitHubIcon,
            "url": "https://github.com/FirstAyo"
        },
        {
            "id": "2",
            "image": emailIcon,
            "url": "mailto:firstayomike@gmail.com?"
        },
        {
            "id": "3",
            "image": linkedInIcon,
            "url": "https://www.linkedin.com/in/firstayo/"
        }
    ]

    return (

        <>

            <footer className="border-t-2 border-red-800 font-mono w-[95%] mx-auto">

                <p className="text-lg font-semibold text-gray-600 text-center py-3 w-[90%] mx-auto">2024. All
                    Rights Reserved. DevAyo</p>
                <div className="flex items-center justify-center gap-5 w-[90%] mx-auto pb-10 pt-2">
                    {socialIcons.map((socialIcon) => (
                        <div key={socialIcon.id} className="bg-white w-[50px] h-[50px] rounded-full shadow-md border-2 border-gray-700">
                            <Link to={socialIcon.url}>
                                <img src={socialIcon.image} alt="" className="w-full p-3" /></Link>
                        </div>
                    ))}

                </div>
            </footer>

        </>

    )
}

export default Footer
