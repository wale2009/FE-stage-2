import Image from "next/image";
import {
  FaRegCopyright,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary py-8 font-inter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:space-x-8">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0  justify-between items-center md:block grid">
            <Image
              className="rounded-2xl w-[141px] h-[48px]"
              src="/logo.png"
              alt="logo"
              width={141}
              height={48}
            />
            <p className=" md:block text-secondary mt-4 text-[15px]">
              Experience ultimate comfort and style with our premium collection
              of crocs.
            </p>
          </div>

          {/* Information Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-secondary uppercase font-bold mb-4 text-[20px] sm:text-[25px]">
              Information
            </h1>
            <div className="text-secondary  md:block grid">
              <h2 className="mb-2 w-1/2 md:w-full text-[15px]">About Us</h2>
              <h2 className="mb-2 w-1/2 md:w-full text-[15px]">Contact Us</h2>
              <h2 className="mb-2 w-1/2 md:w-full text-[15px]">My Order</h2>
              <h2 className="mb-2 w-1/2 md:w-full text-[15px]">
                Terms and Condition
              </h2>
              <h2 className="mb-2 w-1/2 md:w-full text-[15px]">
                Returns and Exchanges
              </h2>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/3">
            <h1 className="text-secondary uppercase font-bold mb-4 text-[20px] sm:text-[25px]">
              Join Our Newsletter Now
            </h1>
            <p className="text-secondary mb-4 text-[15px]">
              Get Email updates about our latest arrivals and offers
            </p>
            <div className="flex mb-4">
              <div className="flex-grow">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-xl px-4 py-2.5 border border-r-0 text-[15px]"
                />
              </div>
              <div>
                <button className="bg-secondary text-white px-4 py-2.5 rounded-r-xl border border-secondary text-[15px]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-none bg-[#E1306C] flex items-center justify-center cursor-pointer">
                <FaInstagram className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-none bg-[#4267B2] flex items-center justify-center cursor-pointer">
                <FaFacebookF className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-none bg-[#D44638] flex items-center justify-center cursor-pointer">
                <MdEmail className="text-xl text-white" />
              </div>
              <div className="w-10 h-10 rounded-none bg-[#1DA1F2] flex items-center justify-center cursor-pointer">
                <FaTwitter className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary mb-4" />

        {/* Copyright */}
        <div className="text-center sm:text-left font-bold">
          <p className="text-black text-[15px]">
            Copyright <FaRegCopyright className="inline-block mx-1" /> 2024
            yescrocs. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
