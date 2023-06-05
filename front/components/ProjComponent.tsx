import { FC } from "react";
import Image from 'next/image';
import Experience from "./Experiences/Experience";
import Project from "./Projects/Project";

const ProjComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="min-h-screen min-w-full space-y-10 hid grid  content-center" id="Projects">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Réalisations
            </h1>

            <div className="flex overflow-y-hidden overflow-x-auto space-x-5 py-5 p-x-0">
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    </>;
};

export default ProjComponent;