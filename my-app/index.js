// express 모듈 불러오기
const express = require("express");

// express 객체 생성
const app = express();

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);

// 미들웨어 함수를 특정 경로에 등록
app.use("/api/data", async function (req, res) {
    console.log("검색키워드(서버) : " + req.query.keyword);
    //res.json({ greeting: "Hello World" });
    const resultList = await openBrowser(req.query.keyword);
    console.log("resultList는? ", resultList);
    res.json(resultList);
    
});

console.log(`server running at http ${port} !!`);

// puppeteer 모듈 불러오기
const puppeteer = require("puppeteer");
// 브라우저 오픈하기
async function openBrowser(keyword) {
    // 브라우저 실행 , headless 모드 사용여부 false (크롤링하는 창이 열린다)
    const browser = await puppeteer.launch({ headless: false });
    // 브라우저 열기
    const page = await browser.newPage();
    
    // 페이지 크기 설정
    await page.setViewport({width:1920, height:1080})
    // 포탈로 이동
    await page.goto("https://www.naver.com/");
    // 키워드 입력
    await page.type("input[class='input_text']", keyword);
    await page.waitForTimeout(500);
    // 엔터로 키워드 검색
    //await page.type("input[class='gLFyf gsfi']", String.fromCharCode(13));
    // 클릭으로 키워드 검색
    await page.click("#search_btn");
    await page.waitForTimeout(500);

    // 예외 처리
    try {
    // 해당 콘텐츠가 로드될 때까지 대기
    await page.waitForSelector(".sc_new.b8k1d > div > ul > li > .CHC5F", { timeout: 10000 });
    //await page.waitForTimeout(500);
    console.log("여기ok")
    } catch (error) {
    // 해당 태그가 없을 시 검색결과 없음 반환
    console.log("에러 발생: " + error);
    return [
        {
        store: "검색결과 없음",
        type: "",
        comment: "",
        open: "",
        score:"",
        },
    ];
    }

    // 여기서부턴 호출된 브라우저 영역
    const searchData = await page.evaluate(() => {  // puppeteer로 호출한 브라우저에서 실행될 함수(크롤링코드)
    // 검색된 돔 요소를 Array.form을 통해 배열에 담음
    const contentsList = Array.from(document.querySelectorAll(".sc_new.b8k1d > div > ul > li > .CHC5F"));
    // 호출된 브라우저 영역 콘솔창에서 확인할 수 있음
    console.log("contentsList", contentsList);
    let contentsObjList = [];

    // 검색결과 크롤링
    contentsList.forEach((item) => {
        if (item.className === "CHC5F") {
            const store = item.querySelector(".place_bluelink") ? item.querySelector(".place_bluelink") : "<div>결과없음</div>";
            const type = item.querySelector(".KCMnt") ? item.querySelector(".KCMnt") : "<div>결과없음</div>";
            const comment = item.querySelector(".Ldfxw") ? item.querySelector(".Ldfxw") : "<div>결과없음</div>";
            const open = item.querySelector(".h69bs ") ? item.querySelector(".h69bs ") : "<div>결과없음</div>";
            const score = item.querySelector(".a2RFq  em") ? item.querySelector(".a2RFq  em") : "<div>결과없음</div>";

            console.log("store",store)
            console.log("score",score)
            
            if (store && type && type) {
                contentsObjList.push({
                    store: store.textContent, // 매장명
                    type: type.textContent, // 음식타입
                    comment: comment.textContent , // 코멘트
                    open: open.textContent , // 영업여부
                    score: score.textContent , // 별점
                });
            }
        }
    });
    console.log("contentsObjList",contentsObjList);

    return contentsObjList;
    });

    // 브라우저 닫기
    browser.close();

    // 검색결과 반환
    return searchData;
}