import React from "react";
import footerIcon from "../../assets/icons/social.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-black text-gray-400 text-base">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">
              CareerHub
            </span>
          </a>
          <p className="max-w-80 my-5 mx-auto lg:mx-0">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex justify-center lg:justify-start">
            <img src={footerIcon} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Work
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Latest News
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Prototype
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Support</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Help Desk
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Sales
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Become a Partner
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Contact</div>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  +1 777 - 978 - 5570
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  524 Broadway , NYC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400 md:flex md:justify-between container mx-auto">
        <p>© 2023 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
