# Blogic系统前端

``` bash
# 项目初始化（安装项目依赖）
npm install

# 启动服务，服务URL：localhost:8000
npm run start

# 打包生产代码
npm run build

```

### 目录结构

```
.
├── README.md
├── dist                     // 项目build目录（打包后生产代码）
├── src                      // 生产目录
│   ├── img                  
│   ├── css               // css、图片等静态资源    
│   │    └── common.css         // 全局CSS
│   ├── components              // 组件
│   │
│   ├── utils                // 工具函数
│   ├── pages                // 视图
│   ├── routes               // 路由配置
│   ├── App.js               // API入口文件
│   ├── index.js              // 入口文件
│   └── index.html             // 主页
├── .babelrc                 // babel配置
├── package.json           //package配置
├── webpack.config.js       // Webpack配置

```
