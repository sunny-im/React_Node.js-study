const express = require("express");

const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

// 입력한 검색어로 크롤링하는 버전
app.use("/starbucks", async function (req, res) {
    console.log("검색키워드(서버) : " + req.query.keyword);
    //res.json({ greeting: "Hello World" });
    const resultList = await openBrowser(req.query.keyword);
    console.log("resultList는? ", resultList);
    res.json(resultList);
    
});

console.log(`server running at http ${port} !!`);

// 스타벅스 크롤링
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function openBrowser(keyword) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.setViewport({width:1920, height:1080})
    await page.goto('https://www.starbucks.co.kr/');
    await page.click(".util_nav04");
    await page.waitForTimeout(5000);
    /*
    await page.click("#quickSearchText"); 로 하니까
    "Node is either not clickable or not an HTMLElement" 이 에러가 발생하여 아래와 같은 코드로 변경함
    */
    await page.evaluate(()=>document.querySelector('.quick_search_input').click())
    await page.type("input[name='quickSearchText']", keyword);
    await page.evaluate(()=>document.querySelector('.quickSearchBtn').click())
    await page.waitForTimeout(500);

    try {
        await page.waitForSelector(".mCSB_container > ul > .quickResultLstCon", { timeout: 50000 });
        } catch (error) {
        console.log("에러 발생: " + error);
        return [
            {
            store: "검색결과 없음",
            addrTel: "",
            },
        ];
    }

    //호출된 브라우저 영역임
    const searchData = await page.evaluate(() => {  
        const addrList = Array.from(document.querySelectorAll(".mCSB_container > ul > .quickResultLstCon"));
        console.log("addrList", addrList);
        let addrObjList = [];

        //결과 크롤링
        addrList.forEach((item)=>{
            if (item.className === "quickResultLstCon"){
                const store = item.querySelector("strong");
                const addrTel = item.querySelector(".result_details");

                // console.log("store",store)
                // console.log("addrTel",addrTel)

                if(store && addrTel) {
                    addrObjList.push({
                        store : store.textContent,
                        addrTel : addrTel.textContent,
                    });
                }
            }
        });
        console.log("addrObjList",addrObjList)

        return addrObjList;
    });
    return searchData;
    //cheerio version
    /*
    const content = await page.content();
    const $ = cheerio.load(content);
    const lists = $(".mCSB_container > ul > .quickResultLstCon");
    console.log(lists)
    */
    //await browser.close();
};