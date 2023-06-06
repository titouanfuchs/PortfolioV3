import { FC } from "react";

type NavButton = {
    sectionToScroll: string
}


const NavButton = ({sectionToScroll} : NavButton) => {

    const age: number = new Date().getFullYear() - 2003;

    function scrollTo(){
        // @ts-ignore
        document.getElementById(sectionToScroll).scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    return <>
        <div onClick={scrollTo} className="aspect-square w-full transition-colors delay-200 duration-200 ease-in-out text-primary p-4 hover:text-light hover:bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full bi bi-house" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg>
        </div>
    </>;
};

export default NavButton;