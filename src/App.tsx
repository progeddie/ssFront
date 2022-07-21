import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FooterContainer from "@components/layout/FooterContainer";

import CounterContainer from "./counter/CounterContainer";
import MypageContainer from "@containers/MypageContainer";
import ListContainer from "@containers/ListContainer";
import DetailContainer from "@containers/DetailContainer";
import MemberContainer from "@containers/MemberContainer";
// import SampleIndex from "@sample/SampleIndex";
import MainContainer from "@containers/MainContainer";
// import BooksContainer from "./books/BooksContainer";
// import BookContainer from "./books/BookContainer";
// import BooksAnalyticsContainer from "./books/BooksAnalyticsContainer";

import "@css/app.scss";

function App() {
  return (
    <div id="wrap">
      <div className="content">
        <Router basename={process.env.PUBLIC_URL}>
          <div className="page">
            <Routes>
              <Route path="/" element={<ListContainer />} />
              <Route path="/:lang" element={<ListContainer />} />
              <Route path="/:lang/list" element={<ListContainer />} />
              <Route path="/:lang/list/:id" element={<DetailContainer />} />
              <Route path="/count" element={<CounterContainer />} />
              <Route path="/:lang/mypage" element={<MypageContainer />} />
              <Route path="/:lang/member/login" element={<MemberContainer />} />
              <Route
                path="/:lang/member/signup"
                element={<MemberContainer />}
              />

              {/* <Route path="/analytics" element={<BooksAnalyticsContainer />} />
              <Route path="/books" element={<BooksContainer />} />
              <Route path="/books/:isbn" element={<BookContainer />} /> */}
            </Routes>
          </div>
          <FooterContainer />
        </Router>
      </div>
    </div>
  );
}

export default App;
