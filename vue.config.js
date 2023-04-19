const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    //修改端口号

    transpileDependencies: true,
    lintOnSave: false,
    // //开启代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: 'true',
                pathRewrite: { '^/api': '' },
            },
        },
    },
});
