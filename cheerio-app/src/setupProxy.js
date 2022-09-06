const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	// auth 포함 하위 route에 대해서는 localhost:5000/v1을 domain으로 하여 proxy설정
    app.use(
        createProxyMiddleware('/news', {
            target: 'https://search.naver.com',
            changeOrigin: true,
            pathRewrite: {
                '^/news': '' // URL ^/news -> 공백 변경
            }
        })
    )
    // dummy 포함 하위 route에 대해서는 localhost:6000/v1을 domain으로 하여 proxy설정
    app.use(
        '/remote',
        createProxyMiddleware({
            target: 'http://remote.test.com',
            changeOrigin: true,
        }))
}