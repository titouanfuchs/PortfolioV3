import { FC } from "react";
import Image from 'next/image';
import Experience from "./Experiences/Experience";
import Project from "./Projects/Project";
import ProjectData from "../data/ProjectData";
import Languages from "./Skills/Languages";

const SkillsComponent: FC = () => {

    return <>
        <div className="min-h-screen min-w-full space-y-10 hid grid  content-center" id="Skills">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Skills
            </h1>

            <Languages></Languages>
        </div>
    </>;
};

export default SkillsComponent;