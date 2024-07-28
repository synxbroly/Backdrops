import { socialLinks } from "../data";
import { footer } from "../data";
export default function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footer.map(({ href, title }) => {
          return (
            <li key={href}>
              <a href={href} className="footer-link">
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ href, className }) => {
          return (
            <li key={href + "x"}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
