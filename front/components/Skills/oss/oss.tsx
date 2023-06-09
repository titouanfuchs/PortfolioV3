import { FC } from "react";
import ProjectData from "../../../data/ProjectData";
import SkillTile from "../SkillTile";



const Oss: FC = () => {

    return <>
        <div className="relative h-fit min-w-full md:min-w-[27rem] md:w-[27rem] flex flex-col border-2 border-primary_accent rounded-lg overflow-hidden bg-dark p-5 space-y-5">

            <div className="">
                <h1 className="text-3xl text-center text-light">
                    OS
                </h1>
            </div>
            <div className="flex flex-wrap flex-grow space-x-2 justify-evenly overflow-hidden">
                <SkillTile title={"Linux"} image={"/Skills/oss/linux.svg"}></SkillTile>
                <SkillTile title={"Windows"} image={"/Skills/oss/windows.svg"}></SkillTile>
            </div>
        </div>
    </>;
};

export default Oss;