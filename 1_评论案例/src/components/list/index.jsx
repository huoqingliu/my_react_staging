import "./list.css";
import React,{Component} from "react";
import Item from "../item";

export default class List extends Component {

  render() {
    const {comments,deleteComment} = this.props
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display:comments.length? 'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment) => {
              return <Item key={comment.id} {...comment} deleteComment={deleteComment}/>
            })
          }
          
        </ul>
      </div>
    )
  }
}