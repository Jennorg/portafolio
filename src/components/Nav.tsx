const Nav = () => {
  return (
     <nav className="sticky top-0 z-50 w-full bg-[#232323] py-3 px-2 md:px-8 flex justify-center items-center shadow overflow-x-auto">
      <ul className="flex space-x-8 md:space-x-24">
        <li>
          <a href="#home" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap">Home</a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap">Projects</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap">About</a>
        </li>
        <li>
          <a href="#stack" className="text-white hover:text-blue-400 transition-colors whitespace-nowrap">Stack</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
