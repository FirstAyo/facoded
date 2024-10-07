import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import gitHub from '../../assets/image/github.png'
function AboutCarousel() {
    return (
        <>
            {/* <!-- slider section --> */}
            <section className="w-[90%] mx-auto font-mono py-10">
                <div className="flex flex-col md:flex-row items-center justify-center w-[70%] mx-auto gap-5">

                <FontAwesomeIcon
                    icon={faChevronLeft}
                    // onClick={handlePrevClick}
                    className="carousel-prev mr-10 text-red-800 text-2xl"
                />

                    <img src={gitHub} alt="" className="bg-white rounded-full border-2 border-red-800 w-[100px]" />
                    <button
                        className="bg-white text-red-800 rounded-2xl w-32 h-12 text-center border-2 border-red-800 text-lg font-extralight md:px-1 md:py-2">GitHub</button>

                        <FontAwesomeIcon
                        icon={faChevronRight}
                        // onClick={handleNextClick}
                        className="carousel-next ml-10 text-red-800 text-2xl"
                    />

                </div>
            </section>
        </>
    )
}

export default AboutCarousel
