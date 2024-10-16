"use client";
import React, { useState } from 'react';
import Images from 'next/image'
import { ImFire } from "react-icons/im";

const SignUp = () => {
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
                                <span className="text-sm medium font-semibold text-gray-900">회원가입</span>
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

                        <SignupForm/>
                        


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

export default SignUp;


function SignupForm() {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      fullName: "",
      phoneNumber: "",
      termsAccepted: false,
    });
  
    const [usernameAvailable, setUsernameAvailable] = useState(null);
    const [nicknameAvailable, setNicknameAvailable] = useState(null);
    const [phoneNumberAvailable, setPhoneNumberAvailable] = useState(null);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    const checkAvailability = async (field, value) => {
      try {
        const response = await fetch(`/api/check-${field}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }),
        });
        const result = await response.json();
        if (field === "username") setUsernameAvailable(result.available);
        if (field === "nickname") setNicknameAvailable(result.available);
        if (field === "phoneNumber") setPhoneNumberAvailable(result.available);
      } catch (error) {
        console.error("중복 확인 중 오류 발생:", error);
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen m-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">회원가입</h2>
  
          {/* 아이디 */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">아이디</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => checkAvailability("username", formData.username)}
              >
                중복 확인
              </button>
            </div>
            {usernameAvailable !== null && (
              <p className={`text-sm mt-1 ${usernameAvailable ? "text-green-600" : "text-red-600"}`}>
                {usernameAvailable ? "사용 가능한 아이디입니다." : "이미 사용 중인 아이디입니다."}
              </p>
            )}
          </div>
  
          {/* 비밀번호 */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          {/* 비밀번호 확인 */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          {/* 닉네임 */}
          <div className="mb-6">
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">닉네임</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="nickname"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => checkAvailability("nickname", formData.nickname)}
              >
                중복 확인
              </button>
            </div>
            {nicknameAvailable !== null && (
              <p className={`text-sm mt-1 ${nicknameAvailable ? "text-green-600" : "text-red-600"}`}>
                {nicknameAvailable ? "사용 가능한 닉네임입니다." : "이미 사용 중인 닉네임입니다."}
              </p>
            )}
          </div>
  
          {/* 이름 */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">이름</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          {/* 전화번호 */}
          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">전화번호</label>
            <div className="flex space-x-2">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => checkAvailability("phoneNumber", formData.phoneNumber)}
              >
                중복 확인
              </button>
            </div>
            {phoneNumberAvailable !== null && (
              <p className={`text-sm mt-1 ${phoneNumberAvailable ? "text-green-600" : "text-red-600"}`}>
                {phoneNumberAvailable ? "사용 가능한 전화번호입니다." : "이미 사용 중인 전화번호입니다."}
              </p>
            )}
          </div>
  
          {/* 약관 동의 */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <span className="ml-2 text-sm text-gray-700">약관에 동의합니다.</span>
            </label>
          </div>
  
          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            회원가입
          </button>
        </form>
      </div>
    );
  }
  