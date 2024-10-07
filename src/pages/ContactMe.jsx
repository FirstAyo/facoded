import ContactCards from "../components/contactme/ContactCards"
import Footer from "../components/Footer"
import FormInput from "../components/FormInput"
import Header from "../components/Header"

function ContactMe() {
    return (
        <>
            <section>
                <Header />
                <div className="flex w-[90%] items-center mx-auto font-mono">
                    <div className="flex-1 pt-14 flex flex-col gap-5">
                        <h1 className="text-4xl">Contact Me</h1>
                        <p className="text-xl">Ready to start your next project or have any questions? Feel free to reach out to me.</p>
                        
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