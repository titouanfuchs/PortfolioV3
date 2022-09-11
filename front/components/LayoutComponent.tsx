type LayoutProps = {
    children: any;
};

const LayoutComponent = ({ children }: LayoutProps) => {

    return (
        <div className="h-screen max-h-screen flex flex-col bg-dark text-light select-none overflow-hidden">
            <div className="min-h-[5rem] border-b-2 border-light flex">
                <div className="w-[5rem] border-r-2 border-light">

                </div>
                <div className="grow">

                </div>
            </div>
            <div className="h-full flex overflow-auto">
                <div className="border-r-2 border-light min-w-[5rem] flex flex-col justify-between p-2">
                    <div className="verticalText text-center flex flex-col justify-center text-2xl">
                        <p>Section Title</p>
                    </div>

                    <div className="verticalText text-center flex flex-col justify-center text-primary">
                        <p>Titouan Fuchs</p>
                        <p>{'/>'} Portfolio</p>
                    </div>
                </div>
                <div className="w-full max-h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutComponent;