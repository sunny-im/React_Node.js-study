const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/naver',{
            target: 'https://nid.naver.com',
            changeOrigin: true,
            pathRewrite: {
                '^/naver': '/' 
            }
        }))
    app.use(
        createProxyMiddleware('/kakao',{
            target: 'https://kauth.kakao.com',
            changeOrigin: true,
            pathRewrite: {
                '^/kakao': '/' 
            }
        }))
}