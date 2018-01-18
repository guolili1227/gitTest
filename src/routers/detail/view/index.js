import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../action/action';
import {Table} from 'antd';
class Detail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const columns = [{
            title: '文件名',
            dataIndex: 'announcementTitle',
            key: 'announcementTitle',
        }];
        return (
            <div>
               详情页
                <Table rowKey="announcementId" dataSource={this.props.detail.list} columns={columns} />
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        detail:state.detail
    }
}
const mapDispatchToProps =(dispatch,ownProps)=>{
    return bindActionCreators(actions,dispatch)
    // return {
    //     bindActionCreators(actions,dispatch)
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)