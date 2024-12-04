import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={style.Navbar}>
            <Link to="/Ssetting" className={`${style.left_button} ${style.Button}`}>
                <div className={style.text} style={{ marginLeft: "50px" }}>
                    <span>cấu hình</span><br />
                    <span>hệ thống</span>
                </div>
            </Link>
            <Link to="/SprinterManage" className={style.Button}>
            <div className={style.text}>
                    <span>quản lý</span><br />
                    <span>máy in</span>
                </div>
            </Link>
            <Link to="/Shistory" className={style.Button}>
                <div className={style.text}>
                    <span>lịch sử</span><br />
                    <span>in ấn</span>
                </div>
            </Link>
            <Link to="/Sreport" className={`${style.right_button} ${style.Button}`}>
                <div className={style.text} style={{ marginRight: "60px" }}>
                    <span>báo cáo</span><br />
                    <span>tổng hợp</span>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
