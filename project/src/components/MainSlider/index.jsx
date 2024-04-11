// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

const MainSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='slide__first'>
                    <h1 className='slide__first-title'>Online Store</h1>
                    <p className='slide__first-text'>Unveil a world of sophistication with our curated selection from top designers worldwide. Elevate your wardrobe effortlessly. Start shopping now!</p>
                    <button className='slide__first-button'>View all</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide__first'>
                    <h1 className='slide__first-title'>Online Store</h1>
                    <p className='slide__first-text'>Unveil a world of sophistication with our curated selection from top designers worldwide. Elevate your wardrobe effortlessly. Start shopping now!</p>
                    <button className='slide__first-button'>View all</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide__first'>
                    <h1 className='slide__first-title'>Online Store</h1>
                    <p className='slide__first-text'>Unveil a world of sophistication with our curated selection from top designers worldwide. Elevate your wardrobe effortlessly. Start shopping now!</p>
                    <button className='slide__first-button'>View all</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide__first'>
                    <h1 className='slide__first-title'>Online Store</h1>
                    <p className='slide__first-text'>Unveil a world of sophistication with our curated selection from top designers worldwide. Elevate your wardrobe effortlessly. Start shopping now!</p>
                    <button className='slide__first-button'>View all</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
export default MainSlider