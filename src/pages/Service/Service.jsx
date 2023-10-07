import { useParams } from "react-router-dom";


const Service = () => {

    const params = useParams()
    console.log(params);

    return (
        <div>
            service
        </div>
    );
};

export default Service;