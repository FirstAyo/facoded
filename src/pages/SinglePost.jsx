import ProjectHeader from "../components/myprojects/ProjectHeader"
import SinglePosts from "../components/singleposts/SinglePosts"
import SinglePostSideBar from "../components/singleposts/SinglePostSideBar"

function SinglePost() {
    return (
        <>

            <ProjectHeader />
            <div className="w-[95%] mx-auto flex flex-col lg:flex-row my-10">
                <div className="lg:w-[70%]">
                    <SinglePosts />
                </div>
                <div className="lg:w-[30%]">
                    <SinglePostSideBar />
                </div>
            </div>
        </>
    )
}

export default SinglePost