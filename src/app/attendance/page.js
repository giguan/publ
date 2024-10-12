"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight, FaRegComments, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";


const Attendence = () => { 
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
                        
                        <AttendanceCalendar/>
                        <div className="m-4"></div>
                        <CommentSection/>
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

export default Attendence;


import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const AttendanceCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    // 날짜 클릭 핸들러
    const handleDateClick = (info) => {
      setSelectedDate(info.dateStr); // 선택한 날짜를 저장
    };
  
    return (
      <div className="max-w-full mx-auto p-4 text-gray-700">
        {/* FullCalendar with responsive height */}
        <div className="w-full max-w-[1000px] mx-auto">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}  // 날짜 클릭 시 이벤트
            customButtons={{
              customButton: {
                text: '출석하기',
                click: () => alert("출석 완료"),
              },
            }}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "customButton",  // 사용자 정의 버튼
            }}
            events={[
              { title: "출석 도장", date: "2024-10-10", backgroundColor: "transparent", textColor: "transparent", display: "block", extendedProps: { image: '/images/effects/goat-stamp.png' } },
              { title: "출석 도장", date: "2024-10-22", backgroundColor: "transparent", textColor: "transparent", display: "block", extendedProps: { image: '/images/effects/goat-stamp.png' } },
            ]}
            eventContent={renderEventContent}  // 커스텀 이벤트 렌더링
            eventDidMount={eventDidMount}
            height="auto"  // 높이를 반응형으로 설정
          />
        </div>
  
        {/* 하단에 선택한 날짜를 표시하는 영역 */}
        <div className="mt-4 flex justify-center">
          {selectedDate ? (
            <button className="w-full md:w-[70%] py-4 bg-blue-500 text-white rounded-lg hover:scale-105 transition-transform duration-300">
              {selectedDate} 출석하기
            </button>
          ) : (
            <button className="w-full md:w-[70%] text-center py-4 text-white font-bold text-lg rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 transition-transform duration-300">
              2024년 10월 5일 출석하기
            </button>
          )}
        </div>
      </div>
    );
  };
  
  // 커스텀 이벤트 컨텐츠 (이미지 도장 추가)
  function renderEventContent(eventInfo) {
    return (
      <div className="flex justify-center items-center">
        <Images
          src={eventInfo.event.extendedProps.image}
          alt="출석 도장"
          className="absolute w-16 h-16 lg:w-24 lg:h-24"
          width={100}
          height={100}
        />
      </div>
    );
  }

  function eventDidMount(info) {
    // 여기서 DOM 요소에 직접 스타일을 적용
    info.el.style.outline = "none";
    info.el.style.border = "none";
    info.el.style.backgroundColor = "transparent";
  }


  const CommentSection = () => {
    return (
      <div className="max-w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
        {/* 댓글 입력창 */}
        <div className="mb-6 flex justify-center items-center space-x-2">
          <input
            type="text"
            placeholder="댓글을 남겨 보세요."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-2 w-20 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
            입력
          </button>
        </div>
  
        {/* 댓글 목록 */}
        <ul className="space-y-6">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="border-t p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-700">사용자 {index + 1}</span>
                <span className="text-sm text-gray-500">5분 전</span>
              </div>
              <p className="text-gray-800 mb-2">
                [초대장] 오늘의키는 친구로 초대합니다! 링크로 접속하면 나도 친구도 더 빨리 선물을 받을 수 있어요.
                https://example.com
              </p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <button className="hover:text-blue-500">답글</button>
                <button className="hover:text-blue-500">신고</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };