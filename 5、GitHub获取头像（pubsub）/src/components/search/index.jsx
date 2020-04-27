import React,{Component} from "react";
import axios from "axios";
import Pubsub from "pubsub-js";

export default class Search extends Component {
  inputNode = React.createRef()
  search = async() => {
    // 1、获取输入框数据
    const searchValue = this.inputNode.current.value
    const url = `https://api.github.com/search/repositories?q=${searchValue}`

    // 2、验证数据
    if (!searchValue||!searchValue.trim()) {
      alert('搜索内容不能为空')
      return
    }

    const {upDateAppState} = this.props 
    // 3、发送ajax请求
    upDateAppState({isLoading:true,isFirst:false})
    try {
      const result = await axios.get(url);
      const { items } = result.data
      console.log(items);

      // 4、保存数据到state
      // upDateAppState({userList:items,isLoading:false})
      PubSub.publish('upDateLIstData',{userList:items,isLoading:false})
    } catch (error) {
      // upDateAppState({error:error.message,isLoading:false})
      PubSub.publish('upDateLIstData',{error:error.message,isLoading:false})

    }

    
    

  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.inputNode}/>&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
          
    )
  }
}