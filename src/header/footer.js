import React, {Component} from "react";
import logo from "../imgs/logo-bookmark-white.png";
import {FaFacebook, FaTwitter, FiFacebook, FiTwitter} from "react-icons/all";

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="bg-bookmark-purple py-20">
                    <div className="container">
                        <div className="sm:w-3/4 lg:w-2/4 mx-auto text-white">
                            <p className="font-light uppercase text-center mb-8">35,000+ ALREADY JOINED</p>
                            <h1 className="text-3xl text-center">Stay up-to-date with what we're doing</h1>
                            <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                <input type="text" placeholder="Enter your email address"
                                       className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"/>
                                <button type="button"
                                        className="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black">Contact
                                    Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>


                {/*Footer*/}
                <footer className="bg-bookmark-blue py-8">
                    <div className="container flex flex-col md:flex-row items-center">
                        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                            <img src={logo} alt={"logo"}/>
                            <ul className="flex text-white uppercase gap-12 text-xs">
                                <li className="cursor-pointer">Features</li>
                                <li className="cursor-pointer">Pricing</li>
                                <li className="cursor-pointer">Contact</li>
                            </ul>
                        </div>
                        <div className="flex gap-10 mt-12 md:mt-0">
                            <li className="text-white list-none text-xl"><FaTwitter/></li>
                            <li className="text-white list-none text-xl"><FaFacebook/></li>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;