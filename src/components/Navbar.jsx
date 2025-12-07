const Navbar = ({ activePage, setActivePage }) => {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button
              className={`navbar-link ${activePage === item.toLowerCase() ? 'active' : ''}`}
              data-nav-link
              onClick={() => setActivePage(item.toLowerCase())}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
