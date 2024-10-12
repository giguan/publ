"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight, FaRegComments } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SportAnalyze = () => { 
    return (
        <div className="w-4/5 h-auto mx-auto mt-4">
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

                            <div>
                                <Images
                                    className="rounded-lg"
                                    src={'/images/goat-banner.gif'}
                                    width={550}
                                    height={56}
                                />
                            </div>

                        </div>


                    </div>

                    <SportsDashboard/>
                    <div className="m-4"></div>

                    <LeagueTabs/>
                    <EPLTabs/>
                    <MatchPreview />

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

export default SportAnalyze;

import { PiStudentFill } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

export const SportsDashboard = () => {
    return (
      <div className="max-w-full 2xl:w-[1100px] mx-auto p-2">
        {/* 기본적으로 flex-col(위아래), lg 이상에서는 flex-row(좌우)로 변경 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 전문가 컬럼 */}
          <div className="flex-1 rounded-lg shadow-md border p-4 bg-white">
            {/* 제목 영역 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2 items-center text-left m-2">
                <PiStudentFill className="w-6 h-6 text-gray-700" />
                <span className="text-medium font-semibold text-gray-900">
                  전문가 컬럼
                </span>
              </div>
              <Link
                href="#"
                className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition"
              >
                더보기 <FaArrowRight className="ml-2" />
              </Link>
            </div>
            {/* 전문가 리스트 그리드 */}
            <div className="grid grid-cols-2 gap-4">
              {[ 
                { name: "픽주는강아지", role: "LCK 전문가", image: "/images/users-profile/강아지.jpg", description: "LCK, LPL, LCS 분석가" },
                { name: "현아", role: "LCK 전문가", image: "/images/users-profile/강직원.jpg", description: "LCK, LPL, LCS 분석가" },
                { name: "홍아저씨", role: "LCK 전문가", image: "/images/users-profile/지수.jpg", description: "LCK, LPL, LCS 분석가" },
                { name: "픽주는고양이", role: "LCK 전문가", image: "/images/users-profile/현아.jpg", description: "LCK, LPL, LCS 분석가" },
                { name: "현아", role: "LCK 전문가", image: "/images/users-profile/강직원.jpg", description: "LCK, LPL, LCS 분석가" },
                { name: "홍아저씨", role: "LCK 전문가", image: "/images/users-profile/지수.jpg", description: "LCK, LPL, LCS 분석가" },
              ].map((item, index) => (
                <div key={index} className="flex space-x-4 items-center p-2 border rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center space-x-1">
                        <h3 className="text-sm font-bold text-gray-800 truncate">{item.name}</h3>
                        <p className="text-[8px] text-gray-500">| {item.role}</p>
                    </div>

                <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* 회원 컬럼 */}
          <div className="flex-1 bg-white rounded-lg border shadow-md p-4">
            {/* 제목 영역 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2 items-center text-left m-2">
                <FaPen className="w-6 h-6 text-gray-700" />
                <span className="text-medium font-semibold text-gray-900">
                  회원 컬럼
                </span>
              </div>
              <Link
                href="#"
                className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition"
              >
                더보기 <FaArrowRight className="ml-2" />
              </Link>
            </div>
            {/* 회원 컬럼 목록 */}
            <ul className="space-y-4">
              {[
                { title: "야구대장⭐ 오후야구 최다연승", votes: 30, comments: 14 },
                { title: "차두리 해설 491배 적중 후 공유", votes: 30, comments: 14 },
                { title: "픽주는아재 승급기념 유료픽 공유", votes: 30, comments: 14 },
                { title: "새벽 복구픽 원금회복하고 다시 도전!", votes: 30, comments: 14 },
                { title: "새벽 복구픽 원금회복하고 다시 도전222!", votes: 30, comments: 14 }
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center p-2">
                  <div className="flex items-center space-x-4">
                    <FaCrown className="w-6 h-6 text-gray-500" />
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="text-gray-500 flex items-center">
                      <FaThumbsUp className="w-4 h-4 mr-1" /> {item.votes}
                    </div>
                    <div className="text-gray-500 flex items-center">
                      <FaComment className="w-4 h-4 mr-1" /> {item.comments}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

const EPLTabs = () => {
const [activeTab, setActiveTab] = useState('맨시티');

const teams = [
    { name: 'LA', image: '/images/epl/뉴캐슬 유나이티드 FC.png' },
    { name: 'LA', image: '/images/epl/레스터 시티 FC.png' },
    { name: 'Angels', image: '/images/epl/리버풀 FC.png' },
    { name: '맨시티', image: '/images/epl/맨체스터 시티 F.C.png' },
    { name: 'Padres', image: '/images/epl/맨체스터 U.F.C.png' },
    { name: 'Phillies', image: '/images/epl/브라이튼 F.C.png' },
    { name: 'Marlins', image: '/images/epl/브렌트포드 F.C.png' },
    { name: 'RedSox', image: '/images/epl/사우샘프턴 F.C.png' },
    { name: 'Giants', image: '/images/epl/아스날 FC.png' },
    { name: 'Diamondbacks', image: '/images/epl/아스톤빌라FC.png' },
    { name: 'Brewers', image: '/images/epl/에버튼 FC.png' },
    { name: 'Pirates', image: '/images/epl/울버햄튼F.C.png' },
    { name: 'Pirates', image: '/images/epl/웨스트햄F.C.png' },
    { name: 'Pirates', image: '/images/epl/입스위치 타운 F.C.png' },
    { name: 'Pirates', image: '/images/epl/첼시 FC.png' },
    { name: 'Pirates', image: '/images/epl/크리스탈팰리스 F.C.png' },
    { name: 'Pirates', image: '/images/epl/토트넘 F.C.png' },
    { name: 'Pirates', image: '/images/epl/풀럼 FC.png' },
];

return (
    <div className="flex items-center justify-center  rounded-lg">


    {/* Teams */}
    {teams.map((team) => (
        <button
        key={team.name}
        onClick={() => setActiveTab(team.name)}
        className={`p-2 md:w-8 md:h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg ${
            activeTab === team.name ? 'border-2 border-purple-600' : 'border-t border-l border-r '
        }`}
        >
        <Images src={team.image} alt={team.name} width={40} height={40} className="object-contain" />
        </button>
    ))}
    </div>
);
};

const LeagueTabs = () => {
    const [activeTab, setActiveTab] = useState('EPL');
  
    const leagues = [
      { name: 'EPL', image: '/images/logo/epl.png', text: 'EPL' },
      { name: 'Serie A', image: '/images/logo/세리에.png', text: '세리에A' },
      { name: 'Bundesliga', image: '/images/logo/분데스리가.png', text: '분데스리가' },
      { name: 'La Liga', image: '/images/logo/라리가.png', text: '라리가' },
      { name: 'Ligue 1', image: '/images/logo/리그1.png', text: '리그 1' },
    ];
  
    return (
      <div className="flex items-center justify-center p-4 ml-5">
        {/* League Tabs */}
        <div className="flex space-x-4">
          {leagues.map((league) => (
            <button
              key={league.name}
              onClick={() => setActiveTab(league.name)}
              className={`flex items-center justify-center p-2 border text-gray-600 font-bold ${
                activeTab === league.name ? 'border-2 border-black rounded-lg' : 'border border-gray-300'
              } rounded-lg transition-all duration-300`}
            >
              <Images
                src={league.image}
                alt={league.name}
                className="w-6 h-6 md:w-8 md:h-8"
                width={100}
                height={100}
              />
              <span className="text-sm ml-2 hidden md:block">{league.text}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };
  

export const MatchPreview = () => {
    const [activeTab, setActiveTab] = useState("전력");
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    const tabs = ["전체", "전력", "상대전적", "세부득점", "공격력", "수비력", "포메이션"];
  
    return (
        <div className="relative flex-col justify-between items-center p-4 rounded-lg">
            <div className="relative w-full mx-auto flex justify-between items-center">
                {/* 좌측 팀 로고 */}
                <div className="flex flex-col items-center ml-10 z-20">
                    <img
                        src="/images/epl/맨체스터 시티 F.C.png"
                        alt="맨시티 로고"
                        className="w-20 h-20"
                        width={100}
                        height={100}
                    />
                    <span className="text-xl font-semibold text-purple-700">맨시티</span>
                </div>

                {/* 중앙 시간 */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="p-4 border-l-2 border-b-2 border-r-2 border-gray-300 text-center bg-white rounded-b-lg">
                        <span className="text-4xl font-bold text-purple-700">21:00</span>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bottom-6 z-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="890" height="58" viewBox="0 0 890 58" fill="none">
                        <rect x="445.427" width="444.573" height="58" fill="#E7E7E7"/>
                        <rect width="444.573" height="58" fill="#72A2C9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M304.374 0C304.705 2.34295 305.474 4.6605 306.711 6.83321L335.862 58H303.24C302.902 55.6868 302.137 53.3998 300.915 51.2541L271.714 0H304.374ZM346.877 0L376.077 51.2541C377.3 53.3998 378.064 55.6868 378.402 58H411.026L381.875 6.83321C380.637 4.6605 379.869 2.34295 379.537 0H346.877ZM832.855 6.83321C831.617 4.6605 830.848 2.34295 830.517 0H797.856L827.056 51.2541C828.279 53.3998 829.043 55.6868 829.381 58H862.005L832.855 6.83321ZM889.146 28.3063L873.02 0H889.146V28.3063ZM755.353 0C755.684 2.34295 756.453 4.6605 757.69 6.83321L786.841 58H754.219C753.881 55.6868 753.116 53.3998 751.894 51.2541L722.693 0H755.353ZM682.528 6.83321C681.29 4.6605 680.521 2.34295 680.19 0H647.53L676.73 51.2541C677.953 53.3998 678.718 55.6868 679.056 58H711.679L682.528 6.83321ZM605.027 0C605.358 2.34295 606.127 4.6605 607.365 6.83321L636.516 58H603.893C603.555 55.6868 602.79 53.3998 601.567 51.2541L572.367 0H605.027ZM532.202 6.83321C530.964 4.6605 530.195 2.34295 529.864 0H497.203L526.404 51.2541C527.626 53.3998 528.391 55.6868 528.729 58H561.352L532.202 6.83321ZM454.701 0C455.032 2.34295 455.8 4.6605 457.038 6.83321L486.189 58H453.566C453.228 55.6868 452.463 53.3998 451.241 51.2541L422.04 0H454.701ZM229.211 0C229.542 2.34295 230.311 4.6605 231.549 6.83321L260.7 58H228.076C227.738 55.6868 226.973 53.3998 225.751 51.2541L196.551 0H229.211ZM156.385 6.83321C155.147 4.6605 154.379 2.34295 154.048 0H121.387L150.587 51.2541C151.81 53.3998 152.575 55.6868 152.913 58H185.536L156.385 6.83321ZM78.8841 0C79.2154 2.34295 79.9839 4.6605 81.2217 6.83321L110.372 58H77.7323C77.3945 55.6868 76.6297 53.3998 75.4072 51.2541L46.2068 0H78.8841ZM6.04157 6.83321C4.80373 4.6605 4.03518 2.34295 3.70392 0H0V58H35.1922L6.04157 6.83321Z" fill="#D9D9D9" fill-opacity="0.6"/>
                    </svg>
                </div>

                {/* 우측 팀 로고 */}
                <div className="flex flex-col items-center mr-10 z-20">
                    <img
                        src="/images/epl/풀럼 FC.png"
                        alt="풀햄 로고"
                        className="w-20 h-20"
                        width={100}
                        height={100}
                    />
                    <span className="text-xl font-semibold text-red-700">풀햄</span>
                </div>

                
            </div>

            {/* 탭 메뉴 */}
            <div className="flex justify-center mt-6 space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 ${
                            activeTab === tab
                                ? "bg-white border-b-4 border-purple-700 text-purple-500"
                                : "text-gray-600"
                        } font-semibold text-sm`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* 팀 전력 비교 */}
            <div className="mt-6 bg-white rounded-lg border-2 m-4 shadow-md p-2">
                <div className="flex justify-evenly items-center mb-6 border-b-2 border-gray-300">
                    {/* 좌측 팀 */}
                    <div className="flex flex-col justify-evenly items-center">
                        <img
                            src="/images/epl/맨체스터 시티 F.C.png"
                            alt="맨시티 로고"
                            className="w-12 h-12"
                            width={100}
                            height={100}
                        />
                        <span className="font-bold text-purple-700">맨시티</span>
                    </div>

                    

                    {/* 우측 팀 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/epl/풀럼 FC.png"
                            alt="풀햄 로고"
                            className="w-12 h-12"
                            width={100}
                            height={100}
                        />
                        <span className="font-bold text-red-700">풀햄</span>
                    </div>
                </div>

                <div className="w-full grid grid-cols-3 items-center gap-4">
                    {/* Left side: Team A wins and stats */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                            <div className="bg-purple-700 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <div className="text-sm text-gray-600 text-right">
                            <span>19 Total Wins</span>
                        </div>
                        </div>

                        <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                            <div className="bg-purple-700 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <div className="text-sm text-gray-600 text-right">
                            <span>9 Home</span>
                        </div>
                        </div>

                        <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                            <div className="bg-purple-700 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                        <div className="text-sm text-gray-600 text-right">
                            <span>9 Away</span>
                        </div>
                        </div>
                    </div>

                    {/* Center: Match Info */}
                    <div className="text-center">
                        <span className="text-2xl font-bold text-gray-700">경기 수</span>
                        <div className="text-5xl font-bold text-purple-700">32</div>
                        <span className="text-sm text-gray-500">무승부 9</span>
                    </div>

                    {/* Right side: Team B wins and stats */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-600 text-left">
                            <span>Total Wins 4</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                            <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        </div>

                        <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-600 text-left">
                            <span>Home 1</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                            <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        </div>

                        <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-600 text-left">
                            <span>Away 3</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                            <div className="bg-red-700 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        </div>
                    </div>
                    </div>

                {/* 더보기 버튼 */}
                <div className="mt-4 text-center">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md"
                        onClick={toggleMore}
                    >
                        {isExpanded ? "간략히 보기" : "더보기"}
                    </button>
                </div>

                {/* 추가 정보 (더보기 클릭 시 표시) */}
                {isExpanded && (
                    <div className="mt-6">
                        <p className="text-sm text-gray-600">
                            여기에는 더 많은 정보를 제공할 수 있습니다. 이 공간에 경기
                            전력, 자세한 통계, 선수별 기록 등을 포함할 수 있습니다.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};