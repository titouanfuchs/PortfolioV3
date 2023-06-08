import { FC } from "react";
import ProjectData from "../../../data/ProjectData";
import SkillTile from "../SkillTile";



const Languages: FC = () => {

    return <>
        <div className="relative h-fit min-w-full md:min-w-[55rem] md:w-[55rem] flex flex-col border-2 border-primary_accent rounded-lg overflow-hidden bg-dark p-5 space-y-5" id="Projects">

            <div className="">
                <h1 className="text-3xl text-center text-light">
                    Langages
                </h1>
            </div>
            <div className="flex flex-wrap flex-grow space-x-2 justify-evenly overflow-hidden">
                <SkillTile title={"C++"} image={"/Skills/languages/cpp.svg"}></SkillTile>
                <SkillTile title={"C#"} image={"/Skills/languages/csharp.svg"}></SkillTile>
                <SkillTile title={"TypeScript"} image={"/Skills/languages/ts.svg"}></SkillTile>
                <SkillTile title={"Javascript"} image={"/Skills/languages/js.svg"}></SkillTile>
            </div>
        </div>
    </>;
};

export default Languages;