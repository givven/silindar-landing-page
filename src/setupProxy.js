import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "www.silindar.com",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 하위 url 초기화
            }

        })

    );
};