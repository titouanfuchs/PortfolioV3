﻿import { FC } from "react";

const IntroComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="min-h-full">
            <h1 className="text-8xl text-center">
                Titouan Fuchs
            </h1>

            <p className="text-4xl text-center text-primary_accent">
                {'/>'} Developpeur Full-Stack Junior
            </p>

            <p className="description">
                &Acirc;g&eacute; de {age} ans, je suis passionn&eacute; par l&#39;informatique et les nouvelles technologies. <br></br>
                ACtuellement étudiant à l{'\''}UHA 4.0 en deuxième année{'.'}
            </p>
        </div>
    </>;
};

export default IntroComponent;