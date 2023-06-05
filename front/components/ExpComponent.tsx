import { FC } from "react";
import Image from 'next/image';
import Experience from "./Experiences/Experience";

const ExpComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="min-h-screen space-y-10 hid grid place-content-center content-center" id="About">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Experiences
            </h1>

            <div className="flex w-full overflow-y-hidden overflow-x-auto space-x-5">
                <Experience></Experience>
                <Experience></Experience>
            </div>
        </div>
    </>;
};

export default ExpComponent;