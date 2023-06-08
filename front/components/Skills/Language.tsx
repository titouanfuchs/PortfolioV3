import { FC } from "react";
import ProjectData from "../../data/ProjectData";
import Image from "next/image";

type LanguageProps = {
    title: string,
    image: string,
};

const Language = ({title, image} : LanguageProps) => {

    // @ts-ignore
    return <>
        <div className="w-40 h-44 overflow-hidden flex flex-col rounded-lg hover:bg-emerald-900 transition-colors duration-500 ease-in-out">

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