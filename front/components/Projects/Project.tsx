import { FC } from "react";

const Project: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="childHid delayed relative hover:bg-emerald-900 min-h-[35rem] min-w-full md:min-w-[30rem] md:w-[30rem] flex flex-col border-2 border-primary_accent rounded-lg space-y-3 hid place-content-center content-center overflow-hidden p-5 bg-dark" id="About">
            <div className="flex-none">
                <h1 className="text-3xl text-center text-primary">
                    MiniFactory
                </h1>
                <h2 className="text-lg text-center">
                    Personnel, 2023
                </h2>
            </div>

            <div className="w-full grow flex-grow grid content-center">
                <p className="text-xl text-center">
                    Projet de développement d'un jeu de création d'usine. <br/>
                    Réalisé sur mon temps libre.
                </p>
            </div>

            <div className="w-full h-20 flex justify-center space-x-10 overflow-y-hidden overflow-x-auto text-xl text-primary p-auto">
                <p className="my-auto">
                    UnrealEngine
                </p>

                <p className="my-auto">
                    C++
                </p>
            </div>

            <div className="w-full flex-none">
                <p className="text-xl text-center text-emerald-300 border">
                    IN PROGRESS
                </p>
            </div>
        </div>
    </>;
};

export default Project;