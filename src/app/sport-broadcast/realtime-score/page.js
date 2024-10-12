"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { PiSoccerBallFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";

import { MdOutlineScoreboard } from "react-icons/md";

import { FaArrowUp, FaArrowDown  } from "react-icons/fa";
const RealtimeScore = () => { 
    return (
        <div className="w-full h-auto mx-auto mt-4">
            {/* 메인 위젯과 우측 전광판 및 채팅을 나란히 배치하는 flex 레이아웃 */}
            <div className="flex justify-center items-start space-x-4 mt-4">
                {/* 메인 위젯 */}
                <div className="w-full h-auto bg-white rounded-lg shadow-lg mb-10">
                    <div className="container mx-auto p-4">

                        <div className="flex  items-center">
                            <div className="flex items-center space-x-4 border rounded-lg shadow-md p-2">
                                <div className="w-8 h-8 rounded-lg bg-green-700 bg-opacity-20 flex justify-center items-center">
                                    <MdOutlineScoreboard className="text-green-700"/>
                                </div>
                                <span className="text-sm medium font-semibold text-gray-900">실시간스코어</span>
                            </div>

                            <div className="ml-4 flex space-x-4">
                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">모든 종목</span>
                                    <div className="w-8 h-1 bg-gray-900 mt-1 transition-transform duration-500"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">야구</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">농구</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">배구</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">LCK</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">수영</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>

                                <div className="text-left m-2 group">
                                    <span className="text-medium font-semibold text-gray-900">하키</span>
                                    <div className="w-0 h-1 bg-gray-900 mt-1 transition-all duration-500 group-hover:w-8"></div>
                                </div>
                            </div>



                        </div>

                        <DateTabs/>

                        <MatchDetails />
                        <MatchDetails />
                        <MatchDetails />
                        <MatchDetails />
                        <MatchDetails />
                        <MatchDetails />
                        <MatchDetails />
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

export default RealtimeScore;

const DateTabs = () => {
    const [activeTab, setActiveTab] = useState('주간');
    const [selectedDate, setSelectedDate] = useState(15);
  
    const tabs = ['일별', '주간', '월별'];
    const dates = [13, 14, 15, 16, 17, 18, 19];

    return (
      <div className=" max-w-5xl mx-auto">
        {/* 탭 메뉴 */}
        <div className="flex justify-center space-x-4 mb-4 mt-4 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-lg rounded-lg font-bold flex-grow ${
                activeTab === tab
                  ? 'bg-purple-100 text-purple-600 shadow-md'
                  : 'bg-white text-gray-500 border border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
  
        {/* 날짜 및 선택 버튼 */}
        <div className="text-left mb-4">
          <div className="text-lg font-semibold text-gray-700 ml-2 mb-2">2024-10-12, 수요일</div>
          <div className="flex justify-center space-x-4">
            {dates.map((date) => (
                <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`h-10 text-lg rounded-lg flex-grow font-bold${
                    selectedDate === date
                    ? 'bg-purple-100 text-purple-600 shadow-md'
                    : 'bg-white text-gray-500 border border-gray-300'
                }`}
                >
                {date}
                </button>
            ))}
            </div>
        </div>

        
      </div>
    );
  };

  export function MatchDetails() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDetails = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="flex items-center space-x-4 m-3">
        <div className="text-gray-500 font-bold text-base">09:00</div>
        <div className="relative w-full flex flex-col bg-white rounded-lg shadow-lg">
          {/* Collapsible section */}
          <div
            className={`relative transition-all duration-500 ease-in-out transform border-2 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } flex flex-col md:flex-col lg:flex-row items-center justify-between p-2 bg-gray-100 rounded-t-lg ${
              isOpen ? "h-auto" : "h-0 overflow-hidden"
            }`}
          >
            <div></div>
            <div className="text-white bg-gray-500 rounded-lg p-1 lg:hidden">경기 종료</div>


            <div className="flex jusitfy-center items-center">
              {/* 경기 정보 */}
              <div className="flex 
                sm:rounded-lg 
                sm:p-2 
                lg:border-none 
                lg:p-0 
                lg:rounded-none">
                <div className="flex flex-col items-center text-gray-500 space-y-1">
                  <div className="flex items-center space-x-1">
                    <PiSoccerBallFill className="w-4 h-4" />
                    <span className="text-sm">
                      <span className="hidden">17:23</span>
                      <span>헐리펌</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <PiSoccerBallFill className="w-4 h-4" />
                    <span className="text-sm">
                      <span className="hidden">27:05</span>
                      <span>네투</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <PiSoccerBallFill className="w-4 h-4" />
                    <span className="text-sm">
                      <span className="hidden">39:59</span>
                      <span>산초</span>
                    </span>
                  </div>
                </div>
      
                {/* 첼시 승률 원형 차트 */}
                <div className="flex items-center space-x-1 ">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800 mx-5">첼시</span>
                    <div className="relative w-8 h-8 mx-auto">
                      <svg viewBox="0 0 36 36" className="circular-chart blue">
                        <path
                          className="circle-bg"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#eee"
                          strokeWidth="2"
                        />
                        <path
                          className="circle"
                          strokeDasharray="52, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3498db"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">52%</span>
                      </div>
                    </div>
                  </div>
                  <Images
                    src="/images/epl/che.png"
                    alt="첼시 로고"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
    
              <div className="text-sm font-bold mx-1 text-gray-700">VS</div>
    
              <div className="flex 
                sm:rounded-lg 
                sm:p-2 
                lg:border-none 
                lg:p-0 
                lg:rounded-none">
                {/* 토트넘 승률 원형 차트 */}
                <div className="flex items-center space-x-1">
                  <Images
                    src="/images/epl/tot.png"
                    alt="토트넘 로고"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800 mx-5">토트넘</span>
                    <div className="relative w-8 h-8 flex mx-auto">
                      <svg viewBox="0 0 36 36" className="circular-chart red">
                        <path
                          className="circle-bg"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#eee"
                          strokeWidth="2"
                        />
                        <path
                          className="circle"
                          strokeDasharray="48, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e74c3c"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">48%</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                {/* 경기 정보 */}
                <div className="flex flex-col items-center text-gray-500 space-y-1">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">
                      <span className="hidden">17:23</span>
                      <span>솔켐킬</span>
                    </span>
                    <PiSoccerBallFill className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">
                      <span className="hidden">27:05</span>
                      <span>솔켐벨</span>
                    </span>
                    <PiSoccerBallFill className="w-4 h-4" />
                  </div>
                </div>

              </div>

            </div>

            <div className="w-[90%] h-1 border-b-2 border-gray-300 lg:hidden "></div>

            {/* 배팅 정보 */}
            <div className="flex items-center space-x-2">
              <div>
                <Images
                  src="/images/bet365xCurebet.png"
                  className="w-32 h-12"
                  width={258}
                  height={106}
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-center px-2">
                  <div className="text-lg font-bold text-green-600">1</div>
                  <div className="text-lg text-gray-700">2.81</div>
                </div>

                <div className="w-1 h-10 border-r-2 border-gray-300"></div>
                
                <div className="text-center px-2">
                  <div className="text-xl font-bold text-gray-600">x</div>
                  <div className="text-lg text-gray-700">2.53</div>
                </div>

                <div className="w-1 h-10 border-r-2 w-1 border-gray-300"></div>

                <div className="text-center p-2">
                  <div className="text-lg font-bold text-blue-600 px-2">2</div>
                  <div className="text-lg text-gray-700">2.61</div>
                </div>
              </div>
            </div>
          </div>


          
  
          {/* 상단 경기 정보 */}
          <div className="relative flex items-center justify-between hover:scale-[1.05] duration-300 transform">
            {/* Left side image */}
            <div className="relative w-1/2 flex items-center overflow-hidden">
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-50">
                <Images
                  src="/images/logo/EPL로고.png"
                  alt="EPL Logo"
                  className="w-10 h-12"
                  width={45}
                  height={45}
                />
              </div>
              <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2">
                <Images
                  src="/images/epl/che.png"
                  alt="첼시 로고"
                  className="w-10 h-10"
                  width={52}
                  height={52}
                />
              </div>
              <div className="absolute right-44 opacity-50">
                <Images
                  src="/images/epl/che.png"
                  alt="첼시 로고"
                  className="w-14 h-14"
                  width={52}
                  height={52}
                />
              </div>
              <Images
                src="/images/left.png"
                alt="Left"
                className="w-full h-[60px]"
                width={100}
                height={100}
              />
              <div className="absolute top-4 right-20 text-white font-bold text-xl md:text-lg">
                첼시
              </div>
            </div>
  
            {/* Center Lightning Divider */}
            <div className="absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex space-x-20">
                <span className="text-2xl text-red-500 font-bold">4</span>
                <span className="text-2xl text-white font-bold">2</span>
              </div>
            </div>
  
            {/* Right side image */}
            <div className="relative w-1/2 flex items-center overflow-hidden">
              <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2">
                <Images
                  src="/images/epl/tot.png"
                  alt="토트넘 로고"
                  className="w-10 h-10"
                  width={52}
                  height={52}
                />
              </div>
              <div className="absolute left-44 opacity-50">
                <Images
                  src="/images/epl/tot.png"
                  alt="첼시 로고"
                  className="w-14 h-14"
                  width={52}
                  height={52}
                />
              </div>
              <Images
                src="/images/right.png"
                alt="Right"
                className="w-full h-[60px]"
                width={100}
                height={100}
              />
              <div className="absolute top-4 left-20 text-white font-bold text-xl md:text-lg">
                토트넘
              </div>
            </div>
  
            {/* Toggle button */}
            <button
              className="absolute right-4 top-2 text-white"
              onClick={toggleDetails}
            >
              {isOpen ? (
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-sm">간략히</span>
                  <FaArrowDown />
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-sm">자세히</span>
                  <FaArrowUp />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }