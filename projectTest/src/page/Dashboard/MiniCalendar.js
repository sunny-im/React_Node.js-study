import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import Calendar from 'react-calendar';
import '../../css/Calendar.css';
import moment from "moment";

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());
  //======================================================
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const today = `${year}년 ${month}월 ${date}일 `

  return (
    <MyBox>
      <div>{today}</div><br></br>
      <Calendar 
        onChange={onChange} 
        value={value} 
      /><br></br>
      <div className="text-gray-500 mt-4">
        선택한 날짜 : {moment(value).format("YYYY년 MM월 DD일")} 
      </div>
    </MyBox>
  )
}
//style=================================================
const MyBox = styled(Box)({
  padding: `30px`,
});
//======================================================
export default MiniCalendar