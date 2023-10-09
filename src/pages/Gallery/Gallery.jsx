import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';



const Gallery = () => {
    return (
        <div className='text-center'>
            <GalleryImage></GalleryImage>
        </div>
    );
};

export default Gallery;


Gallery.propTypes = {
    children: PropTypes.node
}