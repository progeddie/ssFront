import React from "react";
import "@css/components/common/commonmodal.scss";

import { TransitionGroup, CSSTransition } from "react-transition-group";
interface LayoutDefaultProps {
  children?: React.ReactNode;
}
const CommonModal: React.FC<LayoutDefaultProps> = (
  props: LayoutDefaultProps
) => {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition classNames="pageSlider" timeout={500}>
        <div className="common_modal">
          <div className="popup_container">
            <div className="popup_header">
              <h2>제목</h2>
              <button title="팝업창 닫기" className="popup_off">
                닫기
              </button>
            </div>
            <div className="popup_body">{props.children}</div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default CommonModal;
