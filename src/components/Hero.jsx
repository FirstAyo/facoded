
function Hero() {

    const heroMessage = "of <code>"
    return (
        <>

            <div className="pt-5 pb-20 w-[100%] font-mono">
                <h2 className="text-2xl md:text-4xl py-5 font-semibold w-[90%] md lg:w-[50%] mx-auto text-center md:tracking-wider" id="hero-caption">I build innovative <br /> solutions with each line <br /> {heroMessage}
                </h2>
            </div>

        </>
    )
}

export default Hero
