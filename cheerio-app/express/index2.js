const express = require("express");

const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

// 검색어를 역삼으로 두고 크롤링 한 버전
app.use("/starbucks", async function (req, res) {
    const resultList = await open();
    res.json(resultList);
    console.log(resultList)
    
});

console.log(`server running at http ${port} !!`);

// 스타벅스 크롤링
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function open() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const start = "역삼";

    await page.setViewport({width:1920, height:1080})
    await page.goto('https://www.starbucks.co.kr/');
    await page.click(".util_nav04");
    await page.waitForTimeout(500);
    await page.evaluate((start) => {
        document.querySelector('#quickSearchText').value = start;
    }, start);
    await page.evaluate(()=>document.querySelector('.quickSearchBtn').click())
    await page.waitForTimeout(500);

    try {
        await page.waitForSelector(".mCSB_container > ul > .quickResultLstCon", { timeout: 50000 });
        console.log("여기ok")
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