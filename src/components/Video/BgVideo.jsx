import weddingVideo  from "../../assets/wedding-video.mp4";

const BgVideo = () => {
   

    return (
        <div className="py-10 h-full w-full  ">
            <div className="overlay">
            <video src={weddingVideo} autoPlay loop muted />
            </div> 
        </div>
    );
};

export default BgVideo;