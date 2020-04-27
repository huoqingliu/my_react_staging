import React, { Component } from "react";
import Add from "./components/add";
import List from "./components/list";
export default class app extends Component{
  state = {
    comments:[
      { id: 1, username: '李四', content: '还可以' },
      { id: 2, username: '张三', content: '一般' },
      { id: 3, username: '王二', content: '不错' },
      { id: 4, username: '王五', content: '还可以' }
    ]
  }
  addComment = (commentObj ) => {
    const {comments} = this.state
    this.setState({ comments: [commentObj, ...comments ]})
  }
  deleteComment = (id) => {
    const {comments} = this.state
    let index =comments.findIndex((comment) => {
      return comment.id===id
    })
    comments.splice(index, 1)
    this.setState({comments})
  }
  render() {
    return (
      <div id="app">
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add addComment={this.addComment}/>
            <List comments={this.state.comments} deleteComment={this.deleteComment}/>
          </div>
        </div>
      </div>
    )
  }
}