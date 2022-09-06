const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/news', {
            target: 'https://search.naver.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/news': '/' // URL ^/news -> 공백 변경
            }
        })
    )
    app.use(
        '/naver',
        createProxyMiddleware({
            target: 'https://api.naver.com',
            changeOrigin: true,
            pathRewrite: {
                '^/naver': '/' 
            }
        }))
}