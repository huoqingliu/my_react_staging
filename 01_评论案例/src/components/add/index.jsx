import { v4 as uuidv4 } from "uuid";
import React,{Component} from "react";

export default class Add extends Component {
  add = () => {
    const { usernameNode, contentNode } = this.refs
    if (!usernameNode.value||!contentNode.value) {
      alert('用户名或内容不能为空')
      return
    }
    this.props.addComment({
      id: uuidv4(),
      username: usernameNode.value,
      content: contentNode.value
    })
    usernameNode.value=''
    contentNode.value=''
  }

  
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='usernameNode'/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref='contentNode'></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}