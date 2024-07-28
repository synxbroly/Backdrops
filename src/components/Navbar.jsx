import logo from "../images/logo.svg";
import { PageLinks } from "../data";
import { socialLinks } from "../data";
export default function Navbar(params) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {PageLinks.map(({ href, id, text }) => {
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(({ id, href, className }) => {
            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon">
                  <i className={className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
