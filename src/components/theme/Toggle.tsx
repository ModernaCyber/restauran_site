import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const ToggleMode = () => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };
  return (
    <button className="ml-2" onClick={toggleTheme}>
    {dark ? <CiLight /> : <CiDark />}
  </button>
  )
}

export default ToggleMode