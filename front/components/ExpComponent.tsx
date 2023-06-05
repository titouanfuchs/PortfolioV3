import { FC } from "react";
import Image from 'next/image';
import Experience from "./Experiences/Experience";

const ExpComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="min-h-screen min-w-full space-y-10 hid grid  content-center" id="Experience">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Experiences
            </h1>

            <div className="flex overflow-y-hidden md:justify-center overflow-x-auto space-x-5 p-5">
                <Experience></Experience>
            </div>
        </div>
    </>;
};

export default ExpComponent;