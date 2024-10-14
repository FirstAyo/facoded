import Footer from "../components/Footer"
import ProjectHeader from "../components/myprojects/ProjectHeader"
import SearchInput from "../components/SearchInput"
import SinglePosts from "../components/singleposts/SinglePosts"
import SinglePostSideBar from "../components/singleposts/SinglePostSideBar"

function SinglePost() {
    return (
        <>

            <ProjectHeader />
            <SearchInput />
            <div className="w-[95%] mx-auto flex flex-col gap-5 lg:flex-row my-10">
                <div className="lg:w-[70%] shadow-2xl">
                    <SinglePosts postsId={2} />
                </div>
                <div className="lg:w-[30%] shadow-2xl">
                    <SinglePostSideBar />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SinglePost