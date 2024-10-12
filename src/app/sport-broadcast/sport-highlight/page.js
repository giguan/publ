"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './swiper.css'

const SportHighlight = () => { 
    return (
        <div className="w-full h-auto mx-auto mt-4">
            {/* 메인 위젯과 우측 전광판 및 채팅을 나란히 배치하는 flex 레이아웃 */}
            <div className="flex justify-center items-start space-x-4 mt-4">
                {/* 메인 위젯 */}
                <div className="w-full h-auto bg-white rounded-lg shadow-lg mb-10">
                    <div className="container mx-auto p-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 border rounded-lg shadow-md p-2">
                                <div className="w-8 h-8 rounded-lg bg-red-700 bg-opacity-10 flex justify-center items-center">
                                    <ImFire className="text-red-700"/>
                                </div>
                                <span className="text-sm medium font-semibold text-gray-900">스포츠 하이라이트</span>
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



                        <SportsHighlightsByDate />

                        <div className="m-4"></div>

                        <div>
                          <SportsHighlights />
                        </div>
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

export default SportHighlight;

export function SportsHighlightsByDate() {
    const [activeTab, setActiveTab] = useState('일별');
  
    return (
      <div className="w-full mx-auto p-4">

          {/* 탭 메뉴 */}
          <div className="mt-6 flex justify-center"> 
            <button
              className={`relative px-4 py-2 text-medium bg-white font-semibold border border-gray-200 rounded-t-lg shadow-inner flex-1 overflow-hidden group ${
                activeTab === '일별' ? 'text-purple-600 border-b-4 border-purple-600 scale-105 z-20' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('일별')}
            >
              <span className="relative z-10">일별 하이라이트</span>
              {/* 로딩바처럼 차오르는 애니메이션 */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
            </button>

            <button
              className={`relative px-4 py-2 text-medium bg-white font-semibold border border-gray-200 rounded-t-lg shadow-inner flex-1 overflow-hidden group ${
                activeTab === '주간' ? 'text-purple-600 border-b-4 border-purple-600 scale-105 z-20' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('주간')}
            >
              <span className="relative z-10">주간 하이라이트</span>
              {/* 로딩바처럼 차오르는 애니메이션 */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
            </button>

            <button
              className={`relative px-4 py-2 text-medium bg-white font-semibold border border-gray-200 rounded-t-lg shadow-inner flex-1 overflow-hidden group ${
                activeTab === '월별' ? 'text-purple-600 border-b-4 border-purple-600 scale-105 z-20' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('월별')}
            >
              <span className="relative z-10">월별 하이라이트</span>
              {/* 로딩바처럼 차오르는 애니메이션 */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
            </button>
          </div>
    
          {/* 콘텐츠 */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTab === '일별' && (
                  <>
                  {/* 첫 번째 큰 카드 */}
                  <div className="col-span-1 md:col-span-1 ">
                    <div className="w-full flex flex-col justify-center items-center mt-2 p-2 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-[1.025] duration-300 transform">
                      <div className="relative w-[200px] flex justify-center rounded-lg shadow-lg overflow-hidden h-[320px]">
                        <Images
                            src="/images/effects/trending.png"
                            className="absolute left-0 shadow-xl m-2 z-30"
                            width={30}
                            height={30}
                        />
                      

                        <Images
                            src="/images/shorts/short2.png"
                            alt="다저스"
                            className="w-[200px] h-full object-cover hover:scale-[1.1] duration-300 transform"
                            width={200}
                            height={350}
                        />

                        <div className="absolute z-10 w-[200px] h-3/5 bottom-0 bg-gradient-to-t from-black to-transparent "></div>
                            <div className="absolute z-20 bottom-0 left-0 w-full p-1 m-1">
                                <h2 className="text-sm font-bold">다저스는 어떤 플레이로 10월 가을야구 진출을 확정했을까</h2>
                            </div>
                        </div>
                        <div className="text-medium font-semibold text-gray-500 p-2 space-y-2">
                            <p>구시아 </p>
                            <p className="text-sm text-gray-400">조회수 26만회 <span className="text-xs">•</span> 4시간 전</p>
                        </div>
                    </div>  
                  </div>

                  {/* 나머지 작은 카드들 */}
                  <div className="col-span-1 md:col-span-2 grid grid-cols-1">
                      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex items-center h-[120px] cursor-pointer hover:scale-[1.025] duration-300 transform" >
                          
                          <Images
                              src="/images/effects/trending.png"
                              className="absolute left-0 top-0 shadow-xl"
                              width={35}
                              height={35}
                          />
                          
                          <Images src="/images/shorts/short1.png" alt="양키스" width={120} height={80} className="w-36 h-28 object-cover object-top rounded-lg ml-2" />
                          <div className="w-full p-4 space-y-2 ">
                              <div className="flex justify-between text-sm font-semibold text-gray-500">
                                  <p>땡땡</p>
                                  <p>8시간 전</p>
                              </div>
                              <p className="text-xs text-gray-500">조회수 25만 </p>
                              <h3 className="text-sm font-bold text-gray-800">61홈런 페이스라는 저지, 대체 얼마나 잘하고 있는 걸까?</h3>
                          </div>
                      </div>

                      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex items-center h-[140px] cursor-pointer hover:scale-[1.025] duration-300 transform">
                          
                          <Images
                              src="/images/effects/trending.png"
                              className="absolute left-0 top-0 shadow-xl"
                              width={35}
                              height={35}
                          />

                          <Images src="/images/shorts/short3.png" alt="야구 투수" width={120} height={80} className="w-36 h-28 object-cover object-top rounded-lg ml-2" />
                          <div className="w-full p-4 space-y-2">
                              <div className="flex justify-between text-sm font-semibold text-gray-500">
                                  <p>땡땡</p>
                                  <p>8시간 전</p>
                              </div>
                              <p className="text-xs text-gray-500">조회수 25만 </p>
                              <h3 className="text-sm font-bold text-gray-800">61홈런 페이스라는 저지, 대체 얼마나 잘하고 있는 걸까?</h3>
                          </div>
                      </div>

                      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex items-center h-[140px] cursor-pointer hover:scale-[1.025] duration-300 transform">
                          
                          <Images
                              src="/images/effects/trending.png"
                              className="absolute left-0 top-0 shadow-xl"
                              width={35}
                              height={35}
                          />
                          
                          <Images src="/images/shorts/short4.png" alt="PK 경기" width={120} height={80} className="w-36 h-28 object-cover object-top rounded-lg ml-2" />
                          <div className="w-full p-4 space-y-2">
                              <div className="flex justify-between text-sm font-semibold text-gray-500">
                                  <p>땡땡</p>
                                  <p>8시간 전</p>
                              </div>
                              <p className="text-xs text-gray-500">조회수 25만 </p>
                              <h3 className="text-sm font-bold text-gray-800">61홈런 페이스라는 저지, 대체 얼마나 잘하고 있는 걸까?</h3>
                          </div>
                      </div>
                      </div>
                  </>
              )}
    
            {activeTab === '주간' && (
              <>
                {/* 주간 하이라이트 콘텐츠들 */}
                {/* 주간 콘텐츠는 여기에 추가 */}
              </>
            )}
    
            {activeTab === '월별' && (
              <>
                {/* 월별 하이라이트 콘텐츠들 */}
                {/* 월별 콘텐츠는 여기에 추가 */}
              </>
            )}
          </div>
    
          {/* 더보기 버튼 */}
          {/* <div className="mx-auto flex justify-center mt-2">
              <Link href="#" className="flex items-center text-sm text-gray-700 hover:text-gray-700 transition">더보기 <FaArrowRight className="ml-2"/></Link>
          </div> */}
        </div>
    );
  }


  const SportsHighlights = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <div className="w-full mx-auto lg:w-[60vw]"> {/* 부모 컨테이너 너비를 줄임 */}
        {/* 제목 영역 */}
        <div className="w-full flex justify-center items-center mb-4">
          <MlbTabs />
        </div>
  
        {/* 카드 슬라이더 */}
        <div className="w-full overflow-x-hidden">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              1920: {
                slidesPerView: 4, 
                spaceBetween: 16, // 적당한 여백을 추가
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3.4,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 1.5,
                spaceBetween: 8,
              },
            }}
          >
            {['short1', 'short2', 'short3', 'short4', 'short5', 'short6'].map(
              (short, index) => (
                <SwiperSlide key={index} className="flex-basis-[calc(100%/4)] max-w-[200px]">
                  <div
                    className="relative min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
                      // 기본 이미지
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
                        {index === 0
                          ? '양키스는 어떻게 AL 동부를 정복했을까'
                          : '하이라이트 ' + (index + 1)}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    );
  };

  const MlbTabs = () => {
    const [activeTab, setActiveTab] = useState('All');
  
    const teams = [
      { name: 'All', image: '/images/mlb/all.png' },
      { name: 'LA', image: '/images/mlb/LA다저스.png' },
      { name: 'Angels', image: '/images/mlb/angels.png' },
      { name: 'Mets', image: '/images/mlb/mets.png' },
      { name: 'Padres', image: '/images/mlb/padres.png' },
      { name: 'Phillies', image: '/images/mlb/phillies.png' },
      { name: 'Marlins', image: '/images/mlb/marlins.png' },
      { name: 'RedSox', image: '/images/mlb/redsox.png' },
      { name: 'Giants', image: '/images/mlb/giants.png' },
      { name: 'Brewers', image: '/images/mlb/brewers.png' },
      { name: 'Pirates', image: '/images/mlb/pirates.png' },
    ];
  
    return (
      <div className="w-full flex items-center justify-center rounded-lg ">
        {/* MLB Logo */}
        <div className="flex space-x-2 mr-2">
          <div className="w-20 h-20 flex items-center justify-center ">
            <img src="/images/mlb/mlb-logo.png" alt="MLB Logo" width={80} height={80} className="object-contain" />
          </div>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src="/images/mlb/mlb-text.png" alt="MLB Text" width={80} height={80} className="object-contain" />
          </div>
        </div>
  
        {/* Teams */}
        <Swiper
          spaceBetween={10} // 슬라이드 간격을 최소화
          slidesPerView={8} // 기본적으로 8개의 슬라이드를 보이게 설정
          navigation={true} // 화살표 네비게이션 추가
          modules={[Navigation]} // Swiper에서 필요한 모듈 설정
          className="mySwiper w-full"
          breakpoints={{
            1920: {
              slidesPerView: 10, // 큰 화면에서는 10개의 슬라이드가 보이도록 설정
              spaceBetween: 5,   // 간격을 최소화
            },
            1440: {
              slidesPerView: 9,  // 1440px에서는 8개의 슬라이드
              spaceBetween: 4,
            },
            1024: {
              slidesPerView: 9,  // 1024px 이상에서는 7개의 슬라이드
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 7,  // 태블릿에서는 5개의 슬라이드
              spaceBetween: 3,
            },
            640: {
              slidesPerView: 6,  // 작은 화면에서는 4개의 슬라이드
              spaceBetween: 2,
            },
            320: {
              slidesPerView: 5,  // 모바일에서는 3개의 슬라이드
              spaceBetween: 1,
            },
          }}
        >
          {teams.map((team, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setActiveTab(team.name)}
                className={`relative p-1 flex items-center justify-center rounded-lg bg-white hover:scale-[1.2] duration-300 transform overflow-hidden group ${
                  activeTab === team.name
                    ? 'border-2 border-purple-600'
                    : 'border-t border-l border-r'
                }`}
              >
                <Images
                  src={team.image}
                  alt={team.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
                {/* 로딩바처럼 차오르는 애니메이션 */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
