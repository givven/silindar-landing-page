import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "localhost:8000",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 하위 url 초기화
            }

        })

    );
};