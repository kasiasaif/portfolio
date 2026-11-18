import "./Footer.css";

const explore = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const connect = [
  { href: "mailto:kasia.saif@gmail.com", label: "Email", external: false },
  {
    href: "https://www.linkedin.com/in/kasiasaif",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/kasiasaif",
    label: "GitHub",
    external: true,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-block">
          <a className="footer__brand" href="#top">
            Kasia Saif
          </a>
          <span className="footer__tag">Full-stack developer</span>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Explore</h3>
          <ul className="footer__list">
            {explore.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Connect</h3>
          <ul className="footer__list">
            {connect.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Kasia Saif. All rights reserved.</p>
        <p>Stockport, UK</p>
      </div>
    </footer>
  );
}
