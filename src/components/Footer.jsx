import gitHubIcon from '../assets/image/github.png';
import linkedInIcon from '../assets/image/linkedin.png';
import emailIcon from '../assets/image/email.png';

function Footer() {
    return (

        <>

            <footer className="border-t-2 border-red-800 font-mono">

                <p className="text-lg font-semibold text-gray-600 text-center py-3 w-[90%] mx-auto">2024. All
                    Rights Reserved. DevAyo</p>
                <div className="flex items-center justify-center gap-5 w-[90%] mx-auto pb-10 pt-2">
                    <div className="bg-white w-[50px] h-[50px] rounded-full shadow-md border-2 border-gray-700">
                        <img src={ emailIcon } alt="" className="w-full p-3" />
                    </div>
                    <div className="bg-white w-[50px] h-[50px] rounded-full shadow-md border-2 border-gray-700">
                        <img src= { linkedInIcon } alt="" className="w-full p-3" />
                    </div>
                    <div className="bg-white w-[50px] h-[50px] rounded-full shadow-md border-2 border-gray-700">
                        <img src= { gitHubIcon } alt="" className="w-full p-3" />
                    </div>
                </div>
            </footer>

        </>

    )
}

export default Footer
