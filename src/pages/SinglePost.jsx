import ProjectHeader from "../components/myprojects/ProjectHeader"
import SinglePosts from "../components/singleposts/SinglePosts"
import SinglePostSideBar from "../components/singleposts/SinglePostSideBar"

function SinglePost() {
    return (
        <>

            <ProjectHeader />
            <div className="w-[95%] mx-auto flex">
                <div className="w-[70%]">
                    <SinglePosts />
                </div>
                <div className="w-[30%]">
                    <SinglePostSideBar />
                </div>
            </div>
        </>
    )
}

export default SinglePost