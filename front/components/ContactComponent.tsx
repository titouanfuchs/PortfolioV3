import { FC } from "react";
import ContactTile from "./Contact/ContactTile";

const ContactComponent: FC = () => {

    return <>
        <div className="min-h-screen min-w-full space-y-20 hid grid content-center" id="Contact">
            <h1 className="text-5xl text-center text-primary">
                {'/>'} Me Contacter
            </h1>

            <div className="flex flex-wrap flex-grow space-x-2 justify-evenly overflow-hidden">
                <ContactTile title={"E-Mail"} image={"/Icons/Contact/mail.svg"} link="mailto:contact@titouanfuchs.fr"></ContactTile>
                <ContactTile title={"LinkedIn"} image={"/Icons/Contact/linkedin.svg"} link="https://www.linkedin.com/in/titouan-%F0%9F%8E%AE-fuchs-b67302221"></ContactTile>
            </div>
        </div>
    </>;
};

export default ContactComponent;