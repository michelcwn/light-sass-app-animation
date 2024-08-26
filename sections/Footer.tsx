import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src="/logosaas.png"
            width={40}
            height={40}
            alt="SaaS logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <FaInstagram />
          <BsTwitterX />
          <FaLinkedin />
        </div>
        <p className="mt-6">
          &copy; by michel from
          <a href="https://www.frontendtribe.com/" target="_blank">
            {' '}
            frontendtribe
          </a>
        </p>
      </div>
    </footer>
  );
};
