import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <FooterLinks />
      <footer className="flex justify-center items-center sticky top-[100vh] w-full bg-[#705b93] h-10">
        <div className="text-white text-xs">
          <div>
            &copy;2022 Buy My Things. ZAR 276 168 1842. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
