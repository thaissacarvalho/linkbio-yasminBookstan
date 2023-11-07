import { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
      <button
        onClick={toggleDarkMode}
        className="relative right-6 flex justify-start self-end text-only-black text-xl dark:text-only-alice-blue text-md"
      >
        {darkMode ? <BsFillSunFill/> : <BsFillMoonFill/>}
      </button>
  );
}