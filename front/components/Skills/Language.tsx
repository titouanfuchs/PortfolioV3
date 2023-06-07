import { FC } from "react";
import ProjectData from "../../data/ProjectData";
import Image from "next/image";

type LanguageProps = {
    title: string,
    image: string,
};

const Language = ({title, image} : LanguageProps) => {

    return <>
        <div className="w-40 h-44 border overflow-hidden flex flex-col rounded-lg">

            <div className="flex-grow p-2 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full" ></img>
            </div>

            <div className="flex-none text-center overflow-hidden h-6">
                {title}
            </div>
        </div>
    </>;
};

export default Language;