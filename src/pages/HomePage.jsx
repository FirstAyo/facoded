import Header from "../components/Header"
import Hero from "../components/Hero"
import MeetMe from "../components/MeetMe"
import HomePageProjects from "../components/Projects"
import SearchInput from "../components/SearchInput"
import SkillsProficiency from "../components/SkillsProficiency"

function HomePage() {
    return (
        <>
            <section className="w-[90%] mx-auto">
                <Header />
                <SearchInput />
                <Hero />
                <HomePageProjects />
                <MeetMe />
                <SkillsProficiency />
            </section>
        </>
    )
}

export default HomePage