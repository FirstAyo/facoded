import comfortImage from '../assets/image/furnitureStore.PNG';
import postSummaries from '../posts.json';


function Projects() {

    // const projectImages = [
    //     {src: '../assets/image/furnitureStore'},
    //     {src: '../assets/image/fitnessPage'},
    //     {src: '../assets/image/filmFusionPage'},
    //     {src: '../assets/image/bundleMobile'}
    // ];
    
    return (
        <>

                <article className="py-5 px-5 rounded-xl flex flex-wrap gap-10 w-[90%] mx-auto">

                    {postSummaries.map((postSummary) => (

                        <div key={postSummary.id} className='grow basis-[320px] flex-1 flex flex-col border-2 border-red-900 rounded-md px-5 py-5'>

                            <img src={comfortImage} alt="" className="w-full h-[185px] flex-1" />

                            <h2 className="font-bold my-3 flex-1">{postSummary.title}</h2>
                            <p className="text-sm text-gray-300 flex-1">{postSummary.description}</p>
                            <div className="mt-10 flex flex-row gap-3 w-[90%] mx-auto md:w-full flex-1">
                                <button className="bg-red-900 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2 text-white">Live
                                    Preview</button>
                                <button
                                    className="bg-transparent border-2 rounded-full px-4 py-2 text-xs flex-1 md:px-1 md:py-2">Check
                                    on
                                    GitHub</button>
                            </div>

                        </div>
                    ))}

                </article>

        </>
    )
}

export default Projects
