import './App.scss';
import React, { Component } from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import Loading from '../Loading/Loading'
import AllPosts from '../AllPosts/AllPosts'
import Searchbar from '../Searchbar/Searchbar'
import Nav from '../Nav/Nav'
import { IPost } from '../../types'
import { Route, Switch } from 'react-router-dom';
import { postForm, getPosts } from '../../apiCalls';
import ExpandedPost from '../ExpandedPost/ExpandedPost'

export interface IAppState {
  allPosts: Array<IPost>;
  foundPosts: Array<IPost>;
  error: string;
}

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      allPosts: [],
      foundPosts: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getPosts()
      .then(allPosts => this.setState({ allPosts: allPosts.posts }))
      .catch(error => this.setState({ error: error.message }))
  }

  addNewPost = (newPost: IPost): void => {
    postForm(newPost)
      .then(result => {
        if (result.pid) {
          this.setState({ allPosts: [...this.state.allPosts, result], error: '' })
        } else {
          return this.setState({ error: 'Please fill out both fields.' })
        }
      })
      .then(data => window.location.assign('/'))
  }

  findPostsWithSearchTerm = (searchTerm: string) => {
    searchTerm = searchTerm.toLowerCase();

    return this.setState({
      foundPosts: this.state.allPosts.filter(post => {
        return post.content.toLowerCase().includes(searchTerm) || post.title.toLowerCase().includes(searchTerm) || post.author.toLowerCase().includes(searchTerm);
      })
    })
  }

  resetFoundPosts = () => {
    this.setState({ foundPosts: [] });
  }

  renderComponent = () => {
    if (this.state.foundPosts.length > 0) {
      return (
        <>
          <Searchbar findPostsWithSearchTerm={this.findPostsWithSearchTerm} />
          <AllPosts allPosts={this.state.foundPosts} />
          <Nav resetFoundPosts={this.resetFoundPosts} />
        </>
      )
    } else if (this.state.allPosts.length > 0) {
      return (
        <>
          <Searchbar findPostsWithSearchTerm={this.findPostsWithSearchTerm} />
          <AllPosts allPosts={this.state.allPosts} />
          <Nav resetFoundPosts={this.resetFoundPosts} />
        </>
      )
    }
  }

  render() {
    return (
      <main className='app'>
        {!!this.state.error &&
          <h2 className="error-feedback">{this.state.error}</h2>
        }

        {!this.state.error && !this.state.allPosts.length &&
          <Loading />
        }

        <section className='main-page'>
          <Switch>
            <Route
              exact path="/"
              render={this.renderComponent}
            />

            <Route
              exact path="/new-post"
              render={() => {
                return <NewPostForm addNewPost={this.addNewPost} />
              }
              }
            />

            <Route
              exact path='/:pid'
              render={({ match }) => <ExpandedPost match={match.params.pid} />}
            />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App;
