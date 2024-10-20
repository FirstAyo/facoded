import ContactCards from "../components/contactme/ContactCards"
import Footer from "../components/Footer"
import FormInput from "../components/FormInput"
import Header from "../components/Header"
import gitHub from '../assets/image/github.png'
import linkedIn from '../assets/image/linkedin.png'
import email from '../assets/image/email.png'
import { Link } from "react-router-dom"

function ContactMe() {

    const socialIcons = [
        {
            "id": "1",
            "image": gitHub,
            "url": "https://github.com/FirstAyo"
        },
        {
            "id": "2",
            "image": email,
            "url": "mailto:firstayomike@gmail.com?"
        },
        {
            "id": "3",
            "image": linkedIn,
            "url": "https://www.linkedin.com/in/firstayo/"
        }
    ]

    return (
        <>
            <section className="bg-gray-50">
                <Header />
                <div className="flex flex-col lg:flex-row w-[90%] items-center mx-auto font-mono">
                    <div className="flex-1 pt-14 flex flex-col gap-5">
                        <h1 className="text-4xl text-center lg:text-start">Contact Me</h1>
                        <p className="text-xl text-center lg:text-start">Ready to start your next project or have any questions? Feel free to reach out to me.</p>

                        <div className="flex items-center justify-center lg:justify-start gap-5 w-[100%] pb-10 pt-2">
                            {socialIcons.map((socialIcon => (
                                <div className="bg-white w-[50px] h-[50px] rounded-full shadow-md border-2 border-gray-700" key={socialIcon.id}>
                                    <Link to={ socialIcon.url }>
                                        <img src={socialIcon.image} alt="" className="w-full p-3" />
                                    </Link>
                                </div>
                            )))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <FormInput />
                    </div>
                </div>
                <ContactCards />
                <Footer />
            </section>

        </>
    )
}

export default ContactMe