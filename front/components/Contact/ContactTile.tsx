type ContactProps = {
    title: string,
    image: string,
    link: string
};

const ContactTile = ({title, image, link} : ContactProps) => {

    // @ts-ignore
    return <>
        <a href={link} target="_blank" className="w-40 h-44 overflow-hidden flex flex-col rounded-lg hover:bg-emerald-900 transition-colors duration-500 ease-in-out">

            <div className="flex-grow p-2 overflow-hidden text-light">
                <img src={image} alt={title} className="h-full square m-auto"></img>
            </div>

            <div className="flex-none text-center overflow-hidden h-6">
                {title}
            </div>
        </a>
    </>;
};

export default ContactTile;