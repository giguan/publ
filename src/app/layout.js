"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Images from 'next/image';
import localFont from "next/font/local";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Banner from "./components/common/Banner";
import Footer from "./components/common/Footer";
import Roulette from "./components/common/Roulette/page";

import './globals.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MdOutlineCancel } from "react-icons/md";
// RootLayout 컴포넌트
export default function RootLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // 로그인 모달 상태

  const [loginCheck, setLoginCheck] = useState(false);

  const handleLogin = () => {
    showSuccessMessage("환영합니다.")
    setIsLoginOpen(false)
    setLoginCheck(true)
  }

  const handleLogout = () => {
    showSuccessMessage('로그아웃이 완료되었습니다.')
    setIsInfoOpen(false)
    setLoginCheck(false)
  }

  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const [isRouletteOpen, setIsRouletteOpen] = useState(false);

  const handleRoulette = () => {
  }

  const showSuccessMessage = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to display an error toast
  const showErrorMessage = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // 사이드바 열릴 때 메인 화면 스크롤 비활성화
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer />
        <Header setIsOpen={setIsOpen} setIsLoginOpen={setIsLoginOpen} loginCheck={loginCheck} setIsInfoOpen={setIsInfoOpen}/>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="bg-[#F2F2F2]">
          <div className="w-full flex justify-center bg-purple-300 bg-opacity-30">
            <div className="flex justify-center items-center w-[80%]">
              <Banner />
            </div>
          </div>
          <main className="w-[80vw] mx-auto flex justify-center align-center">
            {children}
          </main>
        </div>
        <Footer />

        {isLoginOpen && (
          <div 
            className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsLoginOpen(false)} // 모달 외부를 클릭했을 때 모달 닫기
          >
            {/* 모달 박스 */}
            <div
              className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-lg p-6 mx-auto"
              onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭했을 때 닫히지 않도록 함
            >
              <div className="w-full flex justify-end" onClick={() => setIsLoginOpen(false)}>
                <MdOutlineCancel 
                  className="text-gray-700 w-8 h-8 cursor-pointer transform transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-125"
                />
              </div>
              <div className="space-y-4 m-4">
                <Images
                  width={400}
                  height={100}
                  src="/images/logo2.png"
                  className="mx-auto w-32"
                />
                <h2 className="text-center text-xl font-semibold mb-4 text-gray-500">로그인</h2>
              </div>
              <div className="flex flex-col mb-6">
                <input
                  type="email"
                  placeholder="이메일"
                  className="border rounded-lg p-2 mb-4 text-gray-500"
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="border rounded-lg p-2 text-gray-500"
                />
              </div>
              <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-lg">
                로그인
              </button>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-gray-500 text-sm">비밀번호 재설정</a>
                <a href="#" className="text-gray-500 text-sm">회원가입</a>
              </div>
              <div className="flex justify-center mt-6 space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                  <img src="/images/sns/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                  <img src="/images/sns/kakaotalk.png" alt="KakaoTalk" className="w-6 h-6" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center">
                  <img src="/images/sns/instagram.png" alt="Naver" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}


        {isInfoOpen && (
          <div 
            className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsInfoOpen(false)} // 모달 외부를 클릭했을 때 모달 닫기
          >
            {/* 모달 박스 */}
            <div
              className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-lg p-6 mx-auto max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // 모달 내부를 클릭했을 때 닫히지 않도록 함
            >
              {/* 닫기 버튼 */}
              <div className="w-full flex justify-end" onClick={() => setIsInfoOpen(false)}>
                <MdOutlineCancel 
                  className="text-gray-700 w-8 h-8 cursor-pointer transform transition-transform duration-300 ease-in-out hover:rotate-90 hover:scale-125"
                />
              </div>

              {/* 프로필 정보 */}
              <div className="text-center">
                <Images
                  width={100}
                  height={100}
                  src="/images/users-profile/강아지.jpg" // 프로필 이미지
                  className="mx-auto rounded-full"
                />
                <h2 className="text-2xl font-semibold mt-2 text-gray-500">강아지<span className='ml-2 text-sm'>님</span></h2> {/* 닉네임 */}
                <p className="text-sm text-gray-500">Level 5 </p> {/* 레벨, 등급 정보 */}
                
                {/* 로그아웃 & 출석체크 버튼 */}
                <div className="flex justify-center space-x-4 mt-4">
                  <button onClick={handleLogout} className="bg-gray-500 text-white py-2 px-4 rounded-lg">로그아웃하기</button>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg">출석체크하기</button>
                </div>
              </div>

              {/* 포인트 현황 */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-500">포인트 현황</h3>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="text-xl font-bold text-blue-500">1,250 P</span> {/* 포인트 */}
                  <span className="text-sm text-gray-500">최대 2,000 P까지 적립 가능</span>
                </div>
              </div>

              {/* 룰렛권 & 룰렛 돌리기 */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-500">보유 룰렛권</h3>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="text-xl font-bold text-blue-500">3 개</span> {/* 보유 룰렛권 */}
                  <button onClick={()=>setIsRouletteOpen(true)} className="bg-yellow-500 text-white py-2 px-4 rounded-lg">룰렛 돌리기</button> {/* 룰렛 돌리기 */}
                </div>
              </div>

              {/* 작성한 게시글 수 */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-500">내가 작성한 게시글</h3>
                <p className="text-center text-gray-700 text-2xl">15 개</p> {/* 작성한 게시글 수 */}
              </div>

              {/* 참여 중인 이벤트 */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-500">참여 이벤트</h3>
                <ul className="space-y-2">
                  <li className="p-3 bg-gray-100 rounded-lg text-gray-500">신규가입 이벤트</li>
                  <li className="p-3 bg-gray-100 rounded-lg text-gray-500">고챔스</li>
                  <li className="p-3 bg-gray-100 rounded-lg text-gray-500">와일드슬릇</li>
                </ul>
              </div>

              {/* 활동 내역 */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-500">최근 활동 내역</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className='text-gray-500'>게시글에 댓글 작성</span> <span className="text-gray-500">2024.10.10</span>
                  </li>
                  <li className="flex justify-between">
                    <span className='text-gray-500'>게시글 좋아요</span> <span className="text-gray-500">2024.10.09</span>
                  </li>
                </ul>
              </div>

              {/* 닫기 버튼 */}
              <div className="flex justify-center mt-6">
                <button onClick={() => setIsInfoOpen(false)} className="bg-blue-600 text-white py-2 px-6 rounded-lg">
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

        {isRouletteOpen && (
          <div 
            className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsRouletteOpen(false)} 
          >
            <div
              className="rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-lg p-6 mx-auto"
              onClick={(e) => e.stopPropagation()} 
            >
              <Roulette onClose={() => setIsRouletteOpen(false)} />
            </div>
          </div>
        )}


      </body>
    </html>
  );
}


