import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Services/Services";
import BgVideo from "../../components/Video/BgVideo";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import AskedQuestions from "../AskedQuestions/AskedQuestions";





const Home = () => {

    const services = useLoaderData()
    console.log(services);


    return (
        <div>       
            <Banner></Banner>
            <Services services={services}></Services>
            <CustomerReview></CustomerReview>
           <BgVideo></BgVideo>
           <AskedQuestions></AskedQuestions>

        </div>
    );
};

export default Home;