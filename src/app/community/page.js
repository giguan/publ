"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight, FaRegComments, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Community = () => { 
    return (
        <div className="w-full h-auto mx-auto mt-4">
            {/* 메인 위젯과 우측 전광판 및 채팅을 나란히 배치하는 flex 레이아웃 */}
            <div className="flex justify-center items-start space-x-4 mt-4">
                {/* 메인 위젯 */}
                <div className="w-[1100px] h-auto bg-white rounded-lg shadow-lg mb-10">
                    <div className="container mx-auto p-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 border rounded-lg shadow-md p-2">
                                <div className="w-8 h-8 rounded-lg bg-red-700 bg-opacity-10 flex justify-center items-center">
                                    <ImFire className="text-red-700"/>
                                </div>
                                <span className="text-sm medium font-semibold text-gray-900">커뮤니티</span>
                            </div>

                            <div>
                                <Images
                                    className="rounded-lg"
                                    src={'/images/goat-banner.gif'}
                                    width={550}
                                    height={56}
                                />
                            </div>

                        </div>
                        
                        <div className="m-1"></div>
                        <HotTopicDashboard/>
                        <div className="m-4"></div>
                        <Highlights/>
                        <div className="m-4"></div>
                        <SwipeableTabs />

                    </div>

                 </div>

                {/* 우측 전광판 및 채팅 */}
                <div className="hidden xl:block w-[400px] h-[730px] bg-white rounded-lg shadow-lg ml-2 space-y-2">
                    {/* 전광판 */}
                    <div className="w-[350px] h-[200px] bg-black rounded-lg mx-auto mt-2">
                        <video 
                            className="w-full h-full"
                            src={"/images/wildslot.mp4"}
                            autoPlay
                            loop
                            playInline
                            muted
                        />
                    </div>

                    {/* 채팅 */}
                    <div className="mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* 채팅 제목 */}
                        <div className="px-4 py-2 bg-white border border-gray-300 flex items-center space-x-2">
                            <div className="font-bold text-lg text-gray-600">Live Chat</div>
                            <div className="text-xs text-gray-500">[ 접속중: 1325 ]</div>
                        </div>

                        {/* 채팅 메시지 영역 */}
                        <div className="p-4 space-y-3 overflow-y-auto h-[400px] border bg-[#F8F5F5]">
                            {/* 메시지 1 */}
                            <div className="flex items-start space-x-2">
                                <Images 
                                    src="/images/chatusers/강아지.png" 
                                    alt="user1" 
                                    className="w-5 h-5 rounded-full" 
                                    width={20}
                                    height={20}
                                />
                                <div>
                                    <div className="flex space-x-2 ">
                                        <div className="text-sm font-semibold text-gray-700">휴민</div>
                                        <div className="text-xs text-gray-500">11:13:14</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-2 rounded-lg text-sm text-gray-700">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>

                            {/* 메시지 2 */}
                            <div className="flex items-start space-x-2">
                                <Images 
                                    src="/images/chatusers/강아지.png" 
                                    alt="user1" 
                                    className="w-5 h-5 rounded-full" 
                                    width={20}
                                    height={20}
                                />
                                <div>
                                    <div className="flex space-x-2 ">
                                        <div className="text-sm font-semibold text-gray-700">휴민</div>
                                        <div className="text-xs text-gray-500">11:13:14</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-2 rounded-lg text-sm text-gray-700">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>

                            {/* 포인트 당첨 메시지 */}
                            <div className="relative flex flex-col items-center space-y-1 text-center text-black">
                                <div className="absolute z-10 top-5">
                                    <div className="font-bold text-blue-600">패딩</div>
                                    <div className="text-sm font-semibold">님이 랜덤 포인트 <span className="text-blue-600 font-bold">1000P</span>에 당첨되었습니다!</div>
                                </div>
                                <div className="relative w-full flex justify-between">
                                    <Images 
                                        src="/images/effects/money-l.png" 
                                        alt="포인트 당첨" 
                                        className="w-48 h-24" 
                                        width={213}
                                        height={165}
                                    />
                                    <Images 
                                        src="/images/effects/money-r.png" 
                                        alt="포인트 당첨" 
                                        className="w-48 h-24" 
                                        width={213}
                                        height={165}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 메시지 입력 영역 */}
                        <div className="border-t border-gray-300 bg-white p-2 flex items-center space-x-2">
                            <input 
                                type="text" 
                                className="flex-grow bg-gray-100 p-2 rounded-lg text-sm border border-gray-300 focus:outline-none" 
                                placeholder="메시지를 입력하세요"
                            />
                            <button className="text-white bg-blue-500 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11V7a1 1 0 011-1h3a1 1 0 110 2h-2v1h1a1 1 0 110 2h-1v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2v-1H8a1 1 0 110-2h1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;


export const HotTopicDashboard = () => {
    return (
      <div className="w-full mx-auto p-2">
        {/* 대시보드의 전체 레이아웃 */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* 화제의 토픽 섹션 */}
          <div className="flex-1 bg-white rounded-lg border shadow-md p-4">
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-full flex justify-between items-center px-2">
                    <div className="flex items-certer space-x-2 hover:scale-[1.05] duration-300 transform">
                        <Images
                            src="/images/effects/trending.png"
                            width={30}
                            height={30}
                        />
                        <span className="text-medium font-semibold text-gray-900">화제의 토픽</span>
                      </div>

                      <Link
                        href="/board/list"
                        className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition hover:scale-[1.1] duration-300 transform"
                      >
                          더보기 <FaArrowRight className="ml-2" />
                      </Link>
                </div>
              </div>
            </div>
            {/* 화제의 토픽 목록 */}
            <ul className="space-y-4">
              {[
                { title: "(강남) 유흥업소 비리 캐넌 형사, 사고 후 지수자 속 추적", time: "12시간 전", views: "1983" },
                { title: "형성주의 사이트에서 본 오타니 쓰러린", time: "12시간 전", views: "1983" },
                { title: "남자 20대 말 대출 도와드립니다!^^", time: "12시간 전", views: "1983" },
                { title: "핵동환 탄지소 배동환 탈출", time: "12시간 전", views: "1983" },
                { title: "클리안드 반양자 AI 무역 자살 은폐 지시", time: "12시간 전", views: "1983" },
                { title: "클리안드 반양자 AI 무역 자살 은폐 지시", time: "12시간 전", views: "1983" },
              ].map((item, index) => (
                  <Link href="/board/detail" key={index} className="flex justify-between items-center p-2 hover:scale-[1.05] duration-300 transform cursor-pointer">
                      <div className="flex items-center w-[70%] text-sm font-bold text-gray-800 truncate">
                          {item.title}
                      </div>
                      <div className="text-gray-500 text-xs flex space-x-2 flex-shrink-0">
                          <span>{item.time}</span>
                          <span>|</span>
                          <span>{item.views} views</span>
                      </div>
                  </Link>
              ))}
            </ul>
          </div>
  
          {/* 화제의 갤러리 섹션 */}
          <div className="flex-1 bg-white rounded-lg border shadow-md p-4">
            <div className="w-full flex mb-4">
              <div className="w-full">
                <div className="w-full flex justify-between items-center px-2">
                    <div className="flex items-certer space-x-2 hover:scale-[1.05] duration-300 transform">
                        <Images
                            src="/images/effects/trending.png"
                            width={30}
                            height={30}
                        />
                        <span className="text-medium font-semibold text-gray-900">화제의 갤러리</span>
                      </div>

                      <Link
                        href="/board/list"
                        className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition hover:scale-[1.1] duration-300 transform"
                      >
                          더보기 <FaArrowRight className="ml-2" />
                      </Link>
                </div>
              </div>
            </div>
            {/* 화제의 갤러리 그리드 */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "내가 그린 강인 그림", image: "/images/gallery/이강인 2.png" },
                { title: "내가 그린 현진 그림", image: "/images/gallery/류현진.png" },
                { title: "비평국수 달인", image: "/images/gallery/비빔국수달인.png" },
                { title: "무도 짤 모음집", image: "/images/gallery/무도.png" },
                { title: "굿모닝 vs 베드모닝", image: "/images/gallery/굿모닝배드모닝.png" },
                { title: "'쉿' 나의 이기 고양이", image: "/images/gallery/이재용.png" },
              ].map((item, index) => (
                <Link href="/board/detail" key={index} className="flex flex-col items-center text-center hover:scale-[1.05] duration-300 transform cursor-pointer">
                  <Images
                    src={item.image}
                    alt={item.title}
                    className="w-56 h-28 object-cover rounded-lg"
                    width={145}
                    height={88}
                  />
                  <h3 className="text-sm font-semibold text-gray-800 mt-2 truncate">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };


  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/swiper-bundle.css';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  const Highlights = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <div className="max-w-5xl  mx-auto p-1 rounded-lg">
        {/* 제목 영역 */}
        <div className="flex justify-between items-center mb-4">
            <div className="flex justify-center items-center space-x-2">
                <Images
                    src="/images/effects/youtube.png"
                    width={44}
                    height={44}
                />
                <span className="font-bold text-gray-900">인기 급 상승중인 숏 폼</span>

            </div>
        </div>
  
        {/* 카드 슬라이더 */}
        <div className="w-full">
          <div className="flex space-x-4">
          <Swiper
                // Swiper 설정
                spaceBetween={0}
                slidesPerView={4} // 한 번에 보일 카드 수
                pagination={{ clickable: true }} // 하단 페이지네이션 버튼
                // autoplay={{
                //     delay: 3000, // 3초마다 자동 슬라이드
                //     disableOnInteraction: false, // 드래그 후에도 자동 슬라이드 유지
                // }}
                
                modules={[Pagination, Navigation]} // 필요한 모듈들
                breakpoints={{
                  1920: {
                    slidesPerView: 4.5,
                  },
                  1440: {
                    slidesPerView: 4.5,
                  },
                  // 1024px 이상일 때
                  1024: {
                    slidesPerView: 4.5, // 6개의 슬라이드
                  },
                  // 768px 이상일 때
                  768: {
                    slidesPerView: 3.3, // 5개의 슬라이드
                  },
                  // 640px 이상일 때
                  640: {
                    slidesPerView: 2.5 // 3개의 슬라이드
                  },
                  // 기본(640px 이하)일 때
                  320: {
                    slidesPerView: 3, // 1개의 슬라이드
                  },
                }}
            >
              {['hotshort1', 'hotshort2', 'hotshort3', 'hotshort4', 'hotshort5', 'hotshort6'].map((short, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)} // hover 이벤트 설정
                    onMouseLeave={() => setHoveredIndex(null)}  // hover 해제 시 상태 초기화
                  >
                    {hoveredIndex === index ? (
                      // Hover 시 동영상 재생
                      <video
                        className="w-full h-[330px] object-cover object-center"
                        src={`/videos/${short}.mp4`}
                        autoPlay
                        loop
                        muted
                      />
                    ) : (
                      // Hover 전 기본 이미지
                      <Images
                        src={`/images/shorts/${short}.png`}
                        alt={`highlight ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={200}
                        height={120}
                        objectFit="cover"
                      />
                    )}
  
                    <div className="absolute z-10 w-full h-3/5 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute z-20 bottom-0 left-0 w-full p-1 m-1">
                      <h4 className="text-xs text-white font-bold p-2">
                        {/* 임의 텍스트. 각 슬라이드에 대한 제목을 설정할 수 있습니다. */}
                        {index === 0
                          ? '양키스는 어떻게 AL 동부를 정복했을까'
                          : '영상 ' + (index + 1)}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
  
              <SwiperSlide>
                {/* 카드 1 */}
                <div className="relative min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden">
                  
                  <Images
                    src="/images/shorts/short1.png"
                    alt="highlight 1"
                    className="w-full h-full object-cover"
                    width={200}
                    height={120}
                    objectFit="cover"
                  />
  
                  <div className="absolute z-10 w-full h-3/5 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute z-20 bottom-0 left-0 w-full p-1 m-1 ">
                      <h4 className="text-xs text-white font-bold p-2">
                        양키스는 어떻게 AL 동부를 정복했을까
                      </h4>
                  </div>
  
                </div>
              </SwiperSlide>
              
            </Swiper>
  
          </div>
        </div>
      </div>
    );
  }

  const SwipeableTabs = () => {
    const [activeTab, setActiveTab] = useState('유머'); // 탭 상태 관리
    const tabs = ["유머", "축구소식", "핫딜", "AFTV", "치지직", "스타", "유머", "축구소식", "핫딜", "AFTV", "치지직", "스타"];
  
    return (
      <div className="full mx-auto p-4">
        {/* 인기 게시판 제목 */}
        <h2 className="text-lg font-bold mb-4 text-gray-700">인기 게시판</h2>
        
        {/* Swiper로 가로 스크롤 가능한 메뉴 */}
        <Swiper
          spaceBetween={10} // 각 슬라이드 간격 설정
          slidesPerView={6} // 한 번에 보일 슬라이드 수
          navigation={true} // 화살표 네비게이션 추가
          modules={[Navigation]} // 필요한 모듈들 추가
          breakpoints={{
            1920: {
              slidesPerView: 7, // 큰 화면에서는 8개의 슬라이드
            },
            1440: {
              slidesPerView: 7, // 1440px 이상일 때
            },
            1024: {
              slidesPerView: 6, // 1024px 이상일 때
            },
            768: {
              slidesPerView: 5, // 768px 이상일 때
            },
            640: {
              slidesPerView: 4, // 640px 이상일 때
            },
            320: {
              slidesPerView: 3, // 모바일(320px 이하)에서는 3개의 슬라이드
            },
          }}
          className="mySwiper"
        >
          {tabs.map((item, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setActiveTab(item)} // 클릭 시 탭 변경
                className={`min-w-[80px] py-2 px-4 bg-white border rounded-full shadow-sm text-gray-700 hover:bg-gray-100 transition duration-300 ${
                  activeTab === item ? 'border-purple-600' : 'border-gray-300'
                }`}
              >
                {item}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  