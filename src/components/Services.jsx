import { service } from "../data";
export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {service.map(({ icon, st, stxt }) => {
          return (
            <article key={st} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{st}</h4>
                <p className="service-text">{stxt}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
