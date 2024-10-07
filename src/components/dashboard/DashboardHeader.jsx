import logo from '../../assets/image/main-logo-transparent.svg';
import PostTitle from './PostTitle';


function DashboardHeader() {

    return (
        <>
            <section className='font-mono'>
                <header>
                    <div>
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt="logo for Fa coded" className='w-20 h-10' />
                            <h1 className='text-red-800 font-bold text-xl'>FaCoded</h1>
                        </div>
                    </div>

                    <div>
                        <PostTitle />
                    </div>
                </header>
            </section>
        </>
    )
}

export default DashboardHeader