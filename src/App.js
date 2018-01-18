import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ConnectedRouter, push} from 'react-router-redux'
import {
    Route, NavLink,
} from 'react-router-dom';
import 'antd/lib/style/index.less'


import demo from './routers/demo'
import Detail from './routers/detail'
import './App.css';

class App extends Component {
    render() {
        const demo = ({ match }) => (
            <div>
                <Route path={`${match.url}/detail`} component={Detail}/>
            </div>
        )
        return (
            <ConnectedRouter history={this.props.history}>
                <div className="App">
                    <header className="App-header">
                        <img src={require('./logo.svg')} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to Redux-saga</h1>
                    </header>
                    <div className="menus clearfix">
                        <ul>
                            <li><NavLink
                                to="/demo/this is a id"
                                activeStyle={{fontWeight: 'bold',color: 'red'}}>NavLink</NavLink></li>
                            <li><a onClick={() => this.props.dispatch(push('/'))}>Home</a></li>
                            <li><a onClick={() => this.props.dispatch(push('/demo/1'))}>demo1</a></li>
                            <li><a onClick={() => this.props.dispatch(push('/demo/2'))}>demo2</a></li>
                        </ul>
                    </div>
                    <div className="App-intro">
                        <Route exact path="/" component={Home}/>
                        <Route path="/demo/:id" component={demo} />
                        {/*<Route path="/demo/:id/detail" component={Detail}/>*/}
                        {this.props.children}
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}
const Home = () => (
    <div style={{textAlign:'left'}}>
        <h2>资源</h2>
        <ol>
            <li><a href="https://segmentfault.com/a/1190000011155061" target="_block">你真的会用 Babel 吗?(精)</a></li>
            <li><a href="https://babeljs.io/docs/plugins/preset-env/" target="_block">babel-preset-env</a></li>
            <li><a href="https://zhuanlan.zhihu.com/p/27777995" target="_block">21 分钟精通前端 Polyfill 方案</a></li>
            <li><a href="https://github.com/facebookincubator/create-react-app" target="_block">create-react-app</a>
            </li>
            <li><a href="http://leonshi.com/redux-saga-in-chinese/docs/basics/DeclarativeEffects.html" target="_block">reudx-saga</a>
            </li>
        </ol>
        <h2>升级使用create-react-app</h2>
        <ol>
            <li>为何要升级？
                <ol>
                    <li>普遍使用的东西又落后了</li>
                    <li>重复性代码工作（虽然有了代码生成器）</li>
                    <li>虽然代码规范统一，但可读性太差</li>
                    <li>redux-thunk处理复杂逻辑的不适用</li>
                </ol>
            </li>
            <li>create-react-app的优缺点？
                <ol>
                    <li>强大的社区支持的东西</li>
                    <li>一键生成项目</li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/serviceWorker"
                           target="_black">Navigator.serviceWorker</a>----
                        <a href="http://imweb.io/topic/56592b8a823633e31839fc01" target="_black">小案例</a></li>
                    <li>虽然支持自定义配置，但是还是过渡密封，导致自定义减弱，且不遵循插件原作者规定，无故增加了配置难度</li>
                    <li>虽然一键生成了项目，但根据技术选型，需后续我们还是要补充项目骨架结构</li>
                    <li>label自己选择性的添加插件，虽然最大限度减小资源包，而且开发环境与生产环境配置的不同，导致有可能出现不可预见的垫片缺失错误！</li>
                </ol>
            </li>

            <li>我们要做哪些改进？
                <ol>
                    <li>构建工具换成create-react-app（以前的无刷新热加载换成刷新）</li>
                    <li>react-router4的升级（按需加载方式的彻底改变，原理？）</li>
                    <li>redux-saga替代redux-thunk（解决 复杂逻辑下的异步请求）</li>
                    <li>去除全局store immutable格式</li>
                    <li>目录规范重新定义，使用redux提供的优秀api来提高代码可读性，和一致性！</li>
                </ol>
            </li>
        </ol>
        <h2>还没来得及做的</h2>
        <ol>
            <li style={{textDecoration:'line-through'}}>redux状态查看插件调用起来</li>
            <li style={{textDecoration:'line-through'}}>react-router-redux关联router + redux</li>
            <li>redux-saga的最优用法</li>
            <li>react-router 4的新api的使用? 权限管理对比之前如何优化？配合参考react-router4 的最新api来思考</li>
        </ol>
    </div>
)

export default connect()(App);
