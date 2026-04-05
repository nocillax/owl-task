import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-white">
      {/* "Pre-Footer" / "Still have Questions?" Block Merged directly inline */}
      <div className="w-full flex flex-col items-center px-6 pb-24 border-b border-white">
        <div className="w-full max-w-5xl bg-[#F9FAFB] rounded-[2rem] p-12 md:p-14 flex flex-col items-center text-center">
          {/* Avatars */}
          <div className="flex items-center justify-center -space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full border-[3px] border-[#F5F8FA] overflow-hidden z-20 shadow-sm relative">
              <img
                src="/logos/prefooter2.png"
                alt="Team member"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            <div className="w-14 h-14 rounded-full border-[3px] border-[#F5F8FA] overflow-hidden z-30 -translate-y-1.5 shadow-sm relative">
              <img
                src="/logos/prefooter1.png"
                alt="Team member"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            <div className="w-12 h-12 rounded-full border-[3px] border-[#F5F8FA] overflow-hidden z-20 shadow-sm relative">
              <img
                src="/logos/prefooter3.png"
                alt="Team member"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
          </div>

          <h2 className="text-xl font-extrabold text-[#1f1f1f] mb-3">
            Still have Questions?
          </h2>
          <p className="text-[#888888] text-base font-medium mb-8">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="bg-primary text-white font-bold text-sm px-6 py-2.5 rounded hover:opacity-90 transition-opacity">
            Get in touch
          </button>
        </div>
      </div>

      {/* Main Footer Links & Company Section */}
      <div className="w-full flex-col border-t border-gray-200">
        <div className="max-w-6xl mx-auto w-full px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 lg:gap-8">
            {/* Logo & Description */}
            <div className="flex flex-col items-start pr-0 lg:pr-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-7 mb-8 object-contain"
              />
              <p className="text-[#6b7280] text-sm font-medium leading-loose mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Nullam dictum aliquet accumsan porta ridiculus in mattis.
                <br />
                Netus sodales in volutpat.
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Github"
                  className="w-8 h-8 rounded-full items-center justify-center"
                >
                  <FaGithub size={14} />
                </a>
              </div>
            </div>

            {/* Links - Company */}
            <div className="flex flex-col lg:pl-10">
              <h4 className="text-[#1f1f1f] font-bold text-base mb-8">
                Company
              </h4>
              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Links - Help */}
            <div className="flex flex-col">
              <h4 className="text-[#1f1f1f] font-bold text-base mb-8">Help</h4>
              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Links - Resources */}
            <div className="flex flex-col">
              <h4 className="text-[#1f1f1f] font-bold text-base mb-8">
                Resources
              </h4>
              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
                  >
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#6b7280] text-sm font-medium hover:text-primary transition-colors"
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
      <div className="w-full bg-[#230B41] py-6 px-6 relative flex flex-col md:flex-row items-center justify-center">
        <p className="text-[#a1a1aa] text-sm font-bold">
          Copyright &copy; 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
