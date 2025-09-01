import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const location = useLocation();

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
    { name: "Quality", path: "/quality" },
    {
      name: " Our Associates",
      dropdown: [
        { name: "Navaahar", external: "https://navaahar.in/" },
        { name: "Novela", path: "/industries/novela" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
      {
      name: "Login",
      dropdown: [
        { name: "ERP L0gin", external: "" },
        { name: "IT Complaint Helpdesk", path: "" },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-wrapper")) {
        setDropdownOpen({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <header className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 md:px-12 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-24 sm:w-28" />
            <span className="text-primary text-xl md:text-2xl font-bold">
              Betul Biofuel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-primary font-medium text-sm md:text-base items-center">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className="relative dropdown-wrapper">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 cursor-pointer hover:text-secondary transition"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        dropdownOpen[item.name] ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdownOpen[item.name] && (
                    <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-md py-2 w-44 z-40">
                      {item.dropdown.map((sub, i) =>
                        sub.external ? (
                          <a
                            key={i}
                            href={sub.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-primary hover:text-white transition"
                            onClick={() =>
                              setDropdownOpen((prev) => ({
                                ...prev,
                                [item.name]: false,
                              }))
                            }
                          >
                            {sub.name}
                          </a>
                        ) : (
                          <Link
                            key={i}
                            to={sub.path}
                            className="block px-4 py-2 hover:bg-primary hover:text-white transition"
                            onClick={() =>
                              setDropdownOpen((prev) => ({
                                ...prev,
                                [item.name]: false,
                              }))
                            }
                          >
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`relative transition hover:text-secondary ${
                    isActive(item.path) ? "text-secondary font-semibold" : ""
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Socials + Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-2 text-primary">
              <a
                href="https://www.facebook.com/profile.php?id=61575558375451"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/betul_biofuel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/betul-biofuel-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <Link
              to="/contact-us"
              className="ml-4 bg-secondary text-primary font-semibold px-4 py-2 rounded hover:bg-primary hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-2xl text-primary"
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-4 text-primary text-base font-semibold">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <p className="mb-1">{item.name}</p>
                <div className="ml-4 flex flex-col gap-2 text-sm">
                  {item.dropdown.map((sub, i) =>
                    sub.external ? (
                      <a
                        key={i}
                        href={sub.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={sub.path}
                        className="hover:text-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-secondary ${
                  isActive(item.path) ? "text-secondary font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </ul>

        <div className="mt-auto p-6 flex justify-center gap-4 text-primary">
          <a
            href="https://www.facebook.com/profile.php?id=61575558375451"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/betul_biofuel/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/betul-biofuel-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
