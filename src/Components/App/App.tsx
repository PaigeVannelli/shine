import './App.scss';
import React, { Component } from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import Loading from '../Loading/Loading'
import AllPosts from '../AllPosts/AllPosts'
import Searchbar from '../Searchbar/Searchbar'
import Nav from '../Nav/Nav'
import { IPost } from '../../types'
import { Route, Switch, Link } from 'react-router-dom';
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

  addNewPost = (newPost: IPost): void => {
    postForm(newPost)
      .then(result => {
        if (result.pid) {
          this.setState({ allPosts: [...this.state.allPosts, result], error: '' })
        } else {
          this.setState({ error: 'Please fill out both fields.' })
        }
      })
  }

  renderComponent = () => {
    if (this.state.allPosts.length > 0) {
      return (
        <section className='main-page'>
          <Searchbar />
          <AllPosts allPosts={this.state.allPosts} />
          <Nav />
        </section>
      )
    } else if (this.state.error) {
      return (
        <h2>{this.state.error}</h2>
      )
    } else {
      return (
        <Loading />
      )
    }
  }

  render() {
    return (
      <main className='app'>
        <Switch>
          <Route
            exact
            path="/"
            render={this.renderComponent}
          />
          <Route
            exact
            path="/new-post"
            render={() => {
              return <NewPostForm addNewPost={this.addNewPost} />
            }
            }
          />

        </Switch>
      </main>
    )
  }
}

export default App;
