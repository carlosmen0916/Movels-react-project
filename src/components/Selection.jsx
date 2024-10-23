import React from 'react';

const Selections = (props) => {
    return (
        <div className='flex py-3'>
            <div className='flex items-center'>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7L7.5 14L16.5 2" stroke="#00E900" stroke-width="3" stroke-linecap="round" />
                </svg>
                <div className='pl-3 font-medium text-xl font-Satoshi'>{props.content}</div>
            </div>
        </div>
    )
}

export default Selections