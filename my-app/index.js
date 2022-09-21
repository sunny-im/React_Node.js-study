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
    await page.goto("https://www.google.com/");
    // 키워드 입력
    await page.type("input[class='gLFyf gsfi']", keyword);
    await page.waitForTimeout(500);
    // 엔터로 키워드 검색
    await page.type("input[class='gLFyf gsfi']", String.fromCharCode(13));
    await page.waitForTimeout(500);

    // 예외 처리
    try {
    // 해당 콘텐츠가 로드될 때까지 대기
    await page.waitForSelector("#rso div.g", { timeout: 10000 });
    //await page.waitForTimeout(500);
    console.log("여기ok")
    } catch (error) {
    // 해당 태그가 없을 시 검색결과 없음 반환
    console.log("에러 발생: " + error);
    return [
        {
        title: "검색결과 없음",
        link: "",
        text: "",
        kategorie: "",
        },
    ];
    }

    // 호출된 브라우저 영역
    const searchData = await page.evaluate(() => {  // puppeteer로 호출한 브라우저에서 실행될 함수(크롤링코드)
        console.log("1")
    // 검색된 돔 요소를 Array.form을 통해 배열에 담음
    const contentsList = Array.from(document.querySelectorAll("#rso div.g"));
        console.log("2")
    let contentsObjList = [];

    // 검색결과 크롤링
    contentsList.forEach((item) => {
        if (item.className === "g") {
        const title = item.querySelector("h3");
        const link = item.querySelector(".yuRUbf");
        const text = item.querySelector(".VwiC3b");
        const kategorie = item.querySelector(".iUh30 ");

        if (title && link && text && kategorie) {
            contentsObjList.push({
            title: title.textContent, // 타이틀
            link: link.children[0].href, // 링크
            text: text.textContent, // 내용
            kategorie: kategorie.textContent, // 카테고리
            });
        }
        }
    });

    // 호출된 브라우저 영역 콘솔창에서 확인할 수 있음
    console.log(contentsList); // 검색한 엘리먼트 리스트
    console.log(contentsObjList); // 검색한 콘텐츠 오브젝트 리스트

    return contentsObjList;
    });

    // 브라우저 닫기
    browser.close();

    // 검색결과 반환
    return searchData;
}