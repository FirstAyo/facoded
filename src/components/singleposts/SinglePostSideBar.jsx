import { Link } from 'react-router-dom';
import postContents from '../../posts.json';

function SinglePostSideBar() {
  return (
    <>
    <section>
        {postContents.map ((postContent) => (
            <div key={postContent.id}>
                <img src= {postContent.image} alt="" />
                <Link><h2>{postContent.title}</h2></Link>
            </div>
        ))}
    </section>
    </>
  )
}

export default SinglePostSideBar
