import React, {Component} from "react";
import hero from "../imgs/hero-bg.png"

class Hero extends Component {
    render() {
        return (
            <section className="relative">
                <div className=" container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 ">
                    {/*Content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">A
                            Simple Bookmark Manager</h2>
                        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam asperiores, aut
                            cumque dolorem dolorum enim facilis fuga fugit id incidunt, iure maxime minima natus nihil
                            quam quasi sequi tenetur.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <button type="button"
                                    className="btn btn-purple hover:bg-bookmark-white hover:text-black">Get it on Chrome
                            </button>
                            <button type="button"
                                    className="btn btn-white hover:bg-bookmark-purple hover:text-white">Get it on
                                Firefox
                            </button>
                        </div>
                    </div>
                    {/* Image*/}
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                        <img className="w-5/6 h-5/6 sm:w-3/4 h-3/4 md:w-full md:h-full" src={hero} alt={"hero-image"}/>
                    </div>
                </div>
                {/*Rounded Rectangle */}
                <div className="hidden
                md:block
                overflow-hidden
                bg-bookmark-purple
                rounded-l-full
                absolute
                h-80
                w-2/4
                top-32
                right-0
                lg:-bottom-28
                lg: -right-30"/>
                </section>
        )
    }
}

export default Hero;