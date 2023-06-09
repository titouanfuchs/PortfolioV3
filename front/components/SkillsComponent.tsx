import { FC } from "react";
import Languages from "./Skills/languages/Languages";
import Frameworks from "./Skills/frameworks/frameworks";
import GameEngines from "./Skills/game_engines/GameEngines";
import Oss from "./Skills/oss/oss";
import Tools from "./Skills/tools/tools";

const SkillsComponent: FC = () => {

    return <>
        <div className="min-h-screen min-w-full space-y-10 hid grid content-center" id="Skills">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Skills
            </h1>

            <div className="flex flex-wrap justify-evenly mx-auto w-full overflow-hidden space-y-2">
                <Languages></Languages>
                <Frameworks></Frameworks>
                <GameEngines></GameEngines>
                <Oss></Oss>
                <Tools></Tools>
            </div>
        </div>
    </>;
};

export default SkillsComponent;