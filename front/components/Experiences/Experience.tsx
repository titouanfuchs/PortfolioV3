import { FC } from "react";
import Image from 'next/image';

const Experience: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="childHid delayed min-h-[40rem] w-[30rem] border-2 border-primary_accent rounded-lg space-y-3 hid grid place-content-center content-center overflow-hidden p-5 bg-dark" id="About">
            <h1 className="text-3xl text-center text-primary">
                Développeur Full-Stack Junior
            </h1>
            <h2 className="text-lg text-center">
                Trace Colmar, Février 2022 - Août 2024
            </h2>
            
            <div className="md:mx-auto w-full">
                <p className="text-xl text-center">
                    Stage puis alternance réalisés dans le cadre de la formation UHA 4.0. <br/>
                    Réalisation d'outils numériques (Application mobile, jeux concours, Chatbot).
                </p>
            </div>
        </div>
    </>;
};

export default Experience;