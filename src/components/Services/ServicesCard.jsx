import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {

    const { id, service_image, service_name, service_short_description, price, } = service || {}

    return (
        <div className="pt-10">
            <div className=" flex w-full max-w-[26rem] flex-col bg-white bg-clip-border  shadow">
                <img src={service_image} />
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block  text-left text-xl font-medium ">
                            {service_name}
                        </h5>

                    </div>
                    <p className="block text-left">
                        {service_short_description}
                    </p>
                    <p className="text-left font-semibold pt-3">Price: $ {price}</p>
                </div>

                <div className="p-6 pt-3">
                    <Link to={`/services/${id}`}>
                        <button
                            className="block w-full select-none rounded-lg bg-[#ca786c] py-3.5 px-7
                         text-center align-middle  text-sm font-bold uppercase text-white  "
                        >
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;