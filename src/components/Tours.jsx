import { tours } from "../data";
export default function Tours() {
  return (
    <section className="section" id="featured">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tours.map(
          ({
            img,
            alt,
            date,
            title,
            description,
            icon,
            destination,
            stay,
            price,
          }) => {
            return (
              <article key={title} className="tour-card">
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt={alt} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{description}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>
                      {destination}
                    </p>
                    <p>{stay}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}
