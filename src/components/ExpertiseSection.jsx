import React from "react";
import { ReadMore } from "../components"

const ExpertiseSection = (props) => {
    return (
        <div>
            {props.expertiseData && props.expertiseData.map((data) => (
                <div key={data.id} className={`flex py-10 h-[250px] ${data.id === props.expertiseData.length ? '' : ' border-b-[1px]'}`}>
                    <div className="w-[80%]">
                        <div className="font-bold text-[62px] font-Arial">{data.main}
                        </div>
                        <ReadMore linkUrl={data.link_url} />
                    </div>
                    <div className="flex-1 py-4">
                        <b>{data.content1}</b> <br />{data.content2}
                    </div>
                </div>
            ))}
        </div>

    )
}
export default ExpertiseSection;