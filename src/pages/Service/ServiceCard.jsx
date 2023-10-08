

const ServiceCard = ({service}) => {
    const { id, service_image, service_name, service_long_description } = service || {}

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h4 className="pb-10 mb-15 md:text-5xl text-2xl font-semibold text-center">
                    {service_name}
                </h4>
                <div className="flex w-full max-w-[48rem] md:flex-row flex-col  bg-white bg-clip-border shadow-md">
                    <div className="m-0 w-2/5 shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border ">
                        <img
                            src={service_image}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {service_long_description}
                        </p>
                        <a className="p-6 pt-3" href="#">
                            <button
                                className="block w-full select-none rounded-lg bg-[#ca786c] py-3.5 px-7
                         text-center align-middle  text-sm font-bold  text-white  "
                            >
                                Check Our Alternative Packages
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;