import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

// export default class index extends Component {
//   render() {
//     console.log(this.props);
    
//     return (
//       // <NavLink className="list-group-item" />
//       <NavLink activeClassName="demo" className="list-group-item" to={this.props.to}>{this.props.children} </NavLink>
//       // 简写为：
//       // <NavLink activeClassName="demo" className="list-group-item" {...this.props}/>
//     )
//   }
// }

export default props =><NavLink activeClassName="demo" className="list-group-item" {...props}/>
