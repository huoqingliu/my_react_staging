import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    details:[
			{id:'001',title:'message001',content:'加油，中国！'},
			{id:'002',title:'message002',content:'加油，武汉！'},
			{id:'003',title:'message003',content:'加油，尚硅谷！'},
		]
  }
  render() {
    const { id } = this.props.match.params 
    console.log(this.props);
    let result = this.state.details.find((detailObj)=>{
			return detailObj.id === id
		})

    return (
      <ul>
        <li>id:{result.id}</li>
        <li>title:{result.title}</li>
        <li>content:{result.content}</li>
      </ul>
    )
  }
}
