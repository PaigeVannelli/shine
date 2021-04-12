
import './App.scss';
import React, { Component } from 'react'
// import * as React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import MainPage from '../MainPage/MainPage'
import { IPosts } from '../../types'

export interface IAppState {
  allPosts: Array<IPosts>;
  error: string;
}

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      allPosts: [],
      error: ''
    }
  }

  componentDidMount = () => {
    return fetch('http://localhost:5000/api/v1/posts')
      .then(response => response.json())
      .then(allPosts => this.setState({ allPosts: allPosts.posts }))
      .catch(error => this.setState({ error: error.message }))
  }

  addNewPost = (newPost: any) => {
    postPost(newPost)
      .then(result => {
        if (result.id) => {
          this.setState({ allPosts: [...this.state.allPosts, result], error: '' })
        } else {
          this.setState({ error: 'Please fill out both fields.' })
        }
      })
  }

  render() {
    // const allPostsData = this.state.allPosts
    return (
      <main>
        {/* {conditional render} */}
        {/* <Loading /> */}
        <MainPage allPosts={this.state.allPosts} />
      </main>
    )
  }
}

export default App;
