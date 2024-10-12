"use client"

import Images from 'next/image'
import { useState, useEffect, useRef } from 'react';

import { 
  PiSoccerBallFill,
  PiSwimmingPool,
} from "react-icons/pi";

import { FaVolleyballBall, FaBowlingBall, FaFootballBall, FaArrowRight, FaRegComments, FaPlayCircle   } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { CiBaseball } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineSportsTennis } from "react-icons/md";
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Home() {

  const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);
  const videoRef = useRef(null);

  const [playerClick, isPlayerClick] = useState(false);

  const [clickedVideo, setClickedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setClickedVideo(video); // 클릭한 비디오 정보를 상태에 저장
  };


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 스크롤 영역 안에 있으면 미니 플레이어 숨기고, 벗어나면 표시
        setIsMiniPlayerVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10%만 보이면 활성화
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="flex justify-center algin-center mt-4">
        <div className="max-w-full h-auto bg-white rounded-lg shadow-lg mb-10">
          {/* 메인 위젯 */}
          <div className="max-w-full mx-auto p-4">

            <div className="text-left m-2">
              <span className="text-medium font-semibold text-gray-900">모든 종목</span>
              <div className="w-8 h-1 bg-gray-900 mt-1"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* 각 카드 */}
              <Card icon={<PiSwimmingPool />}  title="수영" subtitle="국제 대회" color="#559BED"/>
              <Card icon={<FaBasketball />} title="농구" subtitle="NBA, WNBA" color="#F78F54"/>
              <Card icon={<PiSoccerBallFill/>} title="축구" subtitle="EPL" color="#4454FC"/>
              <Card icon={<CiBaseball/>} title="야구" subtitle="MLB, NPB" color="#21C750" />
              <Card icon={<FaVolleyballBall />} title="배구" subtitle="배구 리그" color="#FC0208"/>
              <Card icon={<MdOutlineSportsTennis />} title="테니스" subtitle="테니스 대회" color="#AB38F7"/>
              <Card icon={<FaFootballBall />} title="미식축구" subtitle="NFL 경기" color="#F739AC"/>
              <Card icon={<FaBowlingBall />} title="볼링" subtitle="볼링 대회" color="#C248AD"/>
            </div>

            <div ref={videoRef} className="relative">
              <video width="860" height="480" controls className="rounded-lg mx-auto m-4" autoPlay loop playInline>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
              {/* <Images
                src={"images/goat-player.webp"}
                className="mx-auto m-4"
                width={860}
                height={480}
              /> */}
              {/* 스크롤 시 나타나는 미니 플레이어 */}
              {isMiniPlayerVisible && (
                <div className="fixed bottom-4 right-4 w-128 h-64 bg-gray-900 rounded-lg shadow-lg overflow-hidden z-50">
                  <video width="500px" height="200px" controls autoPlay loop className="rounded-lg">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>

            <div className="text-left m-2">
              <span className="text-medium font-semibold text-gray-900">중계 목록</span>
              <div className="w-8 h-1 bg-gray-900 mt-1"></div>
            </div>

            {/* 각 중계 카드 */}
            <div className="space-y-4">
              {/* 첫 번째 카드 */}
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:scale-[1.05] duration-300 transform">
                <Images src="images/logo/nba_logo.png" alt="NBA Logo" width={15} height={35} />
                <div className="flex items-center space-x-4">
                  {/* 로고와 텍스트 */}
                  <div className="flex flex-col items-center">
                    <Images 
                      src="images/teams/nba_밀워키.png" 
                      alt="Milwaukee Logo" 
                      className="mx-auto"
                      width={30} 
                      height={30} 
                    />
                    <div className="text-sm font-bold text-gray-700">밀워키</div>
                  </div>

                  {/* 승률, 승 W, 패 L */}
                  <div className="hidden lg:block flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-bold text-gray-800">0.780</span>
                      <span>승률</span>
                      <span className="font-bold">64</span> <span>W</span>
                      <span className="font-bold">18</span> <span>L</span>
                    </div>

                    {/* 승률 진행 바 */}
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    
                  </div>
                </div>

                <div className="flex items-center space-x-10">
                  {/* 점수 */}
                  <div className="text-sm font-bold text-orange-600">72</div>
                  
                  <div className="flex flex-col font-semibold text-gray-500">
                    <div>3쿼터</div>
                    <div className="text-center">vs</div>

                  </div>

                  {/* 점수 */}
                  <div className="text-sm font-bold text-gray-600">64</div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* 로고와 텍스트 */}
                  <div className="flex flex-col items-center">
                    <Images 
                      src="images/teams/nba_토론토.png" 
                      alt="Milwaukee Logo" 
                      className="mx-auto"
                      width={30} 
                      height={30} 
                    />
                    <div className="text-sm font-bold text-gray-700">밀워키</div>
                  </div>

                  {/* 승률, 승 W, 패 L */}
                  <div className="hidden lg:block flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-bold text-gray-800">0.780</span>
                      <span>승률</span>
                      <span className="font-bold">64</span> <span>W</span>
                      <span className="font-bold">18</span> <span>L</span>
                    </div>

                    {/* 승률 진행 바 */}
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    
                  </div>
                </div>
                <button className="text-white bg-pink-200 rounded-lg px-4 py-1"><FaPlayCircle /></button>
              </div>

              {/* 첫 번째 카드 */}
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:scale-[1.05] duration-300 transform">
                <Images src="images/logo/nba_logo.png" alt="NBA Logo" width={15} height={35} />
                <div className="flex items-center space-x-4">
                  {/* 로고와 텍스트 */}
                  <div className="flex flex-col items-center">
                    <Images 
                      src="images/teams/nba_밀워키.png" 
                      alt="Milwaukee Logo" 
                      className="mx-auto"
                      width={30} 
                      height={30} 
                    />
                    <div className="text-sm font-bold text-gray-700">밀워키</div>
                  </div>

                  {/* 승률, 승 W, 패 L */}
                  <div className="hidden lg:block flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-bold text-gray-800">0.780</span>
                      <span>승률</span>
                      <span className="font-bold">64</span> <span>W</span>
                      <span className="font-bold">18</span> <span>L</span>
                    </div>

                    {/* 승률 진행 바 */}
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    
                  </div>
                </div>

                <div className="flex items-center space-x-10">
                  {/* 점수 */}
                  <div className="text-sm font-bold text-orange-600">72</div>
                  
                  <div className="flex flex-col font-semibold text-gray-500">
                    <div>3쿼터</div>
                    <div className="text-center">vs</div>

                  </div>

                  {/* 점수 */}
                  <div className="text-sm font-bold text-gray-600">64</div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* 로고와 텍스트 */}
                  <div className="flex flex-col items-center">
                    <Images 
                      src="images/teams/nba_토론토.png" 
                      alt="Milwaukee Logo" 
                      className="mx-auto"
                      width={30} 
                      height={30} 
                    />
                    <div className="text-sm font-bold text-gray-700">밀워키</div>
                  </div>

                  {/* 승률, 승 W, 패 L */}
                  <div className="hidden lg:block flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-bold text-gray-800">0.780</span>
                      <span>승률</span>
                      <span className="font-bold">64</span> <span>W</span>
                      <span className="font-bold">18</span> <span>L</span>
                    </div>

                    {/* 승률 진행 바 */}
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    
                  </div>
                </div>
                <button className="text-white bg-pink-200 rounded-lg px-4 py-1"><FaPlayCircle /></button>
              </div>

              {/* 첫 번째 카드 */}
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:scale-[1.05] duration-300 transform">
                <Images src="images/logo/nba_logo.png" alt="NBA Logo" width={15} height={35} />
                <div className="flex items-center space-x-4">
                  {/* 로고와 텍스트 */}
                  <div className="flex flex-col items-center">
                    <Images 
                      src="images/teams/nba_밀워키.png" 
                      alt="Milwaukee Logo" 
                      className="mx-auto"
                      width={30} 
                      height={30} 
                    />
                    <div className="text-sm font-bold text-gray-700">밀워키</div>
                  </div>

                  {/* 승률, 승 W, 패 L */}
                  <div className="hidden lg:block flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-bold text-gray-800">0.780</span>
                      <span>승률</span>
                      <span className="font-bold">64</span> <span>W</span>
                      <span className="font-bold">18</span> <span>L</span>
                    </div>

                    {/* 승률 진행 바 */}
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    
                  </div>
                </div>

                <div className="flex items-center space-x-10">
                  {/* 점수 */}
                  <div className="text-sm font-bold text-orange-600">72</div>
                  
                  <div className="flex flex-col font-semibold text-gray-500">
                    <div>3쿼터</div>
                    <div className="text-center">vs</div>

                  </div>

                  {/* 점수 */}
                  <div className="text-sm font-bold text-gray-600">64</div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* 로고와 텍스트 */}
                  <div className="flex flex-col items-center">
                    <Images 
                      src="images/teams/nba_토론토.png" 
                      alt="Milwaukee Logo" 
                      className="mx-auto"
                      width={30} 
                      height={30} 
                    />
                    <div className="text-sm font-bold text-gray-700">밀워키</div>
                  </div>

                  {/* 승률, 승 W, 패 L */}
                  <div className="hidden lg:block flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-bold text-gray-800">0.780</span>
                      <span>승률</span>
                      <span className="font-bold">64</span> <span>W</span>
                      <span className="font-bold">18</span> <span>L</span>
                    </div>

                    {/* 승률 진행 바 */}
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded" style={{ width: '75%' }}></div>
                    </div>
                    
                  </div>
                </div>
                <button className="text-white bg-pink-200 rounded-lg px-4 py-1"><FaPlayCircle /></button>
              </div>

              
            </div>

            

          </div>
        </div>

        <div className="hidden xl:block max-w-5xl h-[800px] bg-white rounded-lg shadow-lg ml-2 space-y-2">

          {/* 전광판 */}
          <div className="w-[350px] h-[200px] bg-black rounded-lg mx-auto mt-2">
            <video 
              className="w-full h-full"
              src={"/images/wildslot.mp4"}
              autoPlay
              loop
              playInline
              muted
            >
            </video>
          </div>

          {/* 채팅 */}
          <div className="mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* 채팅 제목 */}
            <div className="px-4 py-2 bg-white border border-gray-300 flex items-center space-x-2">
              <div className="font-bold text-lg text-gray-600">Live Chat</div>
              <div className="text-xs text-gray-500">[ 접속중: 1325 ]</div>
            </div>

            {/* 채팅 메시지 영역 */}
            <div className="p-4 space-y-3 overflow-y-auto h-100 border bg-[#F8F5F5]">
              
              {/* 메시지 1 */}
              <div className="flex items-start space-x-2">
                <Images 
                  src="images/chatusers/강아지.png" 
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
                  src="images/chatusers/강아지.png" 
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
                    src="images/effects/money-l.png" 
                    alt="포인트 당첨" 
                    className="w-48 h-24" 
                    width={213}
                    height={165}
                  />
                  <Images 
                    src="images/effects/money-r.png" 
                    alt="포인트 당첨" 
                    className="w-48 h-24" 
                    width={213}
                    height={165}
                  />
                </div>
              </div>

              {/* 메시지 2 */}
              <div className="flex items-start space-x-2">
                <Images 
                  src="images/chatusers/지수.jpg" 
                  alt="user1" 
                  className="w-5 h-5 rounded-full" 
                  width={20}
                  height={20}
                />
                <div>
                  <div className="flex space-x-2 ">
                    <div className="text-sm font-semibold text-gray-700">지수</div>
                    <div className="text-xs text-gray-500">11:13:14</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 p-2 rounded-lg text-sm text-gray-700">와 개억까임...</div>

              {/* 메시지 2 */}
              <div className="flex items-start space-x-2">
                <Images 
                  src="images/chatusers/강아지.png" 
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

      <div className="w-full flex justify-center items-center">
        <SportsEventBanner />
      </div>
      <div className="m-4"></div>
      <SportsHighlights onVideoClick={handleVideoClick}  />
      <div className="m-4"></div>
      <SportsDashboard />
      <div className="m-4"></div>
      <VideoPlayer video={clickedVideo} handleVideoClick={handleVideoClick} />

    </div>
  );
}

// Card 컴포넌트
const Card = ({ icon, title, subtitle, color }) => {

  const backgroundColorWithOpacity = `${color}2A`; 

  return (
    <div className="bg-white rounded-lg shadow-md p-1 flex items-center space-x-4 transform transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="rounded-lg p-2 w-auto h-auto" style={{ backgroundColor: backgroundColorWithOpacity }}>
        <div className="text-2xl" style={{ color: color }}>{icon}</div>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        <p className="text-xs font-basic text-gray-500 truncate">{subtitle}</p>
      </div>
    </div>
  );
};

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
    <div className="relative w-full 2xl:w-[1550px] h-[300px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
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

const SportsHighlights = ({ onVideoClick }) => {



  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* 제목 영역 */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-left m-2">
          <span className="text-medium font-semibold text-gray-900">스포츠 하이라이트</span>
          <div className="w-8 h-1 bg-gray-900 mt-1"></div>
        </div>
        <Link href="#" className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition">더보기 <FaArrowRight className="ml-2"/></Link>
      </div>

      {/* 카드 슬라이더 */}
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
        <Swiper
              // Swiper 설정
              spaceBetween={10}
              slidesPerView={6} // 한 번에 보일 카드 수
              pagination={{ clickable: true }} // 하단 페이지네이션 버튼
              // autoplay={{
              //     delay: 3000, // 3초마다 자동 슬라이드
              //     disableOnInteraction: false, // 드래그 후에도 자동 슬라이드 유지
              // }}
              
              modules={[Pagination, Navigation]} // 필요한 모듈들
              breakpoints={{
                1920: {
                  slidesPerView: 6.8,
                },
                1440: {
                  slidesPerView: 5.8,
                },
                // 1024px 이상일 때
                1024: {
                  slidesPerView: 4.5, // 6개의 슬라이드
                },
                // 768px 이상일 때
                768: {
                  slidesPerView: 2.5, // 5개의 슬라이드
                },
                // 640px 이상일 때
                640: {
                  slidesPerView: 3, // 3개의 슬라이드
                },
                // 기본(640px 이하)일 때
                320: {
                  slidesPerView: 2, // 1개의 슬라이드
                },
              }}
          >
            {['short1', 'short2', 'short3', 'short4', 'short5', 'short6'].map((short, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => onVideoClick(short)}
                  className="relative min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)} // hover 이벤트 설정
                  onMouseLeave={() => setHoveredIndex(null)}  // hover 해제 시 상태 초기화
                  
                >
                  {hoveredIndex === index ? (
                    // Hover 시 동영상 재생
                    <video
                      className="w-full h-[330px] object-cover object-center"
                      src={`videos/${short}.mp4`}
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
                        : '하이라이트 ' + (index + 1)}
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
          {/* <div className="relative min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden">
            
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

          </div> */}

        </div>
      </div>
    </div>
  );
}

export const SportsDashboard = () => {
  return (
    <div className="w-full mx-auto p-2">
      {/* 기본적으로 flex-col(위아래), md 이상에서는 flex-row(좌우)로 변경 */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* 스포츠 분석 */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          {/* 제목 영역 */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-left m-2">
              <span className="text-medium font-semibold text-gray-900">스포츠 분석</span>
            </div>
            <Link href="#" className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition">더보기 <FaArrowRight className="ml-2"/></Link>
          </div>
          <ul className="space-y-4">
            {[
              { category: '야구', title: '야구대장 ⭐오후야구 최대연승: 조합공유⭐', comments: 30, likes: 14, time: '4시간 전' },
              { category: '축구', title: '차두리해설 419배 적중 후 고배당픽 공유', comments: 27, likes: 11, time: '8시간 전' },
              { category: '야구', title: '⚾픽주단에 한장 적중 고맙망요!', comments: 20, likes: 7, time: '10시간 전' },
              { category: '야구', title: '9월 28일 텍사스 선발 및 결정', comments: 7, likes: 1, time: '1일 전' },
              { category: '축구', title: '한팀동 09/27 ~ 09/28 축구 결정자', comments: 9, likes: 5, time: '1일 전' },
              { category: '농구', title: '새벽 복구픽 공유 ❤️❤️❤️', comments: 12, likes: 5, time: '1일 전' },
            ].map((item, index) => (
              <Link href="/board/detail" key={index} className="flex justify-between items-center  hover:scale-[1.05] duration-300 transform">
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-lg text-white ${item.category === '야구' ? 'bg-blue-500' : item.category === '축구' ? 'bg-red-500' : 'bg-green-500'}`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-700 truncate max-w-xs">{item.title}</span> {/* 제목에 길이 제한 */}
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500"> {/* 고정된 간격을 위한 space-x-6 */}
                  <span className="flex items-center space-x-1 w-12"> {/* 고정된 너비 */}
                    <FaRegComments />
                    <span>{item.comments}</span>
                  </span>
                  <span className="flex items-center space-x-1 w-12"> {/* 고정된 너비 */}
                    <AiOutlineLike />
                    <span>{item.likes}</span>
                  </span>
                  <span className="w-20 text-right">{item.time}</span> {/* 시간은 오른쪽 정렬 및 고정 너비 */}
                </div>
              </Link>
            ))}
          </ul>
        </div>

        {/* 스포츠 뉴스 */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          {/* 제목 영역 */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-left m-2">
              <span className="text-medium font-semibold text-gray-900">스포츠 뉴스</span>
            </div>
            <Link href="#" className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition">더보기 <FaArrowRight className="ml-2"/></Link>
          </div>
          <ul className="space-y-4">
            {[
              { image: '/images/sports-news/news1.png', title: '벌써 3호골 이강인 진짜 미쳤다', description: '이강인 스타트 레전드...', source: '스포츠조선 • 해외축구 일반' },
              { image: '/images/sports-news/news2.png', title: '문동주-김서현 있는 "파이어볼러" 정우준 계약금 5억원 도장', description: '신인 드래프트에 ...', source: '스포츠클리어리 • KBO리그' },
              { image: '/images/sports-news/news3.png', title: '55:55 논쟁 오타니 57도루로 이치로 넘고 신규 기록', description: '2024 시즌 도중...', source: '메이저리그' },
            ].map((item, index) => (
              <li key={index} className="flex space-x-4 hover:scale-[1.05] duration-300 transform">
                <img src={item.image} alt={item.title} className="w-24 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                  <span className="text-xs text-gray-400">{item.source}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { FaXmark } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
const VideoPlayer = ({ video, handleVideoClick }) => {
  const [translateY, setTranslateY] = useState(0);

  const handleNextVideo = () => {
    const videoNumber = parseInt(video.replace('short', '')); // "short5"에서 숫자 추출
    const nextVideo = `short${videoNumber + 1}`; // 숫자를 1 증가시켜 다음 비디오
    setTranslateY(150); // 아래로 이동 애니메이션 시작
    setTimeout(() => {
      setTranslateY(0); // 애니메이션 복구
      handleVideoClick(nextVideo); // 다음 비디오로 전환
    }, 500);
  };

  const handlePrevVideo = () => {
    const videoNumber = parseInt(video.replace('short', '')); // "short5"에서 숫자 추출
    const prevVideo = `short${videoNumber - 1}`; // 숫자를 1 증가시켜 이전 비디오
    setTranslateY(-150); // 위로 이동 애니메이션 시작
    setTimeout(() => {
      setTranslateY(0); // 애니메이션 복구
      handleVideoClick(prevVideo); // 이전 비디오로 전환
    }, 500);
  };

  // 외부 클릭 시 비디오 닫기 핸들러
  const handleOutsideClick = (e) => {
    if (e.target.id === 'videoPlayerOverlay') {
      handleVideoClick(null); // 비디오 외부 클릭 시 비디오 닫기
    }
  };

  if (!video) {
    return null; // 비디오가 없으면 아무것도 렌더링하지 않음
  }

  return (
    <>
      {video ? (
        // 비디오 외부 영역
        <div
          id="videoPlayerOverlay"
          onClick={handleOutsideClick} // 외부 영역 클릭 시 비디오 닫기
          className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
        >
          {/* 비디오 영역 */}
          <div
            className="relative bg-black p-4 bg-opacity-50 rounded-lg"
            onClick={(e) => e.stopPropagation()} // 비디오 클릭 시 이벤트 버블링 방지
            style={{
              transform: `translateY(${translateY}%)`, // translateY로 Y축 이동 애니메이션 적용
              transition: 'transform 0.5s ease', // 애니메이션 지속 시간과 타이밍 함수 설정
            }}
          >
            <div className="relative w-[300px] h-[533px]">
              <video
                className="w-full h-full object-cover rounded-lg"
                src={`/videos/${video}.mp4`} // 비디오 경로
                controls
                autoPlay
                playsInline
              />
            </div>

            {/* 오른쪽의 아이콘 리스트 */}
            <div className="absolute top-0 right-[-110px] h-full flex flex-col justify-center space-y-6 text-white">
              <div className="flex flex-col items-center space-x-1 rounded-full bg-gray-700 p-2 px-8">
                <span className="text-2xl"><AiFillLike className="text-white"/></span> <span>8.1천</span>
              </div>
              <div className="flex flex-col items-center space-x-1 rounded-full bg-gray-700 p-2">
                <span className="text-2xl"><AiFillDislike className="text-white"/></span> <span>8.1천</span>
              </div>
              <div className="flex flex-col items-center space-x-1 rounded-full bg-gray-700 p-2">
              <span className="text-2xl"><FaCommentAlt  className="text-white"/></span> <span>8.1천</span>
              </div>
              <div className="flex flex-col items-center space-x-1 rounded-full bg-gray-700 p-2">
              <span className="text-2xl"><FaShareAlt  className="text-white"/></span> <span>8.1천</span>
              </div>
              <div className="flex flex-col items-center space-x-1 rounded-full bg-gray-700 p-2">
              <span className="text-2xl"><FaCloudDownloadAlt  className="text-white"/></span> <span>8.1천</span>
              </div>
            </div>

            {/* 닫기 버튼 */}
            <button
              onClick={() => handleVideoClick(null)}
              className="absolute top-2 right-2 bg-gray-600 text-white p-2 rounded-full z-50"
            >
              <FaXmark className="text-white" />
            </button>
          </div>

          {/* 위로/아래로 버튼 */}
          <div className="absolute right-2 top-[40%] text-white p-2 m-6 z-80 flex flex-col space-y-4">
            {/* 이전 비디오로 이동 버튼 */}
            <button
              className="rounded-full bg-gray-500 p-6"
              onClick={handlePrevVideo}
            >
              <FaArrowUp className="text-white" />
            </button>

            {/* 다음 비디오로 이동 버튼 */}
            <button
              className="rounded-full bg-gray-500 p-6"
              onClick={handleNextVideo}
            >
              <FaArrowDown className="text-white" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};