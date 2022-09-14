const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/news', {
            target: 'https://search.naver.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/news': '/' // URL ^/news -> /로 변경
            }
        })
    )
    app.use(
        createProxyMiddleware('/naver',{
            target: 'https://api.naver.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/naver': '/' 
            }
        }))
    app.use(
        createProxyMiddleware('/starbucks',{
            target: 'http://localhost:5000',
            changeOrigin: true,
        }))
}