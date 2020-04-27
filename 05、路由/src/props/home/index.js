import React, { Component } from 'react'

import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import News from "./news";
import Message from "./message";
export default class Home extends Component {
  render() {
    // console.log('Home',this.props);

    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item active" href="./home-news.html">News</a> */}
              <NavLink className="list-group-item" to='/home/news'>News</NavLink>
                  
            </li>
            <li>
              {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
              <NavLink className="list-group-item" to='/home/message'>Message</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News} />
            <Route path='/home/message' component={Message} />
          </Switch>
        </div>
      </div>
    )
  }
}
