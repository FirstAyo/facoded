import Footer from "../components/Footer"
// import ProjectHeader from "../components/myprojects/ProjectHeader"
import SearchInput from "../components/SearchInput"
// import SinglePosts from "../components/singleposts/SinglePosts"
import SinglePostSideBar from "../components/singleposts/SinglePostSideBar"
import { useParams } from 'react-router-dom';
import postData from '../posts.json';
import Header from "../components/Header";

function SinglePost() {

    const { id } = useParams();
    const postId = parseInt(id, 10);

    const posts = postData.find(function (post) {
        return post.id === postId;
    });

    if (!posts) {
        return <div>Post not found</div>;
    }

    const paragraphs = posts.post;

    return (
        <>

            <Header />
            <SearchInput />

            {/* This is the code that renders the single posts from the json file. I took it from the singleposts components. i would love for it to be in its own component and pass the postId as props but I will work on that on a later date */}

            <div className="w-[95%] mx-auto flex flex-col gap-5 lg:flex-row my-10">
                <div className="lg:w-[70%] shadow-2xl">
                    <section className='px-5 py-3 font-mono'>

                        <div className='w-[95%] mx-auto border-b border-red-800'>
                            <p className='text-red-800 font-semibold py-1'> {posts.category} </p>
                            <h2 className='text-xl tracking-wide font-semibold py-2 md:text-3xl'>{posts.title}</h2>
                        </div>

                        <div className='w-[95%] mx-auto h-64 md:h-96'>
                            <img src={posts.image} alt="" className='py-5 w-[100%] h-[100%]' />
                        </div>

                        <div className='w-[95%] mx-auto'>
                            {paragraphs.map(function (paragraph, index) {
                                return <p key={index} className='py-2'>{paragraph}</p>;
                            })}
                        </div>
                    </section>
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