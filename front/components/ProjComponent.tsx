import { FC } from "react";
import Image from 'next/image';
import Experience from "./Experiences/Experience";
import Project from "./Projects/Project";
import ProjectData from "../data/ProjectData";

const ProjComponent: FC = () => {

    const age: number = new Date().getFullYear() - 2003;

    const projects : ProjectData[] = [
        new ProjectData("Jeu Concours TraceXFav 2023", "Jeu concours réalisé à l'occasion de la Foire Aux Vins de Colmar 2023 afin de faire remporter des places de concert aux participants", "Professionnel", "2023", "-", ["UnityEngine", "ASP.Net WepAPI", "PostgresSQL", "Docker"], true),
        new ProjectData("MiniFactory", "Développement d'un jeu de création d'usine.", "Personnel", "2023", "-", ["UnrealEngine", "C++"], true),
        new ProjectData("Projet Tabletop", "Développement d'un jeu indépendant type JDR/RPG dans un univers Médiéval Fantastique avec une esthétique de jeu de plateau.", "OuterGames", "2023", "-", ["UnrealEngine", "C++"], true),
        new ProjectData("Portfolio", "Développement et hébergement de mon propre portfolio.", "Personnel", "2023", "-", ["NextJs", "TailwindCss"], true),
        new ProjectData("Corderie", "Logiciel de planification et d'estimation de temps de production pour une corderie.", "UHA 4.0.2", "2023", "-", ["Springboot", "Java", "PostgresSQL"], false),
        new ProjectData("SMCOM Timeline", "Développement d'une timeline devant afficher les états de machines de production", "UHA 4.0.2", "2022", "-", ["Preact WebComponent", "JSx"], false),
        new ProjectData("Application Mobile", "Développement d'une application mobile en rapport avec le réseau de transport de Colmar", "Professionnel", "2022", "-", ["Dotnet MAUI Hybrid Blazor", "ASP.Net Web API", "TailwindCSS","PostgresSQL", "Docker"], true),
        new ProjectData("Chatbot", "Chatbot intéractif pour le site de la Trace à Colmar.", "Professionnel", "2022", "-", ["Angular", "TailwindCss", "NestJS", "PostgresSQL", "Docker"], false),
        new ProjectData("Jeu Concours TraceXFav 2022", "Jeu concours réalisé à l'occasion de la Foire Aux Vins de Colmar 2022 afin de faire remporter des places de concert aux participants", "Professionnel", "2022", "-", ["Angular", "TailwindCss", "NestJS", "PostgresSQL", "Docker"], false),
        new ProjectData("Edeina", "Développement d'un outil de partage de dossier de patients entre praticiens.", "UHA 4.0.1", "2022", "-", ["Angular", "Angular Material", "NestJS", "MariaDB", "Docker"], false),
        new ProjectData("Neomia", "Développement d'une maquette de scénario d'authentification", "UHA 4.0.1", "2021", "-", ["Angular", "Angular Material", "NestJS", "MariaDB", "Docker"], false),
        new ProjectData("WordDrop", "Développement d'un jeu de lettres pour mobile", "Personnel", "2020", "-", ["UnityEngine"], false),
        new ProjectData("Kronophase", "Prototype de jeu \"Die and retry\" réalisé en équipe ", "Personnel", "2017", "-", ["UnityEngine", "C#"], false),
        new ProjectData("Symesis", "Prototype de jeu de type RPG réalisé en équipe", "Personnel", "2016", "-", ["UnityEngine", "C#"], false),

    ]

    return <>
        <div className="min-h-screen min-w-full space-y-10 hid grid  content-center" id="Projects">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Réalisations
            </h1>

            <h1 className="description text-center">
                {projects.length} projet(s) disponible(s)
            </h1>

            <div className="flex overflow-y-hidden overflow-x-auto space-x-5 p-5 p-x-0">
                {projects.map((project, index) => {
                    return <Project project={project} />
                })}
            </div>
        </div>
    </>;
};

export default ProjComponent;