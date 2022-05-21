const Navbar = () => {
  return (
    <nav>
      <h1>Where is the world?</h1>
      <span
        style={{
          root: {
            __acolor: "red",
          },
        }}
        className="switch"
      >
        <i className="fas fa-sun"></i>
        <span>Light Mode</span>
      </span>
    </nav>
  );
};

export default Navbar;
