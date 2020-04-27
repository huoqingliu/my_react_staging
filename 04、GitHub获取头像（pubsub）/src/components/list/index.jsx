import React,{Component} from "react";
import Item from "../item";
import Pubsub from "pubsub-js";
export default class List extends Component {
  state = {
    userList: [],//数据列表
    isFirst:true,//是否第一次请求
    isLoading: false,//是否正在请求
    err: '',//错误信息
  }

  componentDidMount() {
    PubSub.subscribe('upDateLIstData', (_,stateObj) => {
      this.setState(stateObj)
    })
  }
  render() {
    // const { userList, isFist, isLoading ,error} = this.props
    const { userList, isFist, isLoading ,error} = this.state
    
    
    let content = ''
    if (isFist) 
       content = <h2>请进行搜索</h2>
    else if(isLoading) 
      content = <h2>Loading</h2>
    else if(error) 
    content = <h2>{error}</h2>
    else
      content = userList.map((user) => {
        return <Item key={user.id} {...user.owner}/>
      })
    return (
      <div className="row">
        {content}
      </div>
    )
  }
}