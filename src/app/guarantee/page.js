"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight, FaRegComments, FaArrowDown, FaArrowUp } from "react-icons/fa";

import { AiOutlineLike } from "react-icons/ai";
import { FaSearchDollar } from "react-icons/fa";

const Guarantee = () => { 
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
                                <span className="text-sm medium font-semibold text-gray-900">보증업체</span>
                            </div>

                            <div>
                                <Images
                                    className="rounded-lg"
                                    src={'/images/goat-banner.gif'}
                                    width={550}
                                    height={60}
                                />
                            </div>

                        </div>

                        <div className="m-4"></div>
                        <CollapseComponent />
                        <div className="m-4"></div>
                        <CardList/>
                        
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

export default Guarantee;

const CollapseComponent = () => {
    return (
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div
                className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-800 p-4 cursor-pointer h-32"
                style={{
                    backgroundImage: `url('/images/보증업체배너.png')`,
                    backgroundSize: 'cover', // 이미지를 컨테이너에 맞게 조정
                    backgroundPosition: 'center', // 이미지를 중앙에 배치
                }}
            >
            
            </div>

    
        </div>
    );
};



const CardList = () => {
    return (
      <div className="max-w-full mx-auto p-4">
        {/* 카테고리 탭 */}
        <div className="w-full flex justify-around mb-6 space-x-4">
          <button className="flex-1 px-4 py-2 bg-green-100 text-green-600 rounded-lg font-semibold hover:bg-green-200 hover:scale-[1.2] duration-300 transform">스포츠</button>
          <button className="flex-1 px-4 py-2 bg-orange-100 text-orange-600 rounded-lg font-semibold hover:bg-orange-200 hover:scale-[1.2] duration-300 transform">카지노</button>
          <button className="flex-1 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 hover:scale-[1.2] duration-300 transform" >슬롯</button>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-xl w-60 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="ml-2 px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">
            <FaSearchDollar className="text-gray-700"/>
          </button>
        </div>
  
        {/* 카드 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="border rounded-lg shadow-md p-4 bg-white cursor-pointer hover:scale-[1.05] duration-300 transform">
              <Images
                src={`/images/toto-banner/${index + 1}.png`}
                alt={`Card ${index + 1}`}
                className="w-full h-auto object-cover rounded-md mb-4"
                width={230}
                height={90}
              />
              <h3 className="text-base font-bold mb-2 text-gray-500">가입 첫 충전 40% 무제한 + 10%</h3>
              <p className="text-gray-600 text-sm">코드 직접 입력: 4885</p>
              <div className="flex items-center justify-between mt-4">
                <button className="px-4 py-2 text-sm font-bold bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                  바로가기
                </button>
                <div className="flex items-center space-x-2 text-gray-500">
                    <AiOutlineLike />
                  <span>14</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

