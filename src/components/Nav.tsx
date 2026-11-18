import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";
import "./Nav.css";

const links = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastY;
      const pastTop = currentY > 80;

      setHidden(!open && goingDown && pastTop);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`topbar ${open ? "topbar--menu-open" : ""} ${hidden ? "topbar--hidden" : ""}`}
      >
        <div className="topbar__inner container">
          <a
            className="topbar__brand"
            href="#top"
            onClick={close}
            tabIndex={open ? -1 : undefined}
            aria-hidden={open}
          >
            Kasia
          </a>
          <div className="topbar__actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className={`topbar__menu ${open ? "topbar__menu--open" : ""}`}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="topbar__menu-line" />
              <span className="topbar__menu-line" />
              <span className="topbar__menu-line" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        className={`overlay ${open ? "overlay--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="overlay__glow" aria-hidden="true" />
        <nav className="overlay__nav" aria-label="Primary">
          <ul>
            {links.map((link, index) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
              >
                <a href={link.href} onClick={close}>
                  <span className="overlay__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="btn__text overlay__label" data-label={link.label}>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="overlay__social">
            <a
              href="https://www.linkedin.com/in/kasiasaif"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              <span className="btn__text overlay__label" data-label="LinkedIn">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/kasiasaif"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              <span className="btn__text overlay__label" data-label="GitHub">
                GitHub
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
