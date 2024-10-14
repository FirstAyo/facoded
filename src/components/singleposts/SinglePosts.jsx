// import featuredImg from '../../../public/fitnessPage.jpeg'
import { useParams } from 'react-router-dom';
import postData from '../../posts.json';

function SinglePosts() {

    const { id } = useParams();
    const postId = parseInt(id, 10);

    const posts = postData.find(function(post) {
        return post.id === postId;    
    });

    if (!posts) {
        return <div>Post not found</div>;
    }

    const paragraphs = posts.post;

  return (
    <>
   
    <section className='px-5 py-3 font-mono'>

        <div className='w-[95%] mx-auto border-b border-red-800'>
            <p className='text-red-800 font-semibold py-1'> { posts.category } </p>
            <h2 className='text-xl tracking-wide font-semibold py-2 md:text-3xl'>{posts.title}</h2>
        </div>

        <div className='w-[95%] mx-auto h-64 md:h-96'>
            <img src={ posts.image } alt="" className='py-5 w-[100%] h-[100%]' />
        </div>

        <div className='w-[95%] mx-auto'>
        {paragraphs.map(function(paragraph, index) {
        return <p key={index} className='py-2'>{paragraph}</p>;
      })}
        </div>
    </section>
    </>
  )
}

export default SinglePosts