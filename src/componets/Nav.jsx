import "./styles/Nav.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <h1>My Store</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

export default Navbar;
