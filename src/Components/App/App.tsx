
import './App.scss';
// import React, { Component } from 'react'
import * as React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import MainPage from '../MainPage/MainPage'

interface IAppState {
  allPosts: Array<any>;
  error: string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: IAppState | Readonly<IAppState>) {
    super(props);
    this.state = {
      allPosts: [],
      error: ''
    }
  }

  componentDidMount = () => {
    return fetch('http://localhost:5000/api/v1/posts')
    .then(response => response.json())
    .then(allPosts => this.setState({allPosts: allPosts}))
    .catch(error => this.setState({ error: error.message }))
  }

  render() {
    // const allPostsData = this.state.allPosts
    return (
      <main>
        <h1>hello world</h1>
        {/* {conditional render} */}
        {/* <Loading /> */}
        <MainPage allPosts={this.state.allPosts}/>
      </main>
    )
  }
}

export default App;
