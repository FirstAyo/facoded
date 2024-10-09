
function FormInput() {
    return (
        <>

            {/* <!-- form section starts here --> */}
            <div className="pt-14 w-[90%] mx-auto mb-10">
                <form action="" className="w-[100%] text-black bg-white shadow-lg border border-red-800 font-mono">
                    <h1 className="text-2xl py-5 w-[90%] mx-auto">Get in touch</h1>
                    <p className="text-sm text-gray-500 w-[90%] mx-auto">Ready to start your next project or
                        have any questions? Feel free to reach out to me using the form below.</p>
                    <div className="w-[90%] mx-auto">
                        <input type="text" placeholder="Name"
                            className="bg-transparent border-b-2 border-gray-500 my-5 py-1 px-3 w-[95%]" />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <input type="text" placeholder="Email Address"
                            className="bg-transparent border-b-2 border-gray-500 my-5 py-1 px-3 w-[95%]" />
                    </div>
                    <div className="w-[90%] mx-auto">

                        <textarea name="" id="" placeholder="Leave a Message"
                            className="bg-transparent border-2 border-gray-500 my-5 py-1 px-3 w-[95%] h-36"></textarea>
                        {/* <!-- <input type="text" placeholder="Name"
                                className="bg-transparent border-b-2 border-gray-500 my-5 py-1 w-[95%]"/> --> */}
                    </div>

                    <div className="w-[90%] mx-auto items">
                        <button className="bg-red-800 rounded-full text-white px-1 py-2 text-lg font-semibold flex-1 w-[95%] mb-10">Send</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default FormInput