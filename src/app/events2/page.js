"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight, FaRegComments, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Events = () => { 
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
                                <span className="text-sm medium font-semibold text-gray-900">스포츠 분석</span>
                            </div>

                            <div className="hidden sm:block">
                                <Images
                                    className="rounded-lg"
                                    src={'/images/goat-banner.gif'}
                                    width={550}
                                    height={56}
                                />
                            </div>

                        </div>
                        
                        <div className="m-4"></div>
                        <SportsEventBanner />
                        <div className="m-4"></div>
                        <CardGrid/>


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

export default Events;

const SportsEventBanner = () => {

    const [hours, setHours] = useState(1);
    const [minutes, setMinutes] = useState(14);
    const [seconds, setSeconds] = useState(37);
  
    useEffect(() => {
      // 1초마다 타이머 감소
      const timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }, 1000);
  
      return () => clearInterval(timerInterval);
    }, [seconds, minutes, hours]); 
  
    return (
      <div className="relative w-full h-[300px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
        {/* 배경 이미지 설정 및 크기 조정 */}
        <div className="absolute inset-0">
          <img 
            src="/images/스포츠이벤트.png" 
            alt="스포츠 이벤트" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* 반투명 배경 오버레이 */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        {/* 콘텐츠 영역 */}
        <div className="relative z-10 flex items-center justify-center h-full space-y-4 space-x-40 text-center text-white">
          
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold">스포츠 이벤트</h1>
            <button className="px-6 py-3 bg-purple-500 rounded-full text-white font-semibold shadow-md hover:bg-purple-600 transition">
              참여하기
            </button>
          </div>
  
          {/* 타이머 영역 */}
          <div className="flex flex-col items-center justify-center space-x-4 bg-gray-900 bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-lg">
            <span className="text-sm font-semibold">Auction ends in:</span>
            <div  className="flex space-x-2">
              <div className="flex flex-col items-center space-x-2">
                <div className="text-3xl font-bold">{String(hours).padStart(2, '0')}</div>
                <div className="text-sm ">Hours</div>
              </div>
              <div className="flex items-center text-2xl">:</div>
              <div className="flex flex-col items-center space-x-2">
                <div className="text-3xl font-bold">{String(minutes).padStart(2, '0')}</div>
                <div className="text-sm">Min</div>
              </div>
              <div className="flex items-center text-2xl">:</div>
              <div className="flex flex-col items-center space-x-2">
                <div className="text-3xl font-bold">{String(seconds).padStart(2, '0')}</div>
                <div className="text-sm">Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Card = ({ title, collapseImageUrl, buttonText, period, imagePath, isOpen, onClick }) => {
    const contentRef = useRef(null); // 콘텐츠 높이를 참조하는 Ref
  
    const [maxHeight, setMaxHeight] = useState('0px'); // 애니메이션을 위한 maxHeight 상태
  
    // 카드가 열리거나 닫힐 때, 콘텐츠의 높이를 동적으로 설정
    useEffect(() => {
      if (isOpen) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }, [isOpen]);
  
    return (
      <div
        className={`rounded-lg shadow-md flex flex-col justify-between bg-white p-2 transition-all duration-500 ${
          isOpen ? 'h-auto' : 'h-[330px]'
        }`}
      >
        {/* 배너 이미지 */}
        <div className="h-auto w-full overflow-hidden rounded-lg">
          <Images
            src={imagePath}
            alt="이미지 설명"
            layout="responsive"
            width={720}
            height={480}
            sizes="(max-width: 600px) 480px, (max-width: 900px) 720px, (max-width: 1200px) 1080px, 1440px"
            className="object-cover w-full h-auto hover:scale-[1.1] duration-300 transform"
            priority
          />
        </div>
  
        <div className="text-xs text-blue-500 flex justify-between px-2">
          <div>진행중</div>
          <div>{period}</div>
        </div>
  
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={onClick} // 클릭 시 toggle 함수 실행
        >
          {buttonText}
        </button>
  
        {/* 펼쳐질 콘텐츠 */}
        <div
          ref={contentRef}
          style={{ maxHeight }} // maxHeight 값에 따라 애니메이션 설정
          className="overflow-hidden transition-max-height duration-500 ease-in-out"
        >
          <div className="mt-4">
            <Images
              src={collapseImageUrl}
              alt="추가 이미지 설명"
              layout="responsive"
              width={720}
              height={480}
              sizes="(max-width: 600px) 480px, (max-width: 900px) 720px, (max-width: 1200px) 1080px, 1440px"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export const CardGrid = () => {
    const [openCardIndex, setOpenCardIndex] = useState(null); // 하나의 카드만 열리도록 설정
  
    const cards = [
      {
        title: "9월 콘텐츠 수익화 명예의 전당",
        imagePath: '/images/뉴고챔스배너.png',
        collapseImageUrl: "/images/뉴고챔스상세디자인.png",
        period: "24/05/01~24/12/31",
        buttonText: "더 알아보기",
      },
      {
        title: "종합 인테리어 친구 추천 이벤트",
        imagePath: '/images/뉴신규가입이벤트.png',
        collapseImageUrl: "/images/뉴고챔스상세디자인.png",
        period: "23/12/04~24/12/31",
        buttonText: "더 알아보기",
      },
      {
        title: "9월 콘텐츠 수익화 명예의 전당",
        imagePath: '/images/뉴고챔스배너.png',
        collapseImageUrl: "/images/뉴고챔스상세디자인.png",
        period: "24/05/01~24/12/31",
        buttonText: "더 알아보기",
      },
      {
        title: "종합 인테리어 친구 추천 이벤트",
        imagePath: '/images/뉴신규가입이벤트.png',
        collapseImageUrl: "/images/뉴고챔스상세디자인.png",
        period: "23/12/04~24/12/31",
        buttonText: "더 알아보기",
      },
    ];
  
    const toggleCard = (index) => {
      setOpenCardIndex(index === openCardIndex ? null : index);
    };
  
    return (
      <div className="max-w-screen-xl mx-auto p-6">
        {/* 반응형 그리드 설정 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 auto-rows-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              isOpen={openCardIndex === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    );
  };