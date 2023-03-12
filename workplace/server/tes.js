const CURR_DATE = new Date();
const UTC = CURR_DATE.getTime() + (CURR_DATE.getTimezoneOffset() * 60 * 1000);
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const KR_CURR_DATE = new Date(UTC + KR_TIME_DIFF);
const year = KR_CURR_DATE.getFullYear();
const month = KR_CURR_DATE.getMonth()+1;
const date = KR_CURR_DATE.getDate();
const hour = KR_CURR_DATE.getHours();
const minute = KR_CURR_DATE.getMinutes();
const excelDate = `${year}-${month}-${date} ${hour}:${minute}`;

console.log(excelDate)