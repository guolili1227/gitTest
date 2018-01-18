import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions'
// import { browserHistory } from 'react-router'
import {Button,Table,Modal} from 'antd'
class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            addVisible:false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(nextReddit) {
        this.props.selectButtonType(nextReddit)
    }

    changeRouter(url){
        this.props.history.push(url+'/detail',{state:1});
    }
    onAdd(id){
        this.setState({
            addVisible:true
        })
    }
    handleOk(){

    }
    handleCancel(){
        this.setState({
            addVisible:false
        })
    }
    render() {
        const columns =[
            {
                title: '住址',
                dataIndex: 'announcementTitle',
                key: 'announcementTitle',
                render:(text,record,index)=>{
                    return  <a onClick={()=>this.changeRouter(this.props.history.location.pathname)}>{text}</a>
                    {/*<a onClick={()=>{browserHistory.push("/detail")}>{text}</a>*/}
                    //onClick={() => this.props.dispatch(push('/demo/1/detail'))}
                    //onClick={this.props.history.push("/detail")}
                    //`${this.props.history.location}/detail`
                    //href="'+this.props.histroy+'/detail'"
                }
            },{
                title:'操作',
                dataIndex:'id',
                key:'id',
                render:(text,record)=>{
                    return (
                        <div>
                            <span onClick={(text)=>this.onAdd(text)}>新增</span>
                        </div>
                    )
                }
            }
        ]

        return (
            <div>
                <h3>{this.props.match.params.id}</h3>
                <Button type="primary" onClick={()=>{this.handleChange('Primary')}}>Primary</Button>
                <Button onClick={()=>{this.handleChange('Default')}}>Default</Button>
                <Button type="dashed" onClick={()=>{this.handleChange('Dashed')}}>Dashed</Button>
                <Button type="danger" onClick={()=>{this.handleChange('Danger')}}>Danger</Button>
                <div>{this.props.demo.buttonType}</div>
                <div>
                    <Table rowKey="announcementId" dataSource={this.props.demo.list} columns={columns} />
                </div>
                <Modal visible={this.state.addVisible} title="新增"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        demo: state.demo
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
