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
  render() {

    return (
      <div>
        <ul>
          {
            this.state.messages.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* <a href="/home/message/1">message001</a>&nbsp;&nbsp; */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}`}  push={true} >{msgObj.name}</Link>&nbsp;&nbsp; */}
                  <Link to={`/home/message/detail/${msgObj.id}`}  replace={true} >{msgObj.name}</Link>&nbsp;&nbsp;
                  <button >push查看</button>&nbsp;&nbsp;
                  <button >repalce查看</button>
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
