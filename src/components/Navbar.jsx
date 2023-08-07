const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-purple-500 font-bold text-lg">Estatery</div>
      <div className="flex space-x-10">
        <a href="#" className="hover:text-purple-500 transition-colors">
          Rent
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Buy
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Sell
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Manage Property
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Resources
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="hover:bg-purple-500 hover:text-white transition-colors px-3 py-2 text-purple-500  border border-purple-500 rounded-md">
          Login
        </button>
        <button className="hover:bg-purple-500 hover:text-white transition-colors px-3 py-2 text-purple-500 border border-purple-500 rounded-md">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
