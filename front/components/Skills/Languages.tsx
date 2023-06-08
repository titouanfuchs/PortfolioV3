import { FC } from "react";
import ProjectData from "../../data/ProjectData";
import Language from "./Language";



const Languages: FC = () => {

    return <>
        <div className="childHid delayed relative min-h-fit min-w-full md:min-w-[55rem] md:w-[55rem] flex flex-col border-2 border-primary_accent rounded-lg overflow-hidden bg-dark p-5 space-y-5" id="Projects">

            <div className="">
                <h1 className="text-3xl text-center text-light">
                    Langages
                </h1>
            </div>
            <div className="flex flex-wrap flex-grow space-x-2 justify-evenly overflow-hidden">
                <Language title={"C++"} image={"/Skills/languages/cpp.svg"}></Language>
                <Language title={"C#"} image={"/Skills/languages/csharp.svg"}></Language>
                <Language title={"TypeScript"} image={"/Skills/languages/ts.svg"}></Language>
                <Language title={"Javascript"} image={"/Skills/languages/js.svg"}></Language>
            </div>
        </div>
    </>;
};

export default Languages;