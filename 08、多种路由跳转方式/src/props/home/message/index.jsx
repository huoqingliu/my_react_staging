import React, { Component } from 'react'
import { Link, Route} from "react-router-dom";

import Detail from "./detail";
export default class Message extends Component {
  state = {
    messages:[
      {id:'001',name:'消息001'},
			{id:'002',name:'消息002'},
			{id:'003',name:'消息003'},
    ]
  }
    
    
  push = (id)=>{
    this.props.history.push(`/home/message/detail/${id}`)
  }

  replace = (id)=>{
    this.props.history.replace(`/home/message/detail/${id}`)
  }
  repa
  forward = ()=>{
    this.props.history.goForward()
  }

  back = ()=>{
    this.props.history.goBack()
  }

  render() {

    return (
      <div>
        <ul>
          {
            this.state.messages.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* <a href="/home/message/1">message001</a>&nbsp;&nbsp; */}
                  <Link to={`/home/message/detail/${msgObj.id}`} >{msgObj.name}</Link>&nbsp;&nbsp;
                  <button onClick={()=>{this.push(msgObj.id)}}>push查看</button>&nbsp;&nbsp;
                  <button onClick={()=>{this.replace(msgObj.id)}}>replace查看</button>
                </li>
              )
            })
          }
          
        </ul>
        <button onClick={this.back}>后退</button>
        <button onClick={this.forward}>前进</button>
        <hr />
        
        <Route path='/home/message/detail/:id' component={Detail} />
        
        
      </div>
    )
  }
}
