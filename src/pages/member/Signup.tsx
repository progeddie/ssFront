const Signup: React.FC = () => {
  return (
    <div>
      <div className="menu_section">
        <div className="signup_area" id="SignupStep">
          <div className="info_box">
            <h2>정보 입력</h2>
            <p className="subtext">아래 정보만 입력하시면 가입이 완료됩니다.</p>
            <div className="info_dllist mt10">
              <p className="required tar">필수 입력 사항</p>
              <dl>
                <dt className="po_re mt0">
                  <label htmlFor="userId" className="required">
                    아이디
                  </label>
                  <a className="ico_tooltip id_info mr5">
                    <span className="hidden">비밀번호 안내 툴팁</span>
                  </a>
                  <span className="id_detail">입력가능한 특수문자 : _ .</span>
                </dt>
                <dd>
                  <div>
                    <input
                      type="text"
                      id="userId"
                      className="wc70 mr5"
                      placeholder="아이디 입력"
                      v-validate="'required'"
                    />
                    <button className="btn_common btn_color_black w65 f13">
                      중복확인
                    </button>
                    <span className="txt_err">
                      이미 사용 중인 아이디입니다.
                    </span>
                    <span className="txt_err">
                      영문, 숫자로만 4~25자 내로 입력하세요.
                    </span>
                    <span className="txt_err">
                      아이디의 시작과 끝에는 마침표(.)를 사용할 수 없습니다.
                    </span>
                    <input
                      type="hidden"
                      name="is_confirm_id"
                      value="N"
                      v-model="input.is_confirm_id"
                    />
                  </div>
                </dd>
                <dt className="po_re">
                  <label htmlFor="userPwd" className="required">
                    비밀번호
                  </label>
                  <a className="ico_tooltip password_info mr5">
                    <span className="hidden">비밀번호 안내 툴팁</span>
                  </a>
                  <span className="password_detail">
                    입력가능한 특수문자 : ~`!@#$\^&*()-
                  </span>
                </dt>
                <dd className="po_re">
                  <input
                    type="password"
                    name="password"
                    id="userPwd"
                    placeholder="숫자, 영문, 특수문자 이용 8자리 이상 입력"
                    v-validate="{
                        required: true,
                        regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~`!@#$%\^&*()-])[A-Za-z\d~`!@#$%\^&*()-]{8,}$/
                      }"
                  />
                  <i className="btn_password_del">
                    <span className="hidden">삭제</span>
                  </i>
                  <i className="btn_password_visual btn_visual">
                    <span className="hidden">비밀번호 보기</span>
                  </i>
                  <span className="txt_err">
                    숫자, 영문, 특수문자 조합하여 8자 이상 입력하세요. (특수문자
                    : % 불가)
                  </span>
                </dd>
                <dt>
                  <label htmlFor="passwordConfirm" className="required">
                    비밀번호 확인
                  </label>
                </dt>
                <dd className="po_re">
                  <input
                    type="password"
                    name="password_confirmation"
                    id="passwordConfirm"
                    placeholder="비밀번호를 다시 한번 입력해 주세요."
                    v-validate="'confirmed:password'"
                  />
                  <i className="btn_password_del">
                    <span className="hidden">삭제</span>
                  </i>
                  <i className="btn_password_visual btn_visualConfirm">
                    <span className="hidden">비밀번호 보기</span>
                  </i>
                  <span className="txt_err">
                    입력하신 비밀번호가 서로 다릅니다.
                  </span>
                </dd>
                <dt>
                  <label className="required">이메일</label>
                </dt>
                <dd>
                  <input
                    type="text"
                    name="e_mail"
                    v-model="input.email"
                    placeholder="사용 중인 이메일을 입력해 주세요."
                  />
                  <span className="txt_err">
                    이메일 형태에 맞게 입력해 주세요.
                  </span>
                </dd>
                <dt>
                  <label>인스타그램</label>
                </dt>
                <dd className="channel_box po_re">
                  <div className="link_group clearfix">
                    <span className="channel_instagram">
                      <i className="ico_link_instagram"></i>
                      <span className="link_font">https://instagram.com/</span>
                    </span>
                    <span className="input_instagram">
                      <input
                        type="text"
                        name="instagramId"
                        placeholder="아이디(최대 25자)"
                      />
                    </span>
                  </div>
                  <div className="tooltip_popup arrow_bottom right0">
                    <p className="tooltip_content">
                      입력하시면 더 다양한 서비스를 누릴 수 있어요!
                    </p>
                    <a title="툴팁 닫기" className="btn_close">
                      <span className="hidden">닫기</span>
                    </a>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
