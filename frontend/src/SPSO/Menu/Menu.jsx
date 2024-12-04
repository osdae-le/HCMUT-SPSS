import style from "./Menu.module.css";
import background from "../assets/MenuDecor.svg";
import setting from "../assets/Setting.svg";
import printerManage from "../assets/PrinterManage.svg";
import his from "../assets/PrintHis.svg";
import report from "../assets/Report.svg";
import { Link } from "react-router-dom";


const Menu2 = () => {
  return (
    <div className="flex">
      <div className={style.background}>
        <img
          className={style.backgroundImg}
          src={background}
          alt="this is background"
        />
      </div>
      <div className={style.grap}>
        <button className={style.button + " " + style.even}>
          <Link to="/Ssetting">
            <img src={setting} alt="background"></img>
          </Link>
        </button>

        <button className={style.button}>
          <Link to="/SprinterManage">
            <img src={printerManage} alt="background" />
          </Link>
        </button>

        <button className={style.button + " " + style.even}>
          <Link to="/Shistory">
            <img src={his} alt="background"></img>
          </Link>
        </button>

        <button className={style.button}>
          <Link to="/Sreport">
            <img src={report} alt="background" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menu2;
