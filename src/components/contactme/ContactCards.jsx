import email from '../../assets/image/email.png';
import gitHub from '../../assets/image/github.png';
import linkedin from '../../assets/image/linkedin.png';

function ContactCards() {

    const dataItems = [
        {
            "id": "1",
            "title": "Email",
            "icon": email,
            "description": "Reach out to me via email for any inquiries, collaborations or questions"
        },

        {
            "id": "2",
            "title": "GitHub",
            "icon": gitHub,
            "description": "Check out my GitHub to see my latest projects and contribution to open-source work"
        },

        {
            "id": "3",
            "title": "LinkedIn",
            "icon": linkedin,
            "description": "Connect with me on LikedIn to view my professional profile"
        }
    ]

    return (
        <>

            <section className='flex flex-col lg:flex-row gap-5 w-[90%] mx-auto mt-10 mb-20 font-mono'>

                {dataItems.map((dataItem) => (
                    <div  key={ dataItem.id } className='flex-1 flex items-center gap-5 py-5 rounded-md px-5 bg-white shadow-2xl'>
                        <div className='w-20 h-10 bg-white flex items-center justify-center rounded-md shadow-2xl border-2 border-gray-500'>
                        <img src={ dataItem.icon } alt= { dataItem.title } className='w-8 h-8 p-1' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-semibold'>{ dataItem.title }</h1>
                            <p> { dataItem.description }</p>
                        </div>
                    </div>
                ))}

            </section>

        </>
    )
}

export default ContactCards