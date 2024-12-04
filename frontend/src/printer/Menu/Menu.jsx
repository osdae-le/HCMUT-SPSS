import style from './Menu.module.css'
import background from '../assets/Menu_background.svg'
import his from '../assets/Print_his.svg'
import print from '../assets/Print.svg'
import buy from '../assets/Buy.svg'
import file from '../assets/File.svg'
import { Link } from 'react-router-dom';



function Menu() {
    return (
        <>
            <div className={style.background}>
                <img src={background} alt="this is background" />
            </div>
            <div className={style.grap}>

                <button className={style.button + ' ' + style.even}>
                    <Link to="/Phistory">
                        <img src={his} alt="background">
                        </img>
                    </Link>
                </button>

                <button className={style.button}>
                <Link to="/Pprint">
                    <img src={print} alt="background" />
                    </Link>
                </button>

                <button className={style.button + ' ' + style.even}>
                    <Link to="/Ppayment">
                        <img src={buy} alt="background">
                        </img>
                    </Link>
                </button>

                <button className={style.button}>
                    <Link to="/PfileManage">
                        <img src={file} alt="background" />
                    </Link>
                </button>

            </div>

        </>
    )
}


export default Menu;