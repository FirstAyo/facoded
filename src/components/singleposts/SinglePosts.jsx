import featuredImg from '../../../public/fitnessPage.jpeg'

function SinglePosts() {
  return (
    <>
    <section className=''>

        <div>
            <p>Category</p>
            <h2>This is the Heading for the single post</h2>
        </div>

        <div>
            <img src={ featuredImg } alt="" />
        </div>

        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id non illum explicabo culpa quo, neque adipisci dolore eligendi aliquid delectus assumenda ad asperiores sequi, nostrum quam. Provident laborum rerum quod!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id non illum explicabo culpa quo, neque adipisci dolore eligendi aliquid delectus assumenda ad asperiores sequi, nostrum quam. Provident laborum rerum quod!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id non illum explicabo culpa quo, neque adipisci dolore eligendi aliquid delectus assumenda ad asperiores sequi, nostrum quam. Provident laborum rerum quod!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id non illum explicabo culpa quo, neque adipisci dolore eligendi aliquid delectus assumenda ad asperiores sequi, nostrum quam. Provident laborum rerum quod!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id non illum explicabo culpa quo, neque adipisci dolore eligendi aliquid delectus assumenda ad asperiores sequi, nostrum quam. Provident laborum rerum quod!</p>
        </div>
    </section>
    </>
  )
}

export default SinglePosts