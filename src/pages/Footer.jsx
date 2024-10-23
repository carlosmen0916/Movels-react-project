import React, { useState } from 'react'
import Logo from '../assets/img/navbar/logo_02.png';
import Logo2 from '../assets/img/navbar/logo_03.png';
import twitterImg from '../assets/img/icons/twitter.png';
import facebookImg from '../assets/img/icons/facebook.png';
import linkedinImg from '../assets/img/icons/linkedin.png';
import instagramImg from '../assets/img/icons/instagram.png';
import musicImg from '../assets/img/icons/music.png';

const Footer = () => {

    const [checkState, setCheckState] = useState(true);

    const changeCheckState = () => {
        setCheckState(!checkState)
    }
    return (
        <div className='bg-black'>
            <div className='grid grid-cols-1 xl:grid-cols-2 py-10 xl:py-20 px-3 md:px-16 xl:px-20 box-border'>
                <div className='text-white justify-center xl:justify-start hidden md:block'>
                    <img src={Logo} alt="" className='mx-auto xl:mx-0' />
                    <div className='flex gap-4 justify-center xl:justify-start px-3'>
                        <img src={twitterImg} alt="" />
                        <img src={facebookImg} alt="" />
                        <img src={linkedinImg} alt="" />
                        <img src={instagramImg} alt="" />
                        <img src={musicImg} alt="" />
                    </div>
                    <div className='pt-5 xl:pt-20 grid justify-center xl:justify-start px-3 font-Satoshi font-normal'>
                        © 2024 All Rights Reserved.
                    </div>
                </div>
                <div className='text-white grid justify-center xl:justify-end'>
                    <div className='text-[32px] grid font-medium pt-0 md:pt-5 xl:pt-0 font-Navigo text-left sm:text-center xl:text-left'>
                        Subscribe To Our Newsletter
                    </div>
                    <div className='pt-2 xl:pt-5 text-base font-medium font-Satoshi hidden sm:block text-left sm:text-center xl:text-left'>
                        Stay informed and never miss an update by subscribing to our newsletter.<br />
                        Get the latest news. exclusive offers, and valuable tips delivered straight to <br />your inbox.
                    </div>
                    <div className='pt-2 xl:pt-5 text-base font-medium font-Satoshi block sm:hidden'>
                        Stay informed and never miss an update by subscribing to our newsletter.
                        Get the latest news. exclusive offers, and valuable tips delivered straight to your inbox.
                    </div>
                    <div className='flex py-5 mx-0 sm:mx-auto xl:mx-0 xl:items-start sm:items-center '>
                        <div className='bg-black border-white cursor-pointer w-5 sm:w-4 h-4 border-[1px] mr-2 mt-[1px] md:mt-0' onClick={changeCheckState}>
                            {
                                checkState && (
                                    <svg width="13" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 7L7.5 14L16.5 2" stroke="#00E900" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                )
                            }
                        </div>
                        <div className='text-sm font-medium font-Satoshi'>
                            By signing up, you have agreed to the <span className='text-[#00FF47] pl-0'>Terms of Services </span> and <span className='text-[#00FF47] pl-0'>Privacy Policy.</span>
                        </div>
                    </div>
                    <div className='w-3/4 sm:w-[480px] md:w-full rounded-3xl h-[50px] flex relative items-center mx-auto'>
                        <input
                            type="text"
                            className='peer p-2 px-4 w-full h-full relative rounded-3xl text-black focus:outline-none'
                            placeholder='Enter Email Address'
                        />
                        <div className='inset-0 absolute pointer-events-none peer-focus:border-[2px] rounded-3xl peer-focus:border-[#00E900] border-solid' />
                        <button className='absolute right-2 rounded-3xl bg-black py-2 w-fit px-5 md:px-6 font-bold text-base'>
                            Submit
                        </button>
                    </div>

                </div>
                <div className='text-white grid justify-center xl:justify-start md:hidden pt-10'>
                    <img src={Logo2} alt="" className='mx-auto' />
                    <div className='flex gap-2 justify-center xl:justify-start px-3'>
                        <img src={twitterImg} alt="" />
                        <img src={facebookImg} alt="" />
                        <img src={linkedinImg} alt="" />
                        <img src={instagramImg} alt="" />
                        <img src={musicImg} alt="" />
                    </div>
                    <div className='pt-5 grid justify-center xl:justify-start px-3 font-Satoshi font-normal'>
                        © 2024 All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer