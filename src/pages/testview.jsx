import React, { Component } from 'react';
import {Layout,Card,Typography } from 'antd';

const { Content } = Layout;
const { Text } = Typography;


class Testview extends Component {

componentDidMount() {
  document.title="Blogic|首页"
}

render() {
  return (
    <Layout className="layout">
      <Content style={{ margin: '24px 16px' }}>
        <Card type="inner" title="搭建介绍">
          1.npm install webpack webpack-cli webpack-dev-server -g 
          <br />
            <Text code>-g全局安装,运行时会用到webpack命令</Text> <br />
            <Text code>webpack  核心包</Text> <br />
            <Text code>webpack-cli  如果你使用 webpack 4+ 版本，你还需要安装 CLI</Text> <br />
            <Text code>webpack-dev-server 达到浏览器自动刷新的效果</Text> <br /> <br />
          2.cd antblogic
          <br /><br />
          3.npm init -yes (创建默认的package.json)
          <br /><br />
          4.npm install --save-dev babel-core babel-loader babel-plugin-import babel-preset-env babel-preset-react clean-webpack-plugin <br />
          css-loader file-loader html-webpack-plugin sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server
          <br />
            <Text code>--save是保存这些依赖的版本到package.json </Text><br />
            <Text code>-dev是 安装到package.json的devDependencies属性中</Text> <br />
            <Text code>babel-core 如果某些代码需要调用 Babel 的 API 进行转码，就要使用babel-core模块。</Text> <br />
            <Text code>babel-loader es6转码</Text> <br />
            <Text code>babel-preset-env es6最新转码规则</Text> <br />
            <Text code>babel-plugin-import  antd按需加载样式</Text>  <br />
            <Text code>babel-preset-react  react 转码规则</Text> <br />
            <Text code>css-loader css模块加载</Text> <br />
            <Text code>file-loader  file模块加载 比如图片就需要这个file加载</Text> <br />
            <Text code>sass-loader  scss模块加载</Text> <br />
            <Text code>style-loader css模块加载</Text> <br />
            <Text code>url-loader  图片url模块加载</Text> <br />
            <Text code>webpack  webpack核心包</Text> <br />
            <Text code>webpack-cli 如果你使用 webpack 4+ 版本，你还需要安装 CLI</Text> <br />
            <Text code>webpack-dev-server 达到浏览器自动刷新的效果</Text> <br />
            <Text code>clean-webpack-plugin   webpack可以配置清空某个文件夹</Text> <br />
            <Text code>html-webpack-plugin  html默认模板导入插件</Text> <br /> <br />
          5.npm install --save es6-promise react react-dom react-router-dom <br />
            <Text code>es6-promise  es6的promise</Text> <br />
            <Text code>react   react核心包</Text> <br />
            <Text code>react-dom  react核心包</Text> <br />
            <Text code>react-router-dom react路由</Text> <br /><br />
          6.npm install --save expose-loade jquery <br />
            <Text code>expose-loader  加载器expose-loader，用于将插件暴露到全局中供其他模块使用 </Text>
            <br />
        </Card>
      </Content>
    </Layout>
    )
  }
}

export default Testview;
