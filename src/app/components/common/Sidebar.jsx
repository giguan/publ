import Link from 'next/link';

const Sidebar = ({isOpen, setIsOpen}) => {
    
    return (
        <div className={`fixed z-50 w-full h-full flex transform transition-transform duration-300 ease-in-out  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className={`flex-[70%] bg-[#f2f2f2] h-[calc(100vh-70px)] md:w-[70%]`}>
                <button 
                    className="float-right mt-2 mr-2 mb-2 p-2 hover:scale-[1.2] duration-300 transform"
                    onClick={() => setIsOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <ul className="space-y-8 mt-8 ml-4 p-4 text-black text-xl font-bold">
                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span>스포츠중계</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#AFAFAF" className="h-6 w-6">
                                <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {/* 서브 메뉴 */}
                        <ul className="absolute left-full top-[-7px] hidden w-80 h-auto group-hover:flex flex-col p-4 space-y-4">
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/sport-broadcast/sport-highlight" onClick={()=>setIsOpen(false)}>스포츠 하이라이트</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                
                                <Link href="/sport-broadcast/realtime-score" onClick={()=>setIsOpen(false)}>실시간 스코어</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span>스포츠정보</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#AFAFAF" className="h-6 w-6">
                                <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {/* 서브 메뉴 */}
                        <ul className="absolute left-full top-[-7px] hidden w-80 h-auto group-hover:flex flex-col p-4 space-y-4">
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/sport-infomation/sport-analyze" onClick={()=>setIsOpen(false)}>스포츠 분석</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/sport-infomation/sport-analyze" onClick={()=>setIsOpen(false)}>결장자 / 부상자</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/sport-infomation/lineup" onClick={()=>setIsOpen(false)}>라인업</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span>GOAT이벤트</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#AFAFAF" className="h-6 w-6">
                                <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {/* 서브 메뉴 */}
                        <ul className="absolute left-full top-[-7px] hidden w-80 h-auto group-hover:flex flex-col p-4 space-y-4">
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/events2" onClick={()=>setIsOpen(false)}>이벤트1</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/events1" onClick={()=>setIsOpen(false)}>이벤트2</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">돌발이벤트</li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">회원참여이벤트</li>
                        </ul>
                    </li>

                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span>커뮤니티</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#AFAFAF" className="h-6 w-6">
                                <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {/* 서브 메뉴 */}
                        <ul className="absolute left-full top-[-7px] hidden w-80 h-auto group-hover:flex flex-col p-4 space-y-4">
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/community" onClick={()=>setIsOpen(false)}>커뮤니티</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                            <Link href="/community/news" onClick={()=>setIsOpen(false)}>뉴스</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">
                                <Link href="/board/list" onClick={()=>setIsOpen(false)}>자유게시판</Link>
                            </li>
                            <li className="text-lg font-medium cursor-pointer hover:text-purple-500">회원분석공유</li>
                        </ul>
                    </li>

                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span><Link href="/attendance" onClick={()=>setIsOpen(false)}>출석부</Link></span>
                        </div>
                    </li>

                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span><span><Link href="/guarantee" onClick={()=>setIsOpen(false)}>보증업체</Link></span></span>
                        </div>
                    </li>

                    <li className="relative group w-60 md:w-64 lg:w-80">
                        <div className="flex justify-between items-center p-2 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                            <span><span><Link href="/faq" onClick={()=>setIsOpen(false)}>고객센터</Link></span></span>
                        </div>
                    </li>
                  
                </ul>
            </div>
            <div 
                onClick={() => setIsOpen(false)}
                className={`hidden md:flex md:flex-[30%] lg:flex-[40%] xl:flex-[50%] bg-white bg-opacity-10 backdrop-blur-xl h-[calc(100vh-70px)]`}
            >
            </div>
        </div>
    )
}

export default Sidebar;