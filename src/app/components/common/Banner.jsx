"use client"

import { useState } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleBanner = () => {
        setIsCollapsed(!isCollapsed);
      };

    return (
        <div className="relative w-full"> {/* 배너 전체를 감싸는 부모 컨테이너 */}
            <div
                className={`hidden md:flex items-center w-full transition-all duration-500 ease-in-out overflow-hidden ${
                isCollapsed ? 'h-0' : 'h-[130px]'
                }`} // 배너 높이를 상태에 따라 0으로 줄이거나 130px로 설정
            >
            <Swiper
                // Swiper 설정
                spaceBetween={30}
                slidesPerView={6} // 한 번에 보일 카드 수
                pagination={{ clickable: true }} // 하단 페이지네이션 버튼
                autoplay={{
                    delay: 3000, // 3초마다 자동 슬라이드
                    disableOnInteraction: false, // 드래그 후에도 자동 슬라이드 유지
                }}
                
                modules={[Autoplay, Pagination, Navigation]} // 필요한 모듈들
                breakpoints={{
                    1920: {
                      slidesPerView: 6.5,
                    },
                    1440: {
                      slidesPerView: 4.5,
                    },
                    // 1024px 이상일 때
                    1024: {
                      slidesPerView: 3.5, // 6개의 슬라이드
                    },
                    // 768px 이상일 때
                    768: {
                      slidesPerView: 2.5, // 5개의 슬라이드
                    },
                    // 640px 이상일 때
                    640: {
                      slidesPerView: 2, // 3개의 슬라이드
                    },
                    // 기본(640px 이하)일 때
                    320: {
                      slidesPerView: 1, // 1개의 슬라이드
                    },
                  }}
            >
                {/* 슬라이드 아이템들 */}
                <SwiperSlide>
                    <div className="min-w-[170px] max-w-[225px] h-120 m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner1.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-[170px] max-w-[225px] h-120 m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner2.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-[170px] max-w-[225px] h-120 m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner3.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-[170px] max-w-[225px] h-120 m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner3.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-[170px] h-120 max-w-[225px] m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner3.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-[170px] h-120 max-w-[225px] m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner3.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-[170px] h-120 max-w-[225px] m-4 shadow-md rounded-lg overflow-hidden relative">
                        
                        <Image
                            src="/images/banners/banner3.png"
                            alt="banner Image"
                            layout="responsive"
                            className="w-full h-40 object-cover"
                            width={16}
                            height={9}
                        />

                        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>

                        <div className='absolute ml-1 top-1 flex'>
                            <div className='flex justify-center items-center w-10 h-6 text-[12px] font-bold bg-[#FF0031] p-1 '>LIVE</div>
                            <div className='flex justify-center items-center w-18 h-6 text-[10px] font-bold bg-[#7D8694] p-1'>141,058 시청</div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-1 m-1 ">
                            <h3 className="text-xs text-white font-bold">하나금융그룹 챔피언십</h3>
                            <p className="text-xs text-gray">KLPGA</p>
                        </div>
                    </div>
                </SwiperSlide>

                

                
            </Swiper>
            </div>

      {/* 배너 토글 버튼 */}
      <button
        onClick={toggleBanner}
        className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-700 px-3 py-1 rounded-b-lg shadow-lg z-10"
        >
        {isCollapsed ? '라이브 펼치기' : '숨기기'}
        </button>
    </div>
  );
};


export default Banner;