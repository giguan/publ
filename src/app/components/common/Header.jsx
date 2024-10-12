import Images from "next/image";
import Link from 'next/link';

const Header = ({setIsOpen, setIsLoginOpen, loginCheck, setIsInfoOpen}) => {
    return (
        <>
            <div className="bg-[#F2F2F2] w-full h-[72px] border-b-[2px] border-gray-300 flex justify-between p-4">
                <div className="flex items-center space-x-4">
                    <button 
                        className="text-gray-500 hover:scale-[1.1] duration-300 transform" 
                        onClick={() => setIsOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <div className="flex items-center space-x-2 border-l-4 border-gray-300 p-2 ">
                        <Link href="/">

                            <Images
                                aria-hidden
                                src="/images/logo2.png"
                                alt="Window icon"
                                width={4}
                                height={1}
                                className="w-[60px] h-[15px] sm:w-[80px] sm:h-[20px] md:w-[100px] md:h-[25px] lg:w-[120px] lg:h-[30px] hover:scale-[1.05] duration-300 transform"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6 ">
                            <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    
                    {
                    loginCheck ?
                        <button 

                            onClick={() => (setIsInfoOpen(true))}
                            className=" rounded-lg font-medium flex items-center justify-center p-2 space-x-2">

                            <Images 
                                src="/images/users-profile/강아지.jpg"
                                className="rounded-full w-8 h-8"
                                width={100}
                                height={100}
                            />
                            <span className="text-gray-500">
                                강아지 님
                            </span>
                        </button>
                    :
                        <button 
                            onClick={() => (setIsLoginOpen(true))}
                            className="border-2 border-[#8B5CF6] rounded-lg font-medium flex items-center justify-center text-[#8B5CF6] p-2">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            Sign in
                        </button>
                    }
                </div>
            </div>
        </>
    )
}



export default Header