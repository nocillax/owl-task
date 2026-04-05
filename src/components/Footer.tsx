import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-white">
      {/* Main Footer Links & Company Section */}
      <div className="w-full flex-col border-t border-gray-200">
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-0 pt-20 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.85fr_1fr_1fr_1fr] gap-12 lg:gap-8">
            {/* Logo & Description */}
            <div className="flex flex-col items-start pr-0 lg:pr-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-9.5 mb-8 object-contain"
              />
              <p className="text-[#52525B] text-sm font-regular mb-9 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                sodales in volutpat ullamcorper amet adipiscing fermentum.
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Github"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>

            {/* Links - Company */}
            <div className="flex flex-col lg:pl-10">
              <h4 className="text-[#18181B] font-bold text-base mb-5">
                Company
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Links - Help */}
            <div className="flex flex-col">
              <h4 className="text-[#18181B] font-bold text-base mb-5">Help</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Links - Resources */}
            <div className="flex flex-col">
              <h4 className="text-[#18181B] font-bold text-base mb-5">
                Resources
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#18181B] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="w-full bg-[#230B41] pt-4.5 pb-7 px-6 relative flex flex-col md:flex-row items-center justify-center">
        <p className="text-[#ffffff] text-sm font-regular">
          &copy; Copyright 2024, All Rights Reserved by XYz.
        </p>
      </div>
    </footer>
  );
}
