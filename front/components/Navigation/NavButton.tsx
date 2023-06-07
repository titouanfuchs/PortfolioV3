type NavButton = {
    children?:any,
    sectionToScroll: string
}

const NavButton = ({children, sectionToScroll} : NavButton) => {

    const age: number = new Date().getFullYear() - 2003;

    function scrollTo(){
        const element = document.getElementById(sectionToScroll);

        if (!element) return;

        element.classList.remove(`hid`);
        element.classList.add('show');

        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    return <>
        <div onClick={scrollTo} className="aspect-square w-full transition-colors delay-200 duration-200 ease-in-out text-primary p-4 hover:text-light hover:bg-primary">
            {children}
        </div>
    </>;
};

export default NavButton;