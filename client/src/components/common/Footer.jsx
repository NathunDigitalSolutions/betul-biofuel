import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaArrowRight, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [open, setOpen] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Products",
      dropdown: [
        { name: "Ethanol", path: "/products/ethenol" },
        { name: "CO2", path: "/products/co2" },
        { name: "DDGS", path: "/products/ddgs" },
        { name: "Cattle Feed", external: "https://navaahar.in/" },
      ],
    },
    {
      name: "Our Associates",
      dropdown: [
        { name: "Navaahar", external: "https://navaahar.in/" },
        { name: "Novela", path: "/industries/novela" },
      ],
    },

    { name: "Contact Us", path: "/contact-us" },
  ];

  const toggle = (name) => {
    setOpen(open === name ? null : name);
  };

  return (
    <footer className="bg-primary text-white py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo with white circle highlight */}
          <div className="w-24 h-24  -ml-4 flex items-center justify-center rounded-full bg-white mb-4 shadow-lg">
            <img
              src={logo}
              alt="Company Logo"
              className="w-20 h-14 object-contain"
            />
          </div>

          <h2 className="font-bold text-xl mb-2">About</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Share store details, promotions, or brand content with your
            customers.
          </p>
        </div>

        {/* Explore Section (Accordion) */}
        {/* Explore Section (Accordion) */}
        {/* Explore Section (Accordion without chevron) */}
        <div>
          <h2 className="font-bold text-xl mb-4">Explore</h2>
          <ul className="space-y-3 text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center gap-2 w-full font-semibold hover:text-secondary transition"
                      onClick={() => toggle(item.name)}
                    >
                      <FaArrowRight className="text-xs opacity-80" />
                      {item.name}
                    </button>
                    {open === item.name && (
                      <ul className="ml-6 mt-2 space-y-2">
                        {item.dropdown.map((sub, i) =>
                          sub.external ? (
                            <li
                              key={i}
                              className="flex items-center gap-2 group"
                            >
                              <FaArrowRight className="text-xs opacity-80 group-hover:translate-x-1 transition-all" />
                              <a
                                href={sub.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline underline-offset-4 decoration-secondary"
                              >
                                {sub.name}
                              </a>
                            </li>
                          ) : (
                            <li
                              key={i}
                              className="flex items-center gap-2 group"
                            >
                              <FaArrowRight className="text-xs opacity-80 group-hover:translate-x-1 transition-all" />
                              <Link
                                to={sub.path}
                                className="hover:underline underline-offset-4 decoration-secondary"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 group">
                    <FaArrowRight className="text-xs opacity-80 group-hover:translate-x-1 transition-all" />
                    <Link
                      to={item.path}
                      className="hover:underline underline-offset-4 decoration-secondary"
                    >
                      {item.name}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Links</h2>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Conditions", path: "/terms" },
              { name: "Return & Refund", path: "/return-policy" },
              // { name: "Betul Biofuel", external: "https://betulbiofuel.com" },
              { name: "ERP Link", external: "https://erp.betulbiofuel.com" },
            ].map((item, index) => (
              <li key={index} className="group flex items-center gap-2">
                <FaArrowRight className="text-xs opacity-80 group-hover:translate-x-1 transition-all" />
                {item.external ? (
                  <a
                    href={item.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 decoration-secondary transition-all"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:underline underline-offset-4 decoration-secondary transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-xl mb-4">Contact Us</h2>
          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <a
                href="https://maps.google.com/?q=Betul Biofuel Pvt. Ltd."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 decoration-secondary transition-all"
              >
                Betul Biofuel Pvt. Ltd., 2nd Floor Old LIC Building,
                Gurudwaraganj, Betul (M.P.)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <AiFillPhone className="text-lg" />
              <a
                href="tel:+917880138500"
                className="hover:underline underline-offset-4 decoration-secondary transition-all"
              >
                +91 78801-38500
              </a>
            </li>
            <li className="flex items-center gap-3">
              <AiOutlineMail className="text-lg" />
              <a
                href="mailto:reception@betulbiofuel.com"
                className="hover:underline underline-offset-4 decoration-secondary transition-all"
              >
                reception@betulbiofuel.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=61575558375451"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="https://www.instagram.com/betul_biofuel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/betul-biofuel-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-200">
        <p>
          Powered by{" "}
          <span className="text-white font-semibold">
            Nathun Digital Solutions
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
