import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import gitHub from '../../assets/image/github.png'
import npmImage from '../../assets/image/npm.png'
import vsCode from '../../assets/image/vscode.png'
import sass from '../../assets/image/sass.png'

function AboutCarousel() {

    const data = [
        {
            id: 1,
            title: 'GitHub',
            src: gitHub,
        },
        {
            id: 2,
            title: 'SASS',
            src: sass,
        },
        {
            id: 3,
            title: 'VS Code',
            src: vsCode,
        },
        {
            id: 4,
            title: 'NPM',
            src: npmImage,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % data.length);
        }, 4000); // Switch cards every 4 seconds
        setIntervalId(intervalId);
        return () => clearInterval(intervalId);
    }, [currentIndex, data.length]);

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + data.length) % data.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % data.length);
    };

    return (

        <>
            {/* <!-- slider section --> */}
            <section className="w-[90%] mx-auto font-mono py-10">

                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={handlePrevClick}
                    className="carousel-prev mr-10 text-red-800 text-2xl"
                />


                <div>
                    {data.map((item, index) => (

                        <div key={ item.id } className={`flex flex-col md:flex-row items-center justify-center w-[50%] mx-auto gap-5 ${index === currentIndex ? 'active' : ''}`}>
                            <img src={ item.src } alt="" className="bg-white rounded-full w-[100px]" />
                                <button
                                    className=" text-white bg-[#2F2F2F] rounded-full w-32 px-4 py-2 text-sm font-extralight md:px-1 md:py-2">{ item.title }</button>
                        </div>


                    ))}
                </div>

                <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={handleNextClick}
                    className="carousel-next ml-10 text-red-800 text-2xl"
                />
            </section >
        </>
    )
}

export default AboutCarousel
