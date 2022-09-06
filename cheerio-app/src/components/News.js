import React, {useState,useEffect} from 'react'
import axios from 'axios';
import cheerio from 'cheerio';
import { Container, Box, Button, TextField, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress } from '@material-ui/core';

const News = () => {
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState([]);
    const [loading, setLoading] = useState(false);
    let newTitle = [];

    const searchNews = () => {
        let searchItem = encodeURI(search);
        axios.get(`/search.naver?where=news&ie=utf8&sm=nws_hty&query=${searchItem}`)
        .then(res => {
            const $ = cheerio.load(res.data);
            $('.group_news > .list_news > .bx > div > div').each((index, item)=>{
                const text = $(item).find('a.news_tit').text();
                newTitle.push(text);
            });
            setTitle(newTitle);
            setLoading(false);
            })
            .catch((error) => {
            console.log("error", error);
        });
    console.log('123')
    };
    useEffect (()=>{
        searchNews();
        const timer = setInterval(() => {
            setLoading((loading) => {
            if (loading === 100) {
                return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(loading + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    },[]);
    return (
    <div>
    <Container>
        <h1 className='title'>News List</h1>
        <p>검색하고 싶은 뉴스는 ? </p> 
        <TextField id="outlined-basic" label="검색어를 입력하세요" variant="outlined" onChange={(e)=>setSearch(e.target.value)} />
        <Button variant="outlined" onClick={()=>searchNews()}>검색</Button>
        {!loading &&(
        <LinearProgress className="progress" variant="determinate" value={loading}/>
        )}
        <Box>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Title</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {title.map((item,idx) => {
                return ( 
                <TableRow key={idx}>
                <TableCell>{idx+1}</TableCell>
                <TableCell>{item}</TableCell>
                </TableRow>
                );
                })}
                </TableBody>
            </Table>
        </Box>
    </Container>
    </div>

    )
}

export default News;