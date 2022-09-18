import { FC } from "react";
import Image from 'next/image';

const AboutComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="min-h-screen space-y-10 hid grid place-content-center content-center hid" id="About">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} A propos
            </h1>

            <div className="w-full flex justify-center hid">
                <Image src="/profil_square.png" alt="Profil" width="275" height="275" className="rounded-full" ></Image>
            </div>


            <p className="description hid">
                Je suis Titouan Fuchs, j{'\''}ai {age} ans. Depuis toujours, je porte un certain intérêt à l{'\''}informatique, et plus précisément dans la programmation.
                Je me suis alors lancé dans le développement de diverses projets, pour apprendre, tester, et créer. <br></br>
                Après avoir obtenu mon baccalauréat, j{'\''}ai commencé mes études avec l{'\''}UHA 4.0.
            </p>
        </div>
    </>;
};

export default AboutComponent;