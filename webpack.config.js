const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'js/[name].js' //chunkhash 当js不被改变时，版本号不变
        //publicPath: 'http://bonc.blogic.com'  //配合HashRouter使用，不使用HashRouter时删除  有线上地址时可以使用
    },
    // 源错误检查
    devtool: 'inline-source-map',
    resolve: { // 为引入的模块起别名
        // 别名
        alias: {
            '@':path.join(__dirname,'src'),
            '@pages':path.join(__dirname,'src/pages'),
            '@components':path.join(__dirname,'src/components'),
            '@routers':path.join(__dirname,'src/routers')
          },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    devServer:{
        contentBase:path.join(__dirname,"./dist"),  // 设置服务器访问的基本目录
        compress:true,  //是否启用 gzip 压缩
        port:8000,
        host:'localhost',
        //historyApiFallback: true, //设置路由能访问二级目录，若不设置，则访问不到
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        proxy: {
            '/api/*': {
                target: 'https://172.16.3.117',
                secure: false  // 接受 运行在 https 上的服务
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),   //只有一个参数
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename:'../assets/index.html',  //配置输出文件位置
            favicon:'./src/favicon.ico',
            //inject:'head', //指定js放在head标签中 inject:'head'
            //title:'Blogic',chunks : ['index']  当有多个入口js时，可用当前参数指定调用的入口js
            minify: {  //压缩HTML文件
              removeComments: true,  //移除HTML中的注释
              collapseWhitespace: true,  //删除空白符与换行符
              removeAttributeQuotes: true
            },
          })
    ],
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                include:[
                    path.resolve(__dirname, 'src'),
                    //path.resolve(__dirname, './node_modules/antd/')
                ],
                exclude: path.resolve(__dirname, 'node_modules'), //排除这个文件夹，不在处理范围，当前文件夹已经被处理过
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {   //使用css配置
                test: /\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                //使用less配置
                test: /\.less$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name]_[hash].[ext]',//所有图片在一个目录
                        }
                    }
                ]
            },
            //暴露$和jQuery到全局
	        {
	            test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
	            use: [{
	                loader: 'expose-loader',
	                options: 'jQuery'
	            }, {
	                loader: 'expose-loader',
	                options: '$'
	            }]
	        }
        ]
    }
};