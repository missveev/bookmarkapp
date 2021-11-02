import React, {Component} from "react";
import {GiHamburgerMenu} from 'react-icons/all'
import Hero from "./hero";
import logo from "../imgs/logo-bookmark.svg"
import Feature from "./feature";
import Download from "./download";
import Faq from "./faq";
import Footer from "./footer";

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                        <div className="py-1">
                            <img src={logo} alt={"logo"}/>
                        </div>
                        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                            <li className="cursor-pointer">Features</li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">Contact</li>
                            <button type="button"
                                    className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login
                            </button>
                        </ul>
                        <div className="flex sm:hidden flex-1 justify-end text-2xl">
                            <GiHamburgerMenu/>
                        </div>
                    </nav>
                </header>
                <Hero/>
                <Feature/>
                <Download/>
                <Faq/>
                <Footer/>
            </div>
        )
    }
}

export default Header;