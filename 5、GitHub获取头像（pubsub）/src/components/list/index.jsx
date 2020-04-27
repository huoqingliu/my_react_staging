import React,{Component} from "react";
import Item from "../item";

export default class List extends Component {

  render() {
    const { userList, isFist, isLoading ,error} = this.props
    let content =''
    if (isFist) 
       content = <h2>请进行搜索</h2>
    else if(isLoading) 
      content = <h2>Loading</h2>
    else if(error) 
    content = <h2>{error}</h2>
    else
      content = userList.map((user) => {
        return <Item key={user.id} {...user.owner}/>
      })
    return (
      <div className="row">
        {content}
      </div>
    )
  }
}