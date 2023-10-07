import PropTypes from 'prop-types';
import ServicesCard from './ServicesCard';




const Services = ({services}) => {
    console.log(services)
    return (
        <div className="py-10 mt-10  text-center">
            <h2 className="text-5xl font-bold mb-8 ">Our Services</h2>
           

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                   services?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>) 
                }
            </div>
        </div>
    );
};

export default Services;


Services.propTypes = {
    children: PropTypes.node
}
