import React from 'react';

const Footer = () => {
  return (
    <>
    <footer id="contact" className="bg-white py-10 mt-16">
      <div className="container mx-auto lg:px-8 flex flex-col md:flex-row items-start">
        {/* Logo */}
        <div className="w-full md:w-1/5 text-center md:text-left mb-8 md:mb-0 flex justify-center md:justify-start">
          <img src="/logo-1.png" alt="Logo" className="w-24 h-auto mb-4 md:mb-0" />
        </div>

        {/* Footer Content */}
        <div className="w-full md:w-4/5">
          <div className="flex flex-wrap justify-around items-start">
            {/* Contact Information */}
            <div className="w-full md:w-1/5 text-center mb-8">
              <h4 className="font-bold mb-4 text-black">ADDRESS</h4>
              <p className="text-gray-700">
                Okhla Industrial Estate, Phase III, near Govind Puri Metro Station, New Delhi, Delhi 110020
              </p>
            </div>

            <div className="w-full md:w-1/5 text-center mb-8">
              <h4 className="font-bold mb-4 text-black">CALL FOR QUERY</h4>
              <p className="text-gray-700">+91 8595192809</p>
            </div>

            <div className="w-full md:w-1/5 text-center mb-8">
              <h4 className="font-bold mb-4 text-black">SEND US A MESSAGE</h4>
              <p className="text-gray-700">
                <a href="mailto:Collab@Work.ac.in" className="hover:text-gray-900 transition duration-300">Collab@work.ac.in</a>
              </p>
            </div>

            <div className="w-full md:w-1/5 text-center mb-8">
              <h4 className="font-bold mb-4 text-black">Quick Links</h4>
              <ul className="text-gray-700">
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition duration-300">Instagram</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition duration-300">Twitter</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-900 transition duration-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </footer>


<div className=" h-20 w-full text-center text-gray-800 -mt-20 flex items-center justify-center ">
<p className="text-sm font-semibold">made with ♡ <span className='text-[#1FBEFF]'>abhigyann</span>  and Team</p>
</div>

</>
  );
};

export default Footer;