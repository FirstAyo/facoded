import { Link } from 'react-router-dom';
import postContents from '../../posts.json';

function SinglePostSideBar() {

    const randomPosts = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * postContents.length);
        randomPosts.push(postContents[randomIndex]);
    }
    return (
        <>
            <section className='font-mono flex flex-col gap-5'>
                {randomPosts.map((postContent) => (
                    <div key={postContent.id} className='flex flex-col border border-red-800 px-4 py-3'>
                        <img src={postContent.image} alt="" className='w-[100%] h-52' />
                        <p className='text-red-800 font-semibold w-[40%] py-2'>{ postContent.category }</p>
                        <h2 className='text-xl font-semibold py-1'>{postContent.title}</h2>
                        <Link>Read More...</Link>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SinglePostSideBar
