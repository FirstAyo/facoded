// import featuredImg from '../../../public/fitnessPage.jpeg'
import postData from '../../posts.json';
function SinglePosts(props) {

    const posts = postData.find(function(posts) {
        return posts.id === props.postsId;    });

    if (!posts) {
        return <div>Post not found</div>;
    }

    const paragraphs = posts.post;

  return (
    <>
    <section className='px-5 py-3'>

        <div>
            <p> { posts.category } </p>
            <h2>{posts.title}</h2>
        </div>

        <div>
            <img src={ posts.image } alt="" />
        </div>

        <div>
        {paragraphs.map(function(paragraph, index) {
        return <p key={index} className='py-5'>{paragraph}</p>;
      })}
        </div>
    </section>
    </>
  )
}

export default SinglePosts