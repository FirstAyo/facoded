import Header from "../components/Header"
import Hero from "../components/Hero"
import MeetMe from "../components/MeetMe"
import HomePageProjects from "../components/Projects"
import SearchInput from "../components/SearchInput"

function HomePage() {
    return (
        <>
            <section className="w-[90%] mx-auto">
                <Header />
                <SearchInput />
                <Hero />
                <HomePageProjects />
                <MeetMe />
            </section>
        </>
    )
}

export default HomePage