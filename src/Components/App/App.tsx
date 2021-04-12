
import './App.scss';
import React, { Component } from 'react'
// import * as React from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
// import MainPage from '../MainPage/MainPage'
import { IPost } from '../../types'
import { Link } from 'react-router-dom';
import { postForm } from '../../apiCalls';

export interface IAppState {
  allPosts: Array<IPost>;
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
    postForm(newPost)
      .then(result => {
        if (result.id) {
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
        {/* <section className='main-page'>
          <Searchbar />
          <AllPosts allPosts={this.state.allPosts} />
          <Nav />
        </section> */}

        {/* Route here */}
        <NewPostForm addNewPost={(newPost: IPost) => this.addNewPost(newPost)} />

      </main>
    )
  }
}

export default App;
