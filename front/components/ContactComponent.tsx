import { FC } from "react";
import Image from 'next/image';
import Experience from "./Experiences/Experience";
import Project from "./Projects/Project";
import ProjectData from "../data/ProjectData";

const ContactComponent: FC = () => {

    return <>
        <div className="min-h-screen min-w-full space-y-10 hid grid  content-center" id="Contact">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Me Contacter
            </h1>
        </div>
    </>;
};

export default ContactComponent;