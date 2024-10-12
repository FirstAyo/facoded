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
            <section>
                {randomPosts.map((postContent) => (
                    <div key={postContent.id}>
                        <img src={postContent.image} alt="" className='w-[100%]' />
                        <Link><h2>{postContent.title}</h2></Link>
                    </div>
                ))}
            </section>
        </>
    )
}

export default SinglePostSideBar
