import React, {Component} from "react";
import feature1 from "../imgs/illustration-features-tab-1.png";
import feature2 from "../imgs/illustration-features-tab-2.png";
import feature3 from "../imgs/illustration-features-tab-3.png";

class Feature extends Component {
    render() {
        return (
            <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">

                {/*heading */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
                    <p className="text-center text-bookmark-grey mt-4">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquam aliquid at beatae esse fugit illo ipsa libero maxime, molestiae natus
                        officia, possimus, repellendus sint tenetur totam velit vitae voluptatem voluptates.</p>
                </div>
                {/*feature1*/}
                <div className="relative mt-20 lg:mt-24">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/*image*/}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm: w-3/4 sm:h-3/4 md:w-full md:h-full" src={feature1}
                                 alt="featureimg"/>
                        </div>
                        {/*content*/}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">Bookmark in one click</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet, maiores nulla
                                rem suscipit tempora tempore? Aliquam aspernatur dolore eos facilis incidunt itaque,
                                laboriosam maxime molestiae, quos repudiandae voluptas voluptates?
                            </p>
                            <button type="button"
                                    className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info
                            </button>
                        </div>
                    </div>
                    {/*rounded rectangle*/}
                    <div
                        className="hidden
                        md:block
                        overflow-hidden
                        bg-bookmark-purple
                        rounded-r-full
                        absolute
                        h-80
                        w-2/4
                        lg:-bottom-24
                        lg: -left-36"/>
                </div>
                {/*feaure2*/}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                        {/*image*/}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm: w-3/4 sm:h-3/4 md:w-full md:h-full" src={feature2}
                                 alt="featureimg"/>
                        </div>
                        {/*content*/}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">Intelligent Search</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet, maiores
                                nulla
                                rem suscipit tempora tempore? Aliquam aspernatur dolore eos facilis incidunt itaque,
                                laboriosam maxime molestiae, quos repudiandae voluptas voluptates?
                            </p>
                            <button type="button"
                                    className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info
                            </button>
                        </div>
                    </div>
                    {/*rounded rectangle*/}
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
                </div>
                {/*Feature3*/}
                <div className="relative mt-20 lg:mt-52">
                    <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                        {/*image*/}
                        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                            <img className="w-5/6 h-5/6 sm: w-3/4 sm:h-3/4 md:w-full md:h-full" src={feature3}
                                 alt="featureimg"/>
                        </div>
                        {/*content*/}
                        <div className="flex flex-1 flex-col items-center lg:items-start">
                            <h1 className="text-3xl text-bookmark-blue">Share your bookmark</h1>
                            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet, maiores nulla
                                rem suscipit tempora tempore? Aliquam aspernatur dolore eos facilis incidunt itaque,
                                laboriosam maxime molestiae, quos repudiandae voluptas voluptates?
                            </p>
                            <button type="button"
                                    className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info
                            </button>
                        </div>
                    </div>
                    {/*rounded rectangle*/}
                    <div className="hidden
                md:block
                overflow-hidden
                bg-bookmark-purple
                rounded-r-full
                absolute
                h-80
                w-2/4
                lg:-bottom-24
                lg: -left-36"/>
                </div>
            </section>
        )
    }
}

export default Feature;