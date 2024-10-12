"use client";

import Images from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ImFire } from "react-icons/im";

import { FaArrowRight } from "react-icons/fa";

const BoardDetail = () => { 
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

                        <PostDetails/>

                
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

export default BoardDetail;


const PostDetails = () => {
    // 게시물 정보
    const post = {
      title: "❤️1039배 적중❤️축구 고배당 연승도전❤️",
      author: "빠르밍",
      date: "2024.10.10",
      views: 382,
      comments: 0,
    };
  
    // 포인트 정보
    const points = {
      current: 4827,
      max: 6000,
    };
  
    // 태그 목록
    const tags = ["부모님 생신 기념 오마카세 방문기 🍣🔥", "매달 바뀌는 취업..😆", "펌프", "바이낸스", "EXO(엑소)"];
  
    // 포인트 퍼센트 계산
    const percentage = (points.current / points.max) * 100;

    const [isShareOpen, setIsShareOpen] = useState(false);

    const toggleShare = () => {
        setIsShareOpen(!isShareOpen);
    };

    return (
      <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg">
        {/* 게시물 정보 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex jusitfy-center items-center space-x-2">
              <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg text-sm">일반</span>
              <h2 className="text-xl font-bold mt-2 text-gray-700 ">{post.title}</h2>
            </div>
            <div className="text-gray-500 text-sm">
              <span>{post.author}</span> · {post.date} · 조회수 {post.views} · 댓글 {post.comments}
            </div>
          </div>
          <div className="mt-4 text-gray-700">

            <section>
                <Images
                    className="mx-auto m-4"
                    src="https://img.livescore.co.kr/data/editor/2410/41f7f5bcff1bedbc38d491da2fac6d1e_1728503861_3608.jpg"
                    width={800}
                    height={550}
                />

                <p className="text-center">121회차 환급하신 정보방 가족분들 축하드려요~</p>
                <p className="text-center">121회차 경기도 많았던 만큼 수익도 많이 가져다 주었습니다.</p>
                <p className="text-center">122회차 진행중 저배당 풀뱃등등 적중내역은 나오고 있지만 자랑할 만큼의 조합은 아니네요!!</p>
                <br/>
                <p className="text-center">저녁 부터 122회차 축구 경기들 정말 많습니다. 고배당or무세금</p>
                <p className="text-center">자신있는 조합으로 정보방에서 공유 드릴게요!!</p>

                <Images
                    className="mx-auto m-4"
                    src="http://img.livescore.co.kr/data/editor/2410/41f7f5bcff1bedbc38d491da2fac6d1e_1728263056_008.jpg"
                    width={800}
                    height={550}
                />

                
                
            </section>

          </div>
        </div>
  
        {/* 버튼 그룹 */}
        <div className="flex items-center justify-between mb-4">
        <div>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
            <Link href="/board/list">목록으로</Link>
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg ml-2">공지 설정</button>
        </div>

        <div className="flex space-x-2 relative">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">저장</button>
            
            {/* 공유 버튼 */}
            <div className="relative">
            <button onClick={toggleShare} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                공유
            </button>

            {/* 공유 아이콘 목록 */}
            {isShareOpen && (
                <div className="absolute w-40 top-[-60px] right-0 bg-white shadow-lg rounded-lg p-2 flex space-x-2 z-50">
                <a href="https://www.kakao.com" target="_blank" rel="noopener noreferrer">
                    <Images
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain hover:scale-[1.2] duration-300 transform"
                    src="/images/sns/kakaotalk.png"
                    alt="카카오톡"
                    />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Images
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain hover:scale-[1.2] duration-300 transform"
                    src="/images/sns/instagram.png"
                    alt="인스타그램"
                    />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Images
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain hover:scale-[1.2] duration-300 transform"
                    src="/images/sns/facebook.png"
                    alt="페이스북"
                    />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <Images
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain hover:scale-[1.2] duration-300 transform"
                    src="/images/sns/discord.png"
                    alt="디스코드"
                    />
                </a>
                </div>
            )}
            </div>

            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">추천</button>
        </div>
    </div>
        
        
        <div className="flex space-x-10 items-start">
            {/* 포인트 바 */}
            <div className="relative flex-1 p-4 rounded-lg mb-4">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-sm bg-[#13A3D7] flex justify-center items-center">3</div>
                    <div className="text-gray-700 font-semibold">빠르밍</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-sm font-semibold text-gray-700">보유 포인트: {points.current}P</span>
                    </div>
                    {/* <div className="text-sm text-gray-500">
                        {points.current}P / {points.max}P ({percentage.toFixed(1)}%)
                    </div> */}
                </div>

                {/* 진행 바 */}
                <div className="relative w-full h-4 mt-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                    className="bg-red-600 h-full rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>

                {/* 진행 바 안에 숫자 표시 */}
                <div className="absolute inset-0 flex items-center justify-center text-sm text-white font-bold">
                    4,822P / 6,000P {percentage.toFixed(1)}%
                </div>
                </div>
            </div>

            {/* 태그 리스트 */}
            <ul className="flex-1 text-sm text-gray-600 space-y-2 mb-4">
                {tags.map((tag, index) => (
                <li key={index} className="flex justify-between">
                    <div>· {tag}</div>
                    <div>15시간 전</div>
                </li>
                ))}
            </ul>
            </div>
  
        {/* 댓글 입력란 */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 text-gray-700">댓글</h3>
          <textarea className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none" rows="4" placeholder="메시지를 입력하세요"></textarea>
          <div className="flex justify-between items center">
            <button className="mt-2 bg-gray-500 text-2xl text-white px-4 py-2 rounded-lg">+</button>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">작성</button>
          </div>
        </div>
      </div>
    );
  };