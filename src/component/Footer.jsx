import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="w-full bg-black text-white">
            <div className="container mx-auto py-8 px-5 flex flex-col md:flex-row justify-center md:justify-between items-start space-y-6 md:space-y-0">
                {/* Customer Service Section */}
                <div className="flex-1 md:w-1/3 text-center md:text-left">
                    <p className="space-y-2 mt-4 text-left text-xl font-bold">Customer Service & FAQ</p>
                    <ul className="space-y-2 mt-4 text-left text-lg font-light">
                        <li className='hover:underline'>Customer Service Overview</li>
                        <li className='hover:underline'>Gift Card Balance</li>
                        <li className='hover:underline'>Contact Us</li>
                        <li className='hover:underline'>Size Guide</li>
                        <li className='hover:underline'>Store Finder</li>
                    </ul>
                </div>

                {/* About Us Section */}
                <div className="flex-1 md:w-1/3 text-center md:text-left">
                    <p className="text-left text-xl font-bold">About Us</p>
                    <ul className="space-y-2 mt-4 text-left text-lg font-light">
                        <li className='hover:underline'>About Swarovski</li>
                        <li className='hover:underline'>Sustainability</li>
                        <li className='hover:underline'>Jobs & Career</li>
                        <li className='hover:underline'>Alumni Community</li>
                        <li className='hover:underline'>Corporate Gifts</li>
                        <li className='hover:underline'>For Professionals</li>
                        <li className='hover:underline'>Sitemap</li>
                        <li className='hover:underline'>Kristallwelten</li>
                        <li className='hover:underline'>Swarovski Mobility</li>
                        <li className='hover:underline'>Code of Conduct</li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div className="flex-1 md:w-1/3 text-center md:text-left">
                    <p className="text-left text-xl font-bold">Legal</p>
                    <ul className="space-y-2 mt-4 text-left text-lg font-light">
                        <li className='hover:underline'>Terms Of Use</li>
                        <li className='hover:underline'>Terms & Conditions</li>
                        <li className='hover:underline'>Privacy Policy</li>
                        <li className='hover:underline'>Cookie Consent</li>
                        <li className='hover:underline'>Imprint</li>
                        <li className='hover:underline'>REACH information</li>
                        <li className='hover:underline'>Data Protection Consent Statement</li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-500" />
            <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center font-arial w-full md:w-1/3">
                    <p>Other Countries / Regions | en</p>
                    <p>Copyright © 2024 Swarovski Other Countries / Regions. All rights reserved.</p>
                    <p>SWAROVSKI and the SWAN logo are registered and trademarks of Swarovski AG.</p>
                </div>

                <div className="w-full md:w-1/3 text-center">
                    <p className="text-3xl md:text-5xl font-serif">SWAROVSKI</p>
                </div>

                <div className="flex justify-center md:justify-between items-center w-full md:w-1/3 space-x-4">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl md:text-3xl" />
                    </a>
                    <a href="https://www.instagram.com/swarovski" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-3xl" />
                    </a>
                    <a href="https://www.youtube.com/swarovski" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} className="text-2xl md:text-3xl" />
                    </a>
                    <a href="https://www.tiktok.com/@swarovski" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} className="text-2xl md:text-3xl" />
                    </a>
                    <a href="https://www.pinterest.com/swarovski" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterest} className="text-2xl md:text-3xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
