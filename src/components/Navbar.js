const Navbar = ({ colorMode }) => {
  return (
    <nav>
      <h1>Where is the world?</h1>
      <span
        // style={{ backgroundColor: "red" }}
        onClick={() => colorMode()}
        className="switch"
      >
        <i className="fas fa-sun"></i>
        <span>Light Mode</span>
      </span>
    </nav>
  );
};

export default Navbar;
