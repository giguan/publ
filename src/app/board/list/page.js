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

const BoardList = () => { 
    return (
        <div className="w-full h-auto mx-auto mt-4">
            {/* 메인 위젯과 우측 전광판 및 채팅을 나란히 배치하는 flex 레이아웃 */}
            <div className="flex justify-center items-start space-x-4 mt-4">
                {/* 메인 위젯 */}
                <div className="w-full max-w-6xl h-auto bg-white rounded-lg shadow-lg mb-10">
                    <div className="container mx-auto p-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4 border rounded-lg shadow-md p-2">
                                <div className="w-8 h-8 rounded-lg bg-red-700 bg-opacity-10 flex justify-center items-center">
                                    <ImFire className="text-red-700"/>
                                </div>
                                <span className="text-sm medium font-semibold text-gray-900">자유 게시판</span>
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

                        <div className="m-4"></div>
                        <EPLTabs/>
                        <div className="m-1"></div>
                        <List /> 
 

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

export default BoardList;

const EPLTabs = () => {
    const [activeTab, setActiveTab] = useState('1');
  
    const teams = [
      { name: '1', image: '/images/blind/ico-best.png', title: '토픽 베스트' },
      { name: '9', image: '/images/blind/topic_logo_kr_1715071114.png', title: '성격유형' },
      { name: '2', image: '/images/blind/topic_logo_kr_1693881269.png', title: '보험' },
      { name: '3', image: '/images/blind/topic_logo_kr_1701853857.png', title: '나는 소롤' },
      { name: '4', image: '/images/blind/topic_logo_kr_1706508745.png', title: '시술/성형' },
      { name: '7', image: '/images/blind/topic_logo_kr_1711698682.png', title: '나들이' },
      { name: '8', image: '/images/blind/topic_logo_kr_1712906235.png', title: '주류탐험'},
      { name: '5', image: '/images/blind/topic_logo_kr_1710316218.png', title: '야구'},
      { name: '6', image: '/images/blind/topic_logo_kr_1711093043.png', title: 'OTT'},
    ];
  
    return (
        <div className="relative max-w-screen-lg mx-auto p-2">

        <Swiper
          spaceBetween={1} // 슬라이드 간격을 최소화
          slidesPerView={1} // 기본적으로 8개의 슬라이드 표시
          modules={[Navigation]} // 네비게이션 모듈
          className="mySwiper w-[100%]"
          breakpoints={{
            1920: {
              slidesPerView: 6.1, // 큰 화면에서는 6개의 슬라이드
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 5.6, // 1440px에서는 9개의 슬라이드
              spaceBetween: 4,
            },
            1024: {
              slidesPerView: 4.5, // 1024px 이상에서는 9개의 슬라이드
              spaceBetween: 3,
            },
            768: {
              slidesPerView: 3.5, // 태블릿에서는 7개의 슬라이드
              spaceBetween: 3,
            },
            640: {
              slidesPerView: 3, // 작은 화면에서는 6개의 슬라이드
              spaceBetween: 2,
            },
            320: {
              slidesPerView: 2, // 모바일에서는 5개의 슬라이드
              spaceBetween: 1,
            },
          }}
        >
          {teams.map((team, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setActiveTab(team.name)}
                className={`w-40 p-1 flex items-center justify-center rounded-lg bg-white hover:scale-[1.2] duration-300 transform ${
                  activeTab === team.name ? 'border-2 border-purple-600' : 'border-t-2 border-l-2 border-r-2'
                }`}
              >
                <div className="flex justify-center items-center space-x-1 truncate">
                  <Images
                    src={team.image}
                    alt={team.name}
                    width={40}
                    height={40}
                    className="object-contain rounded-lg"
                  />
                  <div>
                    <span className="text-gray-700">{team.title}</span>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  import { AiOutlineEye } from "react-icons/ai";
  import { GoComment } from "react-icons/go";
  import { AiOutlineLike } from "react-icons/ai";

  const List = () => {
    const posts = [
      {
        category: "축구",
        title: `대표님 막내 아닌 이강인 "새 선수들이 나오면서 강해진다"`,
        views: 429,
        comments: 1,
        likes: 0,
        date: "2024.10.10",
        new: true,
        src:"/images/sports-news/news1.png"
      },
      {
        category: "야구",
        title: "정우주 한화이글스와 5억원 계약 체결",
        views: 495,
        comments: 0,
        likes: 0,
        date: "2024.10.10",
        new: true,
        src:"/images/sports-news/news2.png"
      },
      {
        category: "일반",
        title: "아이폰 14 프로 맥스 딥 퍼플",
        views: 382,
        comments: 0,
        likes: 0,
        date: "2024.10.10",
        new: false,
        src:"/images/sports-news/news3.png"
      },
      {
        category: "일반",
        title: "블룸버그 발 맥 프로, 아이맥 프로, 맥 미니 등 최신 루머",
        views: 861,
        comments: 0,
        likes: 0,
        date: "2024.10.10",
        new: false,
        src:"/images/sports-news/news1.png"
      },
      {
        category: "일반",
        title: "스튜디오 듀오와 데스크셋업",
        views: 470,
        comments: 0,
        likes: 0,
        date: "2024.10.10",
        new: false,
      },
      {
        category: "일반",
        title: "아이맥 27인치 출시하나… 애플 공홈에 24인치 표기 추가",
        views: 366,
        comments: 1,
        likes: 0,
        date: "2024.10.10",
        new: true,
        src:"/images/sports-news/news1.png"
      }
    ];
  
    return (
      <div className="w-full mx-auto p-2 bg-white">
        {/* 게시글 목록 */}
        <ul className="">
          {posts.map((post, index) => (
            <Link href="/board/detail"
              key={index}
              className="w-[90%] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center p-1 space-y-4 sm:space-y-0 border-b-2 border-gray-200 hover:bg-gray-100 transition-colors duration-300"
            >
              {/* 왼쪽 부분 */}
              <div className="flex-1 sm:w-[80%]">
                <div className="flex items-center space-x-3">
                    {post.new ? 
                      <span className="ml-2 text-red-500 font-bold text-xs bg-red-100 px-2 py-1 rounded-full">NEW</span>
                    : <span className="bg-gray-300 text-gray-700 rounded-lg text-sm w-[50px] h-[25px] flex items-center justify-center">{post.category}</span>
                    }
                  <span className="text-base font-semibold text-gray-900 truncate w-full sm:w-7/12">
                    {post.title}
                  </span>
                </div>
            
                {/* 가운데 부분 */}
                <div className="text-sm text-gray-500 flex space-x-4 mt-2 px-4">
                  <div className="flex justify-center items-center">
                    <AiOutlineEye className="mr-2"/>
                    {post.views}
                  </div>
                  <span className="flex items-center">
                    <GoComment className="mr-2"/>
                    {post.comments}
                  </span>
                  <span className="flex items-center">
                    <AiOutlineLike className="mr-2" />
                    {post.likes}
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            
              {/* 오른쪽 부분 */}
              <div className="flex-none basis-2/10 text-gray-500 text-sm">
                <div className="w-24 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  {post.src ? (
                    <img
                      src={post.src}
                      alt={post.title}
                      className="w-24 h-20 rounded-lg object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No Image</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  