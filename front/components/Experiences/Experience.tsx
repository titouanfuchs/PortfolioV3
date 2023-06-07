import { FC } from "react";

const Experience: FC = () => {
    return <>
        <div className="childHid delayed relative hover:bg-emerald-900 min-h-[35rem] min-w-full md:min-w-[30rem] md:w-[30rem] flex flex-col border-2 border-primary_accent rounded-lg space-y-3 hid place-content-center content-center overflow-hidden p-5 bg-dark" id="About">
            <div className="flex-none">
                <h1 className="text-3xl text-center text-primary">
                    Développeur Full-Stack Junior
                </h1>
                <h2 className="text-lg text-center">
                    Trace Colmar, 2022 - 2024
                </h2>
            </div>

            <div className="w-full grow flex-grow grid content-center">
                <p className="text-xl text-center">
                    Stage puis alternance réalisés dans le cadre de la formation UHA 4.0. <br/>
                    Réalisation d'outils numériques (Application mobile, jeux concours, Chatbot).
                </p>
            </div>

            <div className="w-full flex-none">
                <p className="text-xl text-center text-emerald-300">
                    IN PROGRESS
                </p>
            </div>
        </div>
    </>;
};

export default Experience;