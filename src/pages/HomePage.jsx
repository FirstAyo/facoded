import Header from "../components/Header"
import Hero from "../components/Hero"
import SearchInput from "../components/SearchInput"

function HomePage() {
    return (
        <>
            <section className="">
                <Header />
                <SearchInput />
                <Hero />
            </section>
        </>
    )
}

export default HomePage