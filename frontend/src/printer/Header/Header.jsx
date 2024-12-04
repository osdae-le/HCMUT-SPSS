import style from "./Header.module.css";
import Component1 from "../assets/logo.svg";
import Bell from "../assets/Bell.svg";
import rectangle from "../assets/rectangle.svg";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import { useAuth } from "../../contexts/AuthContext";

function Header() {

  const { isAuthenticated } = useAuth();

  return (
    <header className={"flex justify-between z-[20] relative"}>
      <div className={style.Header_left}>
        <Link to="/">
          <img className={style.logo} src={Component1} alt="LOGO" />
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="0,0 320,0 320,80 200,150 0,150"
            style={{ fill: "#2e5ca7" }}
          />
        </svg>
      </div>
      <div className={style.Header_mid}></div>
      <div className={style.Header_right}>
        <div className={style.Header_right_layout}>
          <div className={`flex ${isAuthenticated ?'items-end':'items-center'} justify-start w-fit mx-auto`}>
            <div className={style.Header_bell}>
              <img src={Bell} alt="bell" />
            </div>
            <div className="pt-[10px] flex items-center flex-col flex-1 justify-center">
              <Login />
              {isAuthenticated && (
                <div className="flex text-center justify-between gap-2">
                  <p className={style.Cast_content}>Số dư: 99.000</p>
                  <img src={rectangle} alt="r" className="mx-1" />
                </div>
              )}
            </div>
          </div>
        </div>
        <svg className={style.reverse} xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="0,0 320,0 320,80 200,150 0,150"
            style={{ fill: "#2e5ca7" }}
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
