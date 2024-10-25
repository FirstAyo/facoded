import Footer from "../components/Footer"
// import ProjectHeader from "../components/myprojects/ProjectHeader"
import SearchInput from "../components/SearchInput"
// import SinglePosts from "../components/singleposts/SinglePosts"
import SinglePostSideBar from "../components/singleposts/SinglePostSideBar"
import { useParams, Link } from 'react-router-dom';
import postData from '../posts.json';
import Header from "../components/Header";
import SinglePosts from "../components/singleposts/SinglePosts";
// import { useState } from 'react';

function SinglePost() {

    // const [nextPost, setNextPost] = useState(0);
    // const [prevPost, setPrevPost] = useState(0);
    // const history = useHistory(); // Use history for navigation(this is throwing and error, try and fix)
    const { id } = useParams();
    const postId = parseInt(id, 10);

    // const posts = postData.find(function (post) {
    //     return post.id === postId;
    // });

    const post = postData.find(post => post.id === postId);

    if (!post) {
        return <div>Post not found</div>;
    }

    // function to get the next post from the json file
    // function getNextPost() {
    //     // nextPostId = post.id + 1;
    //     const nextPostId = postData.find(post => post.id === postId).nextPostId;
    //     setNextPost(nextPostId);

    // }

    // Function to try and navigate to the next post
    // const getNextPost = () => {
    //     const nextPostId = postId + 1; // Calculate the next post ID
    //     const nextPost = postData.find(post => post.id === nextPostId); // Check if the next post exists

    //     if (nextPost) {
    //         history.push(`/single-post/${nextPostId}`); // Navigate to the next post
    //         console.log(nextPost)
    //     } else {
    //         alert("This is the last post."); // Handle case where there is no next post
    //     }
    // };
    // const paragraphs = posts.post;

    function viewLiveButton() {
        alert("This webpage is not hosted yet. I am working on hosting it soon. Please come back and click this button in a few days time. Thank you")
    }

    return (
        <>

            <Header />
            <SearchInput />

            {/* This is the code that renders the single posts from the json file. I took it from the singleposts components. i would love for it to be in its own component and pass the postId as props but I will work on that on a later date */}

            <div className="w-[95%] mx-auto flex flex-col gap-5 lg:flex-row my-10 font-mono">
                <div className="lg:w-[70%] shadow-2xl">
                    <SinglePosts post={post} />

                    <div className="w-[90%] mx-auto my-10 flex gap-3 flex-col md:flex-row">
                        <Link onClick={viewLiveButton} className="flex-1 text-center py-5 rounded-sm bg-red-800 text-white text-xl font-semibold">Live View</Link>
                        <Link to={post.gitHubPath} className="flex-1 text-center py-5 rounded-sm bg-transparent border-2 border-red-800 text-red-800 text-xl font-semibold">View on GitHub</Link>
                    </div>

                    <div className="w-[90%] mx-auto flex justify-between mb-5 py-2 lg:mb-0 lg:py-0">
                        <Link className="text-xl font-semibold hover:underline">Prev</Link>
                        <Link className="text-xl font-semibold hover:underline">Next</Link>
                    </div>
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