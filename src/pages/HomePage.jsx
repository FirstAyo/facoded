import FormInput from "../components/FormInput"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MeetMe from "../components/MeetMe"
import Projects from "../components/Projects"
import SearchInput from "../components/SearchInput"
import SkillsProficiency from "../components/SkillsProficiency"

function HomePage() {
    return (
        <>
            <section className="w-[90%] mx-auto">
                <Header />
                <SearchInput />
                <Hero />
                <Projects />
                <MeetMe />
                <SkillsProficiency />
                <FormInput />
            </section>
        </>
    )
}

export default HomePage