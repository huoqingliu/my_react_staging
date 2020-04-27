import React, { Component } from "react";
import Search from "./components/search";
import List from "./components/list";

export default class App extends Component{
  state = {
    userList: [],//数据列表
    isFirst:true,//是否第一次请求
    isLoading: false,//是否正在请求
    err: '',//错误信息
  }
  // upDateAppState = (stateObj) => {
  //   this.setState(stateObj)
  // }
  
  render() {
    return (
      <div id="app">
        <div className="container">
          <Search upDateAppState={this.upDateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    )
  }
}