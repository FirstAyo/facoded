import { useEffect, useState } from 'react';
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import SearchInput from "../components/SearchInput"
import posts from "../posts.json";

function MyProjects() {

    const [postEnd, setPostEnd] = useState(0);

    useEffect(() => {
        setPostEnd(posts.length);
    }, []);

    return (
        <>

            <section className="bg-gray-50">
                <Header />
                <SearchInput />
                <Projects postStart = {0} postEnd = {postEnd} />
                <Footer />
            </section>

        </>
    )
}

export default MyProjects