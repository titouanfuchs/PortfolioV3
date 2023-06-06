import { FC } from "react";
import ProjectData from "../../data/ProjectData";

type ProjectProps = {
    project: ProjectData
}

const Project = ({project} : ProjectProps) => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="childHid delayed relative hover:bg-emerald-900 min-h-[35rem] min-w-full md:min-w-[30rem] md:w-[30rem] flex flex-col border-2 border-primary_accent rounded-lg space-y-3 hid place-content-center content-center overflow-hidden p-5 bg-dark" id="About">
            <div className="flex-none">
                <h1 className="text-3xl text-center text-primary">
                    {project.name}
                </h1>
                <h2 className="text-lg text-center">
                    {project.type}, {project.startDate}
                </h2>
            </div>

            <div className="w-full grow flex-grow grid content-center">
                <p className="text-xl text-center">
                    {project.description}
                </p>
            </div>

            <div className="w-full h-20 flex justify-center space-x-10 overflow-y-hidden overflow-x-auto text-xl text-primary p-auto">
                {project.technos.map((tech, index) => {
                    return (<p key={`techno_${project.name}_${index}`} className="my-auto">
                                {tech}
                            </p>);
                })}
            </div>

            <div className="w-full flex-none">
                {project.inProgress &&
                    (<p className="text-xl text-center text-emerald-300">
                        IN PROGRESS
                    </p>)
                }

                {!project.inProgress &&
                    (<p className="text-xl text-center text-yellow-600">
                        DONE
                    </p>)
                }
            </div>
        </div>
    </>;
};

export default Project;