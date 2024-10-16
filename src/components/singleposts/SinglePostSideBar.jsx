import { Link } from 'react-router-dom';
import postContents from '../../posts.json';

function SinglePostSideBar() {

    let uniqueRandomNumbers = new Set();

    while (uniqueRandomNumbers.size < 5) {
        let randomIndex = Math.floor(Math.random() * postContents.length);
        uniqueRandomNumbers.add(randomIndex);
    }

    const randomPosts = Array.from(uniqueRandomNumbers).map((index) => postContents[index]);

    return (
        <>

            <h1 className='font-mono text-3xl text-center font-semibold py-5 text-red-800 tracking-wider'>Random Posts</h1>
            <section className='font-mono flex flex-col md:grid md:grid-cols-2 lg:grid-cols-1 gap-8'>
                {randomPosts.map((postContent) => (
                    <div key={postContent.id} className='flex flex-col shadow-xl border-red-800 px-4 py-3'>
                        <img src={postContent.image} alt="" className='w-[100%] h-52' />
                        <p className='text-red-800 font-semibold w-[40%] py-2'>{postContent.category}</p>
                        <h2 className='text-xl font-semibold py-1'>{postContent.title}</h2>
                        <Link>Read More...</Link>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SinglePostSideBar
