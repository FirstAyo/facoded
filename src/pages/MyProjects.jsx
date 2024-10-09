import Footer from "../components/Footer"
import ProjectHeader from "../components/myprojects/ProjectHeader"
import Projects from "../components/Projects"

function MyProjects() {
    return (
        <>

            <section className="bg-gray-50">
                <ProjectHeader />
                <Projects />
                <Footer />
            </section>

        </>
    )
}

export default MyProjects