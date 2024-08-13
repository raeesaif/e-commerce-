import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return <>
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col space-y-4 p-4 text-blue-200 ">
                    <h3 className="text-lg font-bold text-blue-500 ">GlamGrab</h3>
                    <p>"At Glam-Grab we are committed to providing high-quality products that blend style with comfort.</p>
                    <p>Contact information: email, phone number</p>
                    <p>+92 21 111 112 111 (9am - 10pm , Mon - Sat)</p>
                    <p>eshop@glamgrab.com</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div>
                        <h3 className="text-lg font-bold text-blue-500 ">Customer Service</h3>
                        <ul className="flex flex-col text-blue-200 " >
                            <Link to={"/about"}> About us </Link>
                            <Link to={"/contact"}> Contact us </Link>
                            <Link to={"/privacy"}> Privacy Policy </Link>
                            <Link to={"/service"}> Terms of Condition </Link>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center mr-4 text-blue-500 ">
                    <h1 className="text-8xl bg-blue mr-4 " >GlamGrab</h1>
                    <p className="text-sm">Copyright © 2024 Glam-Grab. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
};
