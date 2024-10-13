
function SearchInput() {
    return (

        <>
            <div className="flex mt-20 w-[90%] lg:w-[50%] mx-auto font-mono font-semibold">
                <input type="text" className="shadow-lg border border-red-900 rounded-l py-1 px-5 w-[70%] h-12" id="intro-box"/>
                <button className="text-white bg-red-800 w-[30%] rounded-r shadow-lg">Search</button>
            </div>
        </>
    )
}

export default SearchInput