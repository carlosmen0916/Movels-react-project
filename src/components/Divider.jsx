import React from "react";

const Divider = (props) => {
    return (
        <div className="flex text-white">
            <div className="flex h-[200px] w-full py-[98px] items-center">
                <div className="h-[30px] w-80 border-r-[1px] relative flex items-center">
                    <div className="h-[1px] bg-white w-80"></div>
                </div>
                <div className="flex items-center w-full">
                    <div className="font-bold text-[45px] px-2 font-Arial">
                        {props.title}
                    </div>
                    <div className="h-[1px] flex-1 bg-white">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divider;