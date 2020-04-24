import React, { Component } from "react";
import axios from "axios";
export default class app extends Component{
  state = {
    repoName: '',//仓库名称
    repoUrl: '',//仓库地址
    isLoading: true,//是否正在请求
    err: '',//错误信息
    keyWord:'r'
  }
  async  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`

    try {
      const result =await axios.get(url)
      const { name, html_url } = result.data.items[0]
      this.setState({ repoName: name, repoUrl: html_url ,isLoading :false})
    } catch (error) {
      this.setState({isLoading:false,err:error.message})
    }
  }
  render() {
    const { repoName, repoUrl, isLoading, err, keyWord } = this.state
    let content = ''
    if (isLoading) 
      content=<h2>Loading</h2>
     else if(err)content=<h2>{err}</h2>
     else content=<h2>在GitHub上以{keyWord}开头，点赞量最多的是:<a href={repoUrl}>{repoName}</a></h2>
    
    return content

    
      // <div>
      //   {isLoading==true?
      //     <h2>Loading</h2>:
      //     <h2>在GitHub上以{keyWord}开头，点赞量最多的是:<a href={repoUrl}>{repoName}</a></h2>
      //   }
      // </div>
      
    
  }
}