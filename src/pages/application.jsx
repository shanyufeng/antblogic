import React, { Component } from 'react';
import {Layout,Tabs,Spin,Row,Col,Card,Table,Menu,Icon } from 'antd';

const { Sider , Content} = Layout;
const TabPane = Tabs.TabPane;
const { SubMenu } = Menu;
const { Column } = Table;

class Application extends Component {

constructor(props){
    super(props);
    this.state = {
        loading : false,
        collapsed: false,
        application:[],
        evevtdata:[]
    };
    this.getSignleApplication = this.getSignleApplication.bind(this);
    this.getApplicationEvent = this.getApplicationEvent.bind(this);
    this.getEventData = this.getEventData.bind(this);
    this.getOnCollapse = this.getOnCollapse.bind(this);
}

componentDidMount() {
    document.title="Blogic|应用监控";
    this.getSignleApplication();
    this.getApplicationEvent();
}

//获取单一应用监控服务
getSignleApplication(){
    fetch('/api/monitor/v1/application/basic/value?application=dev_bcm&from=0&to=1544498559000', {
        credentials: 'same-origin',
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        let application = data.message;
        this.setState({
            application : application,
            loading : true 
        });
    }).catch((err) => console.log(err.toString()));
}

//获取事务排行
getApplicationEvent(){
    fetch('/api/monitor/v1/application/transaction/top/value?application=dev_bcm&from=0&to=1544583262000', {
        credentials: 'same-origin',
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        let evevtdata = data.message.byload;
        this.getEventData(evevtdata);
    }).catch((err) => console.log(err.toString()));
}

//重新组成table-evet数据格式
getEventData(data){
    const newData = [];
    Object.keys(data).map((item,i) => {
         data[item]["key"]=`EVENT_ID_${i}`;
         data[item]["name"] = item.substring(1,item.indexOf(","));
         newData.push(data[item]);
    });
    this.setState({ evevtdata: newData });
}

//侧边展开收起
getOnCollapse(collapsed){
    this.setState({ 
        collapsed
    });
    console.log(collapsed);
}

render() {
    const {application,loading,evevtdata,collapsed} = this.state;
  
    return (
        <Layout className="layout">
            <Sider width={200} theme="light" collapsible  collapsed={collapsed} onCollapse={this.getOnCollapse}>
                <Menu mode="inline" defaultSelectedKeys={['3']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                    <SubMenu key="sub1" title={<span><Icon type="user" /><span>User</span></span>}>
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="team" /><span>Team</span></span>}>
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content style={{ margin: '24px 16px' }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="基本信息" key="1">
                        { 
                            loading
                            ? 
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card title={application.applicationName}>
                                    总错误{application.errorCount}<br />
                                    响应时间{application.callFrequency}<br />
                                    </Card>
                                </Col>
                            </Row>
                            : 
                            <Spin />
                        }
                    </TabPane>
                    <TabPane tab="事物排行" key="2">
                        <Table dataSource={evevtdata} scroll={{ y: 350 }} pagination={false}>
                            <Column title="名称" dataIndex="name" key="name" width='40%' />
                            <Column title="load" dataIndex="load" key="load" width='15%' defaultSortOrder={'descend'} 
                            sorter={ (a, b) => a.load - b.load } />
                            <Column title="min" dataIndex="resp" key="resp" width='15%' />
                            <Column title="min/load" dataIndex="load/min" key="load/min" width='15%' />
                            <Column title="操作" dataIndex="action" key="action" width='15%' 
                                render={() => (
                                      <a href="javascript:;">删除</a>
                                  )}
                            />
                        </Table>
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
        )
    }
}

export default Application;
