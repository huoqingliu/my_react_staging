import React, { Component } from "react";
import { NavLink,Route ,Switch,Redirect} from "react-router-dom";

import Head from "./components/head";

import About from "./props/about";
import Home from "./props/home";

export default class App extends Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Head/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                  {/* <a className="list-group-item" href="./about.html">About</a>
                  <a className="list-group-item active" href="./home.html">Home</a> */}

                  {/* <NavLink className="list-group-item" to='/about'>About</NavLink> */}
                  <NavLink className="list-group-item" to='/about/123'>About</NavLink>
                  <NavLink className="list-group-item" to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* <Route path='/' component={Home}/> */}
                  <Route path='/home' component={Home} />
                  <Route path='/about' component={About} />
                  {/* 
                  <Route path='/about' exact component={About} />   
                  exact: 严格匹配,路径必须完全匹配。未开启严格匹配时, to='/about/123'匹配到的也是about
                  */}
                  {/* <Redirect to='/about' /> */}
                  {/* Redirect 重定向,在路由没有匹配项时，会指向redirect*/}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}