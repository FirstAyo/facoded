import AboutCarousel from "../components/aboutme/AboutCarousel"
import MyBio from "../components/aboutme/MyBio"
import Footer from "../components/Footer"
import FormInput from "../components/FormInput"
import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import SkillsProficiency from "../components/SkillsProficiency"

function AboutMe() {
    return (

        <>
            <Header />
            <SearchInput />
            <MyBio />
            <AboutCarousel />
            <SkillsProficiency />
            <FormInput />
            <Footer />
        </>
    )
}

export default AboutMe
