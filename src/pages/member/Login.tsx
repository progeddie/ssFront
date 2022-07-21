import { Link } from "react-router-dom";
interface LoginProps {
  lang: string;
}

const Login: React.FC<LoginProps> = ({ lang }) => {
  return (
    <div>
      <div className="join_section pb50" id="Login">
        <div className="login_title_area">
          <h1>
            {/* <img src="@/images/common/hott_big_logo.svg" alt="Hott - HOT TREND" /> */}
          </h1>
        </div>
        <div className="login_form_area">
          <div>
            <section className="id_section">
              <label htmlFor="userId" className="hidden">
                아이디
              </label>
              <input
                className="inp_txt_login add_delete"
                type="text"
                id="userId"
                placeholder="아이디"
              />
              <i className="btn_text_del">
                <span className="hidden">삭제</span>
              </i>
            </section>
            <section className="password_section">
              <label htmlFor="userPwd" className="hidden">
                비밀번호
              </label>
              <input
                className="inp_txt_login add_delete_visual"
                type="password"
                id="userPwd"
                placeholder="비밀번호"
              />
              <i className="btn_password_del">
                <span className="hidden">삭제</span>
              </i>
              <i className="btn_password_visual">
                <span className="hidden">비밀번호 보기</span>
              </i>
            </section>
            <button className="login_button">로그인</button>

            <div className="mt10 clearfix">
              <span className="inp_checkbox_group">
                <input
                  v-model="input.checkSaveId"
                  type="checkbox"
                  id="checkSaveId"
                />
                <label htmlFor="checkSaveId">아이디 저장</label>
              </span>
              <span className="a_txt_group">
                <a href="/member/idsearch" className="a_txt">
                  아이디 찾기
                </a>
                <a href="/member/pwsearch" className="a_txt">
                  비밀번호 찾기
                </a>
                <Link to={`/${lang}/member/signup`} className="a_txt">
                  회원가입
                </Link>
              </span>
            </div>
          </div>
          <button className="non_member_order_info">비회원 주문내역</button>
          <ul className="list_style_box">
            <li>
              <a href="" target="_blank" className="black_underline">
                고객센터 바로가기 〉
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
