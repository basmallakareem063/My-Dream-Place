import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" size={18} />
      ) : (
        <FaMoon size={18} />
      )}
    </button>
  );
}
