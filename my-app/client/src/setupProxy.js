const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/data", {
            target: "http://localhost:6000",
            changeOrigin: true,
        })
    );
};