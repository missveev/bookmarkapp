import React, {Component} from 'react';
import {MdKeyboardArrowDown} from "react-icons/all";

class Faq extends Component {
    render() {
        return (
            <section className=" bg-bookmark-white py-20">
                <div className="container">
                    {/*heading*/}
                    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                        <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
                        <p className="text-center text-bookmark-grey mt-4">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquam aliquid at beatae esse fugit illo ipsa libero maxime</p>
                    </div>
                    {/*FAQ-items*/}
                    <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                        <div className="flex items-center border-b py-4">
                            <span className="flex-1 text-left">What is a Bookmark?</span>
                            <MdKeyboardArrowDown/>
                        </div>
                        <div className="flex items-center border-b py-4">
                            <span className="flex-1 text-left">Is there a mobile app?</span>
                            <MdKeyboardArrowDown/>
                        </div>
                        <div className="flex items-center border-b py-4">
                            <span className="flex-1 text-left">How can I request a new browser?</span>
                            <MdKeyboardArrowDown/>
                        </div>
                        <div className="flex items-center border-b py-4">
                            <span className="flex-1 text-left">What about other chromium browsers?</span>
                            <MdKeyboardArrowDown/>
                        </div>
                        <button type="button"
                        className=" mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black">More Info
                    </button>

                    </div>
                </div>
            </section>
        )
    }
}

export default Faq;