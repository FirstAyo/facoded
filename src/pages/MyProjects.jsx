import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import SearchInput from "../components/SearchInput"

function MyProjects() {
    return (
        <>

            <section className="bg-gray-50">
                <Header />
                <SearchInput />
                <Projects postStart = {0} postEnd = {9} />
                <Footer />
            </section>

        </>
    )
}

export default MyProjects