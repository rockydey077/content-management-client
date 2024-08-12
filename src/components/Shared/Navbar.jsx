import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='h-14 bg-indigo-200 rounded mb-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full mx-auto flex justify-between items-center gap-5 font-semibold text-indigo-900'>
        <h1 className='flex-1 text-2xl'>TechHub</h1>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/author'>Author</Link>
        </li>
        <li>
          <Link to='/newsletter'>Newsletter</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
