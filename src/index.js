import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import Testrouter from '@routers/testrouter';
import './css/common';
require("jquery");


const mountNode = document.getElementById('root');

ReactDOM.render(
    //BrowserRouter(有后台提供时使用) 只包含一个元素     HashRouter(只有前端页面时使用,防止刷新是找不到页面)
    <HashRouter>
        <Testrouter />
    </HashRouter>,
    mountNode
);