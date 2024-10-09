import { Link } from 'react-router-dom';
import comfortImage from '../assets/image/furnitureStore.PNG';
import postSummaries from '../posts.json';


// const projectImages = [
//     {src: '../assets/image/furnitureStore'},
//     {src: '../assets/image/fitnessPage'},
//     {src: '../assets/image/filmFusionPage'},
//     {src: '../assets/image/bundleMobile'}
// ];

function Projects () {
return (
    <>

        <article className="py-5 px-5 flex flex-wrap gap-10 w-[90%] mx-auto font-mono">

            {postSummaries.map((postSummary) => (

                <div key={postSummary.id} className='grow basis-[320px] flex-1 flex flex-col shadow-md rounded-md px-5 py-5 relative bg-white'>
                    <p className='absolute top-0 left-0 px-2 py-1 text-white font-semibold bg-red-800/70'>{ postSummary.category }</p>

                    <img src={comfortImage} alt="" className="w-full h-[185px] flex-1" />

                    <h2 className="font-bold my-3 flex-1">{postSummary.title}</h2>
                    <p className="text-sm text-gray-600 flex-1">{ postSummary.description }</p>
                    <div className="mt-10 flex flex-row gap-3 w-[90%] mx-auto md:w-full flex-1">
                        <Link className="bg-red-800 rounded-full flex items-center justify-center px-4 py-3 text-xs font-semibold flex-1 text-white text-center">Live
                        Preview</Link>

                        <Link to={ postSummary.gitHubPath } className="bg-transparent border-2 border-red-800 rounded-full flex items-center justify-center px-4 py-3 text-xs font-semibold flex-1 text-red-800 text-center">Check
                            on
                            GitHub</Link>
                    </div>

                </div>
            ))}

        </article>

    </>
)
}


export default Projects
