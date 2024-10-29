import Radiant_Necklaces from './assets/Radiant Necklaces.jpg';
import Chic_Bracelets from './assets/Chic Bracelets.jpg';
import Glittering_Earrings from './assets/Glittering Earrings.jpg';
import ZodiacLeo from './assets/zodiacLeo.jpg';

function BodyContent() {
    return (
        <>
           <div className="relative">
           <video
                    className="w-full h-40 md:h-[25rem] object-cover" // Thay đổi chiều cao ở đây
                    autoPlay
                    muted
                    loop
            >
                    <source
                        src="https://asset.swarovski.com/videos/f_auto,q_auto,w_1920,h_1080,c_fill/so_7,eo_13/swa-cms/videos/SWA_TEASER01_16-9/TT.mp4"
                        type="video/mp4"
                    />
                </video>          
            </div>
            <div className="w-full bg-orange-100 py-10 px-4">
                <p className="text-black text-2xl md:text-3xl text-center font-serif">Masters of Light Since 1895</p>
                <p className="text-black text-base md:text-lg text-center font-serif mt-4 leading-relaxed">
                Since 1895, founder Daniel Swarovski’s passion for innovation and design, and mastery of crystal cutting has defined Swarovski as<br className="hidden md:inline" />
                the leading jewelry and accessories brand.
                </p>
            </div>

            <div className="w-full py-10 px-4">
                <p className="text-black text-2xl md:text-3xl text-center font-serif">Infinitely Inspiring</p>
                <div className="flex flex-col md:flex-row justify-between p-6">
                    <div className='w-full md:w-1/3 p-4'>
                        <img src={Radiant_Necklaces} alt="Radiant Necklaces" className="w-full h-auto" />
                        <p className="text-black text-lg text-center font-serif mt-4">Radiant Necklaces collection</p>
                        <p className="text-justify">Channeled into sculptural forms, fluid crystals are a beautiful expression of Swarovski savoir-faire. Take the modern route to styling with minimalist chains that gleam with your every move.</p>
                        <a href='#' className='text-black text-lg text-center font-serif block mt-4'>Discover more</a>
                    </div>
                    <div className='w-full md:w-1/3 p-4'>
                        <img src={Chic_Bracelets} alt="Chic Bracelets" className="w-full h-auto" />
                        <p className="text-black text-lg text-center font-serif mt-4">Chic Bracelets</p>
                        <p className="text-justify">Bracelets of sublime brilliance crafted with precision-cut stones are striking when worn alone, and sensational in a stack. Choose one or more to radiate every day, or as a gift for someone you adore.</p>
                        <a href='#' className='text-black text-lg text-center font-serif block mt-4'>Discover more</a>
                    </div>
                    <div className='w-full md:w-1/3 p-4'>
                        <img src={Glittering_Earrings} alt="Glittering Earrings" className="w-full h-auto" />
                        <p className="text-black text-lg text-center font-serif mt-4">Bold Earrings</p>
                        <p className="text-justify">Full-cut facets in high-octane hues reinterpret crystals with contemporary drama. A striking display of Swarovski’s mastery of light, statement hoops inspire you to shine your brightest.</p>
                        <a href='#' className='text-black text-lg text-center font-serif block mt-4'>Discover more</a>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white py-10 px-4'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center mx-auto'>
                        <p className="text-black font-serif md:pl-24 text-center md:text-left">MAKE IT MEANINGFUL</p>
                        <p className="text-black text-xl md:text-2xl font-serif mt-2 md:pl-24 text-center md:text-left">ZODIAC COLLECTION</p>
                        <p className='text-black text-base md:text-lg font-serif mt-4 md:pl-24 text-justify'>
                            Drawing from the astrological chart, the Rising Signs Collection employs a modern yet intricate design language to capture the unique spirit of the zodiac symbols. Playful figurines are manifested in flawlessly faceted white crystal and engraved gold-tone details, while joyful jewelry glows with astral radiance. Shining with character, they’re the ideal birthday gift.
                        </p>
                        <a href='#' className='text-black text-lg font-serif mt-4 md:pl-24 block text-center md:text-left'>Discover more</a>
                    </div>
                    <div className='w-full md:w-1/2 p-4 mt-4 md:mt-0'>
                        <img src={ZodiacLeo} alt="ZodiacLeo" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyContent;
