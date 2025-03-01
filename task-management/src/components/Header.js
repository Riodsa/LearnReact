import "./Header.css"
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function Header(props){
    const {theme,setTheme} = props;

    function ToggleTheme(){
        if(theme === "light") setTheme("dark");
        else setTheme("light");
    }

    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "Light mode" : "Dark mode"}</span>
                <span className="icon" onClick={ToggleTheme}>
                    {theme === "light" ? <IoSunny/> : <FaMoon/>}
                </span>
            </div>
        </header>
    )
}