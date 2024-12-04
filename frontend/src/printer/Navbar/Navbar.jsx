import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={style.Navbar}>
            <Link to="/Phistory" className={`${style.left_button} ${style.Button}`}>
                <div className={style.text} style={{ marginLeft: "50px" }}>
                    <span>lịch sử</span><br />
                    <span>in</span>
                </div>
            </Link>
            <Link to="/Pprint" className={style.Button}>
                <div className={style.text}>
                    <span style={{ fontSize: "48px" }}>in</span>
                </div>
            </Link>
            <Link to="/Ppayment" className={style.Button}>
                <div className={style.text}>
                    <span>mua</span><br />
                    <span>giấy in</span>
                </div>
            </Link>
            <Link to="/PfileManage" className={`${style.right_button} ${style.Button}`}>
                <div className={style.text} style={{ marginRight: "60px" }}>
                    <span>quản lý</span><br />
                    <span>tài liệu</span>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
