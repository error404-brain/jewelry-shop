import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="w-full bg-black text-white">
            <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center font-arial w-full md:w-1/3">
                    <p>Other Countries / Regions | en</p>
                    <p>Copyright © 2024 Swarovski Other Countries / Regions. All rights reserved.</p>
                    <p>SWAROVSKI and the SWAN logo are registered and trademarks of Swarovski AG.</p>
                </div>

                <div className="w-full md:w-1/3">
                    <p className="text-3xl md:text-5xl font-serif text-center">SWAROVSKI</p>
                </div>

                <div className="flex justify-center md:justify-between items-center w-full md:w-1/3 space-x-4">
                    <a href="https://www.facebook.com/swarovski" target="_blank" rel="noopener noreferrer">
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
