import type { Theme } from "../hooks/useTheme";
import "./ThemeToggle.css";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isLight = theme === "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      {isLight ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.1 22a9.9 9.9 0 0 1-7-2.9A10 10 0 0 1 11.2 2.1a.8.8 0 0 1 1 .9 8.4 8.4 0 0 0 8.8 8.8.8.8 0 0 1 .9 1A9.9 9.9 0 0 1 12.1 22Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4.2a.9.9 0 0 1-.9-.9V2a.9.9 0 1 1 1.8 0v1.3a.9.9 0 0 1-.9.9Zm0 17.8a.9.9 0 0 1-.9-.9V20a.9.9 0 1 1 1.8 0v1.1a.9.9 0 0 1-.9.9ZM4.2 12a.9.9 0 0 1-.9-.9H2a.9.9 0 1 1 0-1.8h1.3a.9.9 0 0 1 .9.9Zm17.8 0a.9.9 0 0 1-.9-.9H20a.9.9 0 1 1 0-1.8h1.1a.9.9 0 0 1 .9.9ZM6.4 6.4a.9.9 0 0 1-1.3 0l-.9-.9a.9.9 0 1 1 1.3-1.3l.9.9a.9.9 0 0 1 0 1.3Zm12.4 12.4a.9.9 0 0 1-1.3 0l-.9-.9a.9.9 0 1 1 1.3-1.3l.9.9a.9.9 0 0 1 0 1.3ZM17.6 6.4a.9.9 0 0 1 0-1.3l.9-.9a.9.9 0 1 1 1.3 1.3l-.9.9a.9.9 0 0 1-1.3 0ZM5.2 18.8a.9.9 0 0 1 0-1.3l.9-.9a.9.9 0 1 1 1.3 1.3l-.9.9a.9.9 0 0 1-1.3 0ZM12 7.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Z"
          />
        </svg>
      )}
    </button>
  );
}
