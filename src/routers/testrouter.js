import React ,{Component}from 'react';
import { Route,Switch,NavLink,Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import App from './../App';

import Testview from '@pages/testview';
import Testmessage from '@pages/testmessage';
import Application from '@pages/application';

const { Header} = Layout;
const title = '/antblogic';

class Testrouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : 'application' //当前选中的key
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //组件初始化时只调用,以后组件更新不调用,整个生命周期只调用一次,此时可以修改state
    componentWillMount(){
        let pathname = window.location.href; //获取当前URL
        this.setState({
            current : pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length)
        });
    }

    handleClick(e){
        this.setState({
            current: e.key,
        });
    }

    render(){
        return(
            <App>
                <Header>
                    <Menu theme="dark" mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="views"><NavLink to={`${title}/views`} exact activeClassName="active" replace>首页</NavLink></Menu.Item>
                        <Menu.Item key="messages"><NavLink to={`${title}/messages`} activeClassName="active" replace>管理</NavLink></Menu.Item>
                        <Menu.Item key="application"><NavLink to={`${title}/application`} activeClassName="active" replace>应用监控</NavLink></Menu.Item>
                    </Menu>
                </Header>
                <Switch>
                    <Route exact path={`${title}/views`} component={Testview}/>
                    <Route path={`${title}/messages`} component={Testmessage}/>
                    <Route path={`${title}/application`} component={Application}/>
                    <Redirect from="/" to={`${title}/application`} />
                </Switch>
            </App>
        )
    }
}

export default Testrouter;