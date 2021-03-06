import "./index.css";
import React,{Component} from "react";

export default class Item extends Component {

  render() {
    const { login,avatar_url,html_url} = this.props
    return (
      <div className="card">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img src={avatar_url} style={{width:'100px'}} alt='user_url'/>
        </a>
        <p className="card-text">{login}</p>
      </div>
    )
  }
}