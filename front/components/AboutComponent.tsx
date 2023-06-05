import { FC } from "react";
import Image from 'next/image';

const AboutComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    return <>
        <div className="min-h-screen space-y-5 md:space-y-10 hid grid place-content-center content-center" id="About">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} A propos
            </h1>

            <div className="w-full flex justify-center childHid delayed hidden md:block">
                <Image src="/profil_square.png" alt="Profil" width="275" height="275" className="rounded-full" ></Image>
            </div>

            <div className="w-full flex justify-center childHid delayed md:hidden">
                <Image src="/profil_square.png" alt="Profil" width="200" height="200" className="rounded-full" ></Image>
            </div>

            <div className="childHid delayed md:mx-auto w-full md:w-[70rem]">
                <p className="description">
                    Je suis Titouan, j{'\''}ai {age} ans et je suis <span className="font-light italic text-primary">étudiant en développement informatique.</span> <br/>
                    <br/>
                    Ayant découvert le domaine du numérique en étant plus jeune, c'est ce qui m'a orienté aujourd'hui dans le domaine du développement informatique.
                    J'ai fondé mes compétences de base en développement lors d'expérimentations sur mon temps libre ainsi que des cours et tutoriels en ligne.
                    J'effectue régulièrement une veille technologique en autodidacte à l'aide de petits projets personnels / DIY afin de progresser en compétences. <br/><br/>

                    J'ai pour ambition professionnelle serieuse de <span className="font-light italic text-primary">concevoir des jeux vidéos</span>.
                </p>
            </div>
        </div>
    </>;
};

export default AboutComponent;