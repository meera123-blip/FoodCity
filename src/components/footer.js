
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Company Name</h2>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">
                        <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    </a>
                </div>
            </div>
            <div className="container mx-auto mt-4 px-4">
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">Career</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
