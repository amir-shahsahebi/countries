import { useNavigate } from "react-router-dom";

const Navbar = ({ colorMode, lightMode }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1 onClick={() => navigate("/")}>Where is the world?</h1>
      <span
        // style={{ backgroundColor: "red" }}
        onClick={() => colorMode()}
        className="switch"
      >
        <i className={!lightMode ? "fas fa-sun" : "fas fa-moon"}></i>
        <span>{!lightMode ? "Light Mode" : "Night Mode"}</span>
      </span>
    </nav>
  );
};

export default Navbar;
