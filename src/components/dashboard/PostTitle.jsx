import DashboardButtons from "./DashboardButtons"

function PostTitle() {
    return (
        <>

            <section className="font-mono bg-white my-5 py-5 border border-b-gray-400">

                <div className="flex gap-3 items-center w-[90%] mx-auto justify-center">
                    <div className="flex gap-3 items-center">
                        <h1 className="text-red-800 text-lg font-semibold">Post Title</h1>
                        <input type="text" className="border border-gray-400 w-96 h-9" />
                    </div>

                    <div className="flex gap-3">
                        <DashboardButtons text ="Publish" />
                        <DashboardButtons text ="Save" />
                        <DashboardButtons text ="Preview" />
                        <DashboardButtons text ="Close" />
                    </div>
                </div>

            </section>

        </>
    )
}

export default PostTitle