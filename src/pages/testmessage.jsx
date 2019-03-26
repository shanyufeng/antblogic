import React, { Component } from 'react';
import {Layout,Card,Typography } from 'antd';

const { Content} = Layout;
const { Text } = Typography;

class Testmessage extends Component {

componentDidMount() {
  document.title="Blogic|管理"
}

render() {
  return (
    <Layout className="layout">
      <Content style={{ margin: '24px 16px' }}>
        <Card type="inner" title="配置介绍">
          1.新建webpack.config.js<br />
          <Text code>入口及出口、端口等配置,详细看文件</Text>
              <br /><br />
          2.新建.balbelrc<br />
          <Text code>添加关于react的配置,详细看文件</Text>
              <br /><br />
          3.package.json<br />
          <Text code>配置运行、打包等命令</Text>
          4.只有前端没有后台时,防止刷新是找不到路径<br />
          <Text code>BrowserRouter改为HashRouter</Text>
              <br /><br />
          5.配置4后引发的问题<br />
          <Text type="danger">React Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack</Text>
              <br />
          <Text type="warning">原因：这个是 reactr-router 的一个提示，当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思。看不惯的话可以采取一些方法关掉这个提示。</Text>
              <br />
          <Text code>解决办法在router文件中NavLink标签中加入replace</Text>
              <br /><br />
          6.配置全局jquery<br />
          <Text code>在webpack.config.js配置,详细看文件，后在src下的index.js中引用require("jquery")</Text>
              <br />
        </Card>
      </Content>
    </Layout>
    )
  }
}

export default Testmessage;
