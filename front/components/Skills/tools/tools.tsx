﻿import { FC } from "react";
import ProjectData from "../../../data/ProjectData";
import SkillTile from "../SkillTile";



const Tools: FC = () => {

    return <>
        <div className="relative h-fit min-w-full md:min-w-[27rem] md:w-[27rem] flex flex-col border-2 border-primary_accent rounded-lg overflow-hidden bg-dark p-5 space-y-5">

            <div className="">
                <h1 className="text-3xl text-center text-light">
                    Outils
                </h1>
            </div>
            <div className="flex flex-wrap flex-grow space-x-2 justify-evenly overflow-hidden">
                <SkillTile title={"Git"} image={"/Skills/frameworks/dotnet.svg"}></SkillTile>
                <SkillTile title={"Rider"} image={"/Skills/frameworks/nextjs.png"}></SkillTile>
                <SkillTile title={"Webstorm"} image={"/Skills/frameworks/angular.svg"}></SkillTile>
                <SkillTile title={"VisualStudio"} image={"/Skills/frameworks/nestjs.svg"}></SkillTile>
            </div>
        </div>
    </>;
};

export default Tools;