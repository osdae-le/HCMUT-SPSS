import log_back from "../assets/log_back.svg";
import logo from "../assets/logo.svg";
import style from "./Login.module.css";

function Login() {
  return (
    <>
      <div >
        <img className={style.back} src={log_back} alt="" />
        <div className={style.grap}>
          <div className={style.logo}>
            <img className={style.main_logo} src={logo} alt="LOGO" />

            <div className={`flex items-center text-primary w-fit mx-auto space-x-2`}>
              <p className='text-[108px] font-bold'>in</p>
              <div>
                <p className={style.text}>Bách Khoa</p>
                <p className={style.text}>giáo trình - tài liệu - đồ án</p>
              </div>
            </div>
          </div>
          {/* <div className={style.login}>
            <div className={style.board}>
              <div className={style.content}>
                <h1 className={style.header1}>Đăng nhập</h1>
                <p className={style.small_text}>Hãy sử dụng tài khoản my BK</p>
                <hr className={style.line} />
                <div className={style.mail_grap}>
                  <p className={style.norm_text}> Email</p>
                  <input className={style.input} type="text" />
                </div>
                <div className={style.pass_grap}>
                  <p className={style.norm_text}> Password</p>
                  <input className={style.input} type="text" />
                </div>
                <p className={style.forgot}>Quên mật khẩu</p>
                <button className={style.login_button}>Đăng nhập</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Login;
