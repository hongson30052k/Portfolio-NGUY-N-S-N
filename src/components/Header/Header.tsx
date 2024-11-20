import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <div className="header">
      <a className="logo">Portfolio</a>
      <MenuIcon id="menu-icon" />
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
