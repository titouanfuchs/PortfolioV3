import { FC } from "react";
import ProjectData from "../../../data/ProjectData";
import SkillTile from "../SkillTile";



const GameEngines: FC = () => {

    return <>
        <div className="relative h-fit min-w-full md:min-w-[55rem] md:w-[55rem] flex flex-col border-2 border-primary_accent rounded-lg overflow-hidden bg-dark p-5 space-y-5">

            <div className="">
                <h1 className="text-3xl text-center text-light">
                    GameEngines
                </h1>
            </div>
            <div className="flex flex-wrap flex-grow space-x-2 justify-evenly overflow-hidden">
                <SkillTile title={"Unreal Engine"} image={"/Skills/game_engines/unreal.svg"}></SkillTile>
                <SkillTile title={"Unity Engine"} image={"/Skills/game_engines/unity.png"}></SkillTile>
            </div>
        </div>
    </>;
};

export default GameEngines;