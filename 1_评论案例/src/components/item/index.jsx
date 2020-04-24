import "./item.css";
import React,{Component} from "react";

export default class Item extends Component {
  delete = (id) => {
    const { deleteComment } = this.props
    if (window.confirm('确定删除吗?')) {
      deleteComment(id)
    }
  }
  render() {
    const { id,username, content} =this.props
    return (
      < li className="list-group-item" >
        <div className="handle">
          <a href="#1" onClick={() => { this.delete(id) }}>删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}!</p>
      </li >
    )
  }
}