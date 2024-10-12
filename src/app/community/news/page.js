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
// import SwiperCore, { Grid } from 'swiper/core';
// SwiperCore.use([Grid]);

const News = () => { 
    return (
        <div className="w-full h-auto mx-auto mt-4">
            {/* 메인 위젯과 우측 전광판 및 채팅을 나란히 배치하는 flex 레이아웃 */}
            <div className="flex justify-center items-start space-x-4 mt-4">
                {/* 메인 위젯 */}
                <div className="w-[80%] h-auto bg-white rounded-lg shadow-lg mb-10">
                    <div className="container mx-auto p-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 border rounded-lg shadow-md p-2">
                                <div className="w-8 h-8 rounded-lg bg-red-700 bg-opacity-10 flex justify-center items-center">
                                    <ImFire className="text-red-700"/>
                                </div>
                                <span className="text-sm medium font-semibold text-gray-900">뉴스</span>

                            </div>
                            <div className="ml-4 flex space-x-4">
                            
                            <div className="ml-4 flex space-x-4">
                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900 cursor-pointer">연예</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900 cursor-pointer">스포츠</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>
                            </div>
                           
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

                        <div className='m-4'></div>
                        <div>
                            <NewsSwiper/>
                        </div>

                        <div className='m-4'></div>
                            <NewsSection/>

                        <div className='m-4'></div>
                        <PhotoGrid/>


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

export default News;


const newsItems = [
    {
      title: "유재석, '흑백요리사' 셰프들 다 만나네...",
      imageUrl: "/images/enter-news/news-enter-1.jfif",
      source: "OSEN",
    },
    {
      title: "이순재 측, '단순 피로누적...심각한 우려 불식'",
      imageUrl: "/images/enter-news/news-enter-2.jfif",
      source: "스포티비뉴스",
    },
    {
      title: "흑백요리사 나폴리 맛피아, 미슐랭 스타 출신",
      imageUrl: "/images/enter-news/news-enter-3.jfif",
      source: "OSEN",
    },
    {
      title: "'컴백' 비웨이브, 팬덤 'LU' 만났다...",
      imageUrl: "/images/enter-news/news-enter-4.jfif",
      source: "OSEN",
    },
    {
      title: "왜 지금 다시 노찾사 공연인...",
      imageUrl: "/images/enter-news/news-enter-5.jfif",
      source: "뉴스1",
    },
    {
      title: "제시, 일행 팬 폭행 사건에...",
      imageUrl: "/images/enter-news/news-enter-6.jfif",
      source: "일간스포츠",
    },
    {
        title: "왜 지금 다시 노찾사 공연인...",
        imageUrl: "/images/enter-news/news-enter-5.jfif",
        source: "뉴스1",
      },
      {
        title: "제시, 일행 팬 폭행 사건에...",
        imageUrl: "/images/enter-news/news-enter-6.jfif",
        source: "일간스포츠",
      },
  ];
  
  
  const NewsSwiper = () => {
    return (
      <Swiper
        spaceBetween={20} // 카드 간의 간격 설정
        slidesPerView={3} // 한 번에 3개의 슬라이드 표시
        slidesPerGroup={3} // 그룹으로 슬라이드를 3개씩 넘김
        pagination={{ clickable: true }} // 페이지 네비게이션
        navigation={true} // 이전/다음 버튼 활성화
        modules={[Autoplay, Pagination, Navigation]}
        className='max-w-[1100px]'
        breakpoints={{
          // 반응형 설정
          640: {
            slidesPerView: 1, // 모바일 화면에서는 1개씩
          },
          768: {
            slidesPerView: 2, // 작은 화면에서는 2개씩
          },
          1024: {
            slidesPerView: 3, // 데스크탑에서는 3개씩
          },
        }}
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="news-card bg-white shadow-lg rounded-lg overflow-hidden min-h-[350px] cursor-pointer hover:scale-[1.05] duration-300 transform">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-500">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.source}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  function NewsSection() {
    const categories = ["전체", "스타", "드라마", "예능", "뮤직", "영화"];
    const newsItems = [
      {
        title:
          "신유, 오늘(12일) 국악×트로트 '러브 스토리' 발매 '자작곡 첫 활동'",
        source: "엑스포츠뉴스",
        imageUrl: "/images/enter-news/news-enter-1.jfif",
      },
      {
        title:
          '"당신이 죽인 게 아니야"..지옥에서 온 판사 금토 드라마 전체 1위',
        source: "MHN스포츠",
        imageUrl: "/images/enter-news/news-enter-2.jfif",
      },
      {
        title:
          "설암 3기 정미애 '조인성·조승우 이름 따서 아들 이름 지어'",
        source: "스포티비뉴스",
        imageUrl: "/images/enter-news/news-enter-3.jfif",
      },
      {
        title:
          "가수 제시 '사진 요청한 팬을 처음 본 사람이 폭행…도의적 책임'",
        source: "헤럴드경제",
        imageUrl: "/images/enter-news/news-enter-4.jfif",
      },
      {
        title:
          "라포엠, 美 투어 전 회차 매진 기록…오늘 LA 공연서 피날레",
        source: "뉴스1",
        imageUrl: "/images/enter-news/news-enter-5.jfif",
      },
      {
        title: "BTS 지민 'Who', 英 오피셜·스포티파이 '역주행'",
        source: "노컷뉴스",
        imageUrl: "/images/enter-news/news-enter-6.jfif",
      },
    ];
  
    return (
      <section className="p-4">
        {/* 카테고리 탭 */}
        <div className="flex space-x-4 mb-4 justify-between items-center">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-gray-700">주요 뉴스</h2>
            <div className="flex space-x-2 text-gray-500">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`${
                    index === 0
                      ? "text-white bg-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  } px-4 py-2 rounded-full`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <a href="#" className="ml-auto text-gray-500 hover:text-blue-600">
              더보기
            </a>
          </div>
        </div>
  
        {/* 뉴스 리스트 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-[1.05] duration-300 transform"
            >
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-24 h-24 object-cover"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-700">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500">{news.source}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  



  function PhotoGrid() {
    const photos = [
      {
        title: "예능 촬영 현장 공개",
        time: "26분전",
        imageUrl: "/images/enter-news/img1.jfif",
        size: "large", // 카드 크기 지정
      },
      {
        title: "스타들의 공항패션",
        time: "57분전",
        imageUrl: "/images/enter-news/img2.jfif",
        size: "medium",
      },
      {
        title: "스타 현장 공개",
        time: "17시간전",
        imageUrl: "/images/enter-news/img3.jfif",
        size: "medium",
      },
      {
        title: "앨범 티저·뮤비 포토",
        time: "52분전",
        imageUrl: "/images/enter-news/img4.jfif",
        size: "large",
      },
      {
        title: "스타의 화보",
        time: "3시간전",
        imageUrl: "/images/enter-news/img5.jfif",
        size: "medium",
      },
      {
        title: "스포츠 현장에 간 스타들",
        time: "17시간전",
        imageUrl: "/images/enter-news/img6.jfif",
        size: "medium",
      },
    ];
  
    return (
        <section className="p-4">
          {/* 타이틀 섹션 */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-700">스타 최신 포토</h2>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              더보기
            </a>
          </div>
    
          {/* 포토 그리드 */}
          <div className="grid grid-cols-4 grid-rows-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:scale-[1.05] duration-300 transform ${
                  photo.size === "large"
                    ? "col-span-2 row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  <p className="text-sm">{photo.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }