export default function Navbar() {
  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      var nav: HTMLElement | null = document.querySelector("#nav");
      nav?.classList?.toggle("hidden");
      nav?.classList?.toggle("flex");
    }
  };

  return (
    <div>
      <nav className="bg-white shadow-lg fixed top-0 w-full z-30 h-14 flex items-center justify-end">
        {/* hamburger menu button */}
        <div onClick={handleMenuClick} className="pr-6 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      <div
        id="nav"
        className="h-screen hidden z-50 bg-white fixed top-0 w-full flex-col justify-evenly lg:justify-center lg:space-x-10 text-center lg:flex lg:flex-row lg:h-14 lg:items-center text-xl text-gray-800 uppercase tracking-widest font-semibold"
      >
        {/* cross button */}
        <div className="flex flex-row justify-end pr-6 absolute top-4 right-0 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleMenuClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div>
          <a href="#about" id="aboutLink" onClick={handleMenuClick}>
            About
          </a>
        </div>
        <div>
          <a href="#experience" id="experienceLink" onClick={handleMenuClick}>
            Experience
          </a>
        </div>
        <div>
          <a href="#education" id="educationLink" onClick={handleMenuClick}>
            Education
          </a>
        </div>
        <div>
          <a href="#skills" id="skillsLink" onClick={handleMenuClick}>
            Skills
          </a>
        </div>
        <div>
          <a
            href="#certificates"
            id="certificatesLink"
            onClick={handleMenuClick}
          >
            Certificates
          </a>
        </div>
        <div>
          <a href="#projects" id="projectsLink" onClick={handleMenuClick}>
            Projects
          </a>
        </div>
        <div>
          <a href="#contact" onClick={handleMenuClick}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
