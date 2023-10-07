import { FaFacebookF, FaYoutube, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-white ">
                <aside>
                    <img className="h-20 w-20" src={"https://i.ibb.co/8XkVYJn/logo.png"}/>
                    <p className="font-bold">
                        Wedding Dairy <br />
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <div className="flex gap-5">
                    <h3 className="text-md font-bold">Social : </h3>
                <nav>
                    <div className="grid grid-flow-col gap-5">
                     <FaFacebookF></FaFacebookF>
                     <FaYoutube></FaYoutube>
                    <FaTwitter></FaTwitter>
                    </div>
                </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;