

const Blog = () => {
    return (
        <div>
            <h2 className="text-center text-5xl font-bold py-10">Blog</h2>
            <div className=" mt-5 mb-10 relative flex max-w-[24rem] flex-col  bg-white bg-clip-border text-gray-700 shadow">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={"https://i.ibb.co/dPKCcKK/couple3.png"}
                    />
                </div>
                <div className="p-6">
                <p className=" text-base ">
                        January 10, 2023
                    </p>
                <p className=" mt-5 text-2xl font-semibold ">
                        A Wedding Memories
                    </p>
                    <p className="mt-3 mb-4 block font-sans  font-normal leading-relaxed text-gray-700 antialiased">
                    Your wedding photos are one of the most important parts of your wedding day. 
                    They’re a lasting memory of your special day that you’ll cherish for years to come. 
                    That’s why it’s so important to choose a professional wedding photographer who can capture all 
                    the special moments of your celebration in a way that reflects your unique style and personality.
                    </p>
                    <p><a href=""><span className="text-[#ca786c] font-bold"> Read more</span></a></p>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;