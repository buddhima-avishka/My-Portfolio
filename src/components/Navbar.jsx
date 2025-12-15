'use client'
import { MenuIcon, UserIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ResumePDF from '../assets/Resume.pdf'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Projects', link: '/projects' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
  ]

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Buddhima_Avishka_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 mx-auto flex w-[95%] -translate-x-1/2 flex-col items-center gap-2 rounded-[30px] bg-[#3A384F] p-2 text-base font-normal text-white sm:w-1/2 md:w-max md:flex-row md:gap-5 md:rounded-full md:p-1 md:pl-1.5">
      <div className="flex w-full justify-between gap-4 md:w-auto">
        <Link onClick={downloadFile}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cv-icon-svg-download-png-634476.png"
            alt="CV"
            width={44}
            height={44}
            className="rounded-full border-r-2 border-transparent transition-all duration-300 hover:border-blue-500 active:scale-95"
          />
        </Link>

        <button onClick={() => setShowNav(!showNav)} className="mr-3 md:hidden">
          {showNav ? <XIcon size={30} /> : <MenuIcon size={30} />}
        </button>
      </div>

      <div
        className={`${showNav ? 'flex' : 'hidden'} flex-col items-center gap-2 md:flex md:flex-row md:gap-5`}
      >
        {navItems.map(({ title, link }) => (
          <Link
            to={link}
            key={title}
            onClick={() => setShowNav(false)}
            className="rounded-full border-b-2 border-transparent px-4 py-1 text-lg tracking-[1px] transition-colors duration-300 hover:border-blue-500"
          >
            {title}
          </Link>
        ))}

      </div>
    </nav>
  )
}

export default Navbar