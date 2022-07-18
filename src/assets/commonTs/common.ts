let aXhrQueue: Array<any> = [];

export const callApi = async (
  _url: string,
  _param: Array<any>,
  _isReturnOriginal: boolean
) => {
  let urlData = _url + JSON.stringify(_param);
  if (aXhrQueue.indexOf(urlData) !== -1) {
    return console.error(`AJAX 중복 요청: ${_url}`);
  }
  aXhrQueue.push(urlData);

  return await fetch(_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: '3xCv29981_Tx091dUx98_84PTx905EB',
      // Session: document.getElementById('CI_SESSION').value,
    },
    body: JSON.stringify(_param),
  })
    .then((res) => {
      setTimeout(() => {
        aXhrQueue.splice(aXhrQueue.lastIndexOf(urlData), 1);
      }, 200);

      if (!res.ok) {
        //throw `Status Code : ${res.status} ( ${res.statusText} )`;
        return new Promise(() => {
          console.log(`Status Code : ${res.status} ( ${res.statusText} )`);
        });
      } else {
        return res.json();
      }
    })
    .then(
      (res) => {
        if (typeof res === "object" && typeof res.success !== "undefined") {
          // 세션끊겼을 때 로그인 페이지로
          // if (res.success === '6000' && res.message === 'Login Fail') {
          // 	this.setState({ isPageLoading: false });
          // 	return this.alert('로그아웃 되었습니다.<br>다시 로그인 해주세요.', () => {
          // 		location.href = `${this.HOTTMEMBER_HOST}/?refUrl=${location.href}`;
          // 	});
          // }

          //isReturnOriginal 면 success 검사 안 하고 원본response값 전달함
          if (!_isReturnOriginal) {
            if (res.success !== "0000") {
              alert("데이터를 가져오는 데 실패했습니다.");
              throw new Error(
                `서버의 SUCCESS 값이 0000이 아님. ${_url}\n${JSON.stringify(
                  res
                )}`
              );
            }
            //data가 0일경우도 있어서
            res =
              res.data === "" || res.data === null || res.data === undefined
                ? ""
                : res.data;
          }
        }
        return res;
      },
      () => {
        //연속으로 새로 고침했을 때 이전 호출을 reject 시키면서 계속 얼럿 노출됨 > 콘솔로 변경
        return new Promise(() => {
          console.log("서버와 접속이 원활하지 않습니다.");
        });
      }
    );
};

//url형식인지
export const isUrl = (val: string) => {
  if (typeof val !== "string") {
    return false;
  }
  if (val.indexOf("http") === -1) {
    val = `https://${val}`;
  }

  return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g.test(
    val
  );
};

//iPhone인지?
export const isIphone = () => {
  return (
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPod") != -1 ||
    navigator.platform.indexOf("iPad") != -1
  );
};
