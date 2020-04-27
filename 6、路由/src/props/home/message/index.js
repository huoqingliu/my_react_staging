import React, { Component } from 'react'
import { Link, Route} from "react-router-dom";

import Detail from "./detail";
export default class Message extends Component {
  state = {
    details:[
      {id:1,title:001,content:"消息一"},
      {id:2,title:002,content:"消息二"},
      {id:3,title:003,content:"消息三"}
    ]
  }
    
    
  

  render() {

    return (
      <div>
        <ul>
          <li>
            {/* <a href="/home/message/1">message001</a>&nbsp;&nbsp; */}
            <Link to='/home/message/detail' >message001</Link>&nbsp;&nbsp;
            <button>push查看</button>&nbsp;&nbsp;
            <button>replace查看</button>
          </li>
          <li>
            {/* <a href="/home/message/3">message003</a>&nbsp;&nbsp; */}
            <Link to='/home/message/detail'>message002</Link>&nbsp;&nbsp;
            <button>push查看</button>&nbsp;&nbsp;
            <button>replace查看</button>
          </li>
          <li>
            {/* <a href="/home/message/5">message005</a>&nbsp;&nbsp; */}
            <Link to='/home/message/detail'>message003</Link>&nbsp;&nbsp;

            <button>push查看</button>&nbsp;&nbsp;
            <button>replace查看</button>
          </li>
        </ul>
        <button>回退</button>
        <hr />
        
        <Route path='/home/message/detail' component={Detail} />
        
        
      </div>
    )
  }
}
