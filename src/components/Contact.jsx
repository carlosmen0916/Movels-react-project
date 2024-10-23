import React from 'react';
import Logo from '../assets/img/navbar/logo.png';

const Contact = () => {
    return (
        <div className='flex flex-row text-white font-Arial text-lg py-10 px-[72px] items-center'>
            <div className='basis-1/5'>
                <img src={Logo} alt="logo" className='cursor-pointer w-[181.15px] h-[77.48px]' />
            </div>
            <div className='basis-1/5'>
                <div>
                    Expertise.
                </div>
                <div className='pt-2'>
                    Showcases.
                </div>
            </div>
            <div className='basis-1/5'>
                <div>
                    Get to know us.
                </div>
                <div className='pt-2'>
                    Our Manifesto.
                </div>
            </div>
            <div className='basis-1/5'>
                <div>
                    Our design thinking process.
                </div>
                <div className='pt-2'>
                    Let's talk.
                </div>
            </div>
            <div className='basis-1/5'>
                <div className='flex'>

                </div>
                <div className='flex'>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M28.151 7.3239C28.151 3.29248 24.8525 0 20.8272 0H7.47463C3.44321 0 0.150879 3.29858 0.150879 7.3239V20.6767C0.150879 24.702 3.44931 28 7.47463 28H20.8272C24.8586 28 28.151 24.702 28.151 20.6767V7.3239ZM10.9869 20.1023H8.27485V11.3921H10.9869V20.1023ZM9.63085 10.2068C8.76349 10.2068 8.06107 9.50478 8.06107 8.63741C8.06107 7.77004 8.76349 7.06741 9.63085 7.06741C10.4982 7.06741 11.2007 7.77004 11.2007 8.63741C11.2007 9.49867 10.4982 10.2068 9.63085 10.2068ZM21.1326 20.1023H18.4267V15.8695C18.4267 14.8555 18.4084 13.5604 17.0218 13.5604C15.6108 13.5604 15.3971 14.66 15.3971 15.7961V20.1023H12.6911V11.3921H15.2871V12.5833H15.3238C15.6841 11.8992 16.5698 11.1779 17.8892 11.1779C20.6318 11.1779 21.1387 12.9799 21.1387 15.3254V20.1023H21.1326Z" fill="white" />
                    </svg>
                    {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="logo 2" clip-path="url(#clip0_291_15469)">
                            <path id="Vector" d="M16.22 11.85L26.2714 0H23.8895L15.162 10.2892L8.19125 0H0.151367L10.6924 15.5591L0.151367 27.9856H2.53335L11.7499 17.1199L19.1115 27.9856H27.1514L16.2194 11.85H16.22ZM12.9576 15.6962L11.8896 14.1468L3.39161 1.81862H7.0502L13.9081 11.7679L14.9762 13.3172L23.8907 26.2497H20.2321L12.9576 15.6967V15.6962Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_291_15469">
                                <rect width="27" height="28" fill="white" transform="translate(0.151367)" />
                            </clipPath>
                        </defs>
                    </svg> */}
                </div>
            </div>
        </div>
    )
}

export default Contact