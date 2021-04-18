import './App.scss';
import React, { Component } from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'
import Loading from '../Loading/Loading'
import AllPosts from '../AllPosts/AllPosts'
// import Searchbar from '../Searchbar/Searchbar'
import Search from "../../Search";
import Nav from '../Nav/Nav'
import { IPost } from '../../types'
import { Route, Switch } from 'react-router-dom';
import { postForm, getPosts } from '../../apiCalls';
// import ExpandedPost from '../ExpandedPost/ExpandedPost'

export interface IAppState {
  allPosts: Array<IPost>;
  foundPosts: Array<IPost>;
  error: string;
}

// interface IRouteProps {
//
// }

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
          this.setState({ error: 'Please fill out both fields.' })
        }
      })
  }

  findPostsWithSearchTerm = (searchTerm: string) => {
    console.log("SEARCH TERM: ",searchTerm)

    // this is only finding the first one, not sure why
    return this.setState({ foundPosts: this.state.allPosts.filter(post => post.content.includes(searchTerm))} )

  }

  resetFoundPosts = () => {
    this.setState({ foundPosts: [] })
  }

  // renderComponent = () => {
  //   if (this.state.foundPosts.length > 0) {
  //     return (
  //         <section className='main-page'>
  //           <Search findPostsWithSearchTerm={this.findPostsWithSearchTerm} />
  //           <AllPosts allPosts={this.state.foundPosts} />
  //           <Nav resetFoundPosts={this.resetFoundPosts}/>
  //         </section>
  //     )
  //   } else if (this.state.allPosts.length > 0) {
  //     return (
  //       <section className='main-page'>
  //         <Search findPostsWithSearchTerm={this.findPostsWithSearchTerm} />
  //         <AllPosts allPosts={this.state.allPosts} />
  //       {/*  <Nav resetFoundPosts={this.resetFoundPosts}/>*/}
  //       {/*</section>*/}
  //     )
  //   } else if (this.state.error) {
  //     return (
  //       <h2>{this.state.error}</h2>
  //     )
  //   } else {
  //     return (
  //       <Loading />
  //     )
  //   }
  // }

    renderComponent = () => {
        if (this.state.foundPosts.length > 0) {
            return (
                <AllPosts allPosts={this.state.foundPosts} />
            )
        } else if (this.state.allPosts.length > 0) {
            return (
                <AllPosts allPosts={this.state.allPosts} />
            )
        }
    }

  // findPost = () => {
  //   const currentPost = this.state.allPosts.find(post => {
  //     return post.pid ===
  //   })
  // }

  render() {
    return (
      <main className='app'>
          {!!this.state.error &&
            <h2 className="error-feedback">{this.state.error}</h2>
          }

          {!this.state.error && !this.state.allPosts.length &&
            <Loading />
          }
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <section className='main-page'>
                  <Search findPostsWithSearchTerm={this.findPostsWithSearchTerm} />
                  {this.renderComponent}
                  <Nav resetFoundPosts={this.resetFoundPosts}/>
                </section>
              )
            }}
          />
          <Route
            exact
            path="/new-post"
            render={() => {
              return <NewPostForm addNewPost={this.addNewPost} />
            }
            }
          />
          {/* <Route
            exact path='/:pid'
            render={({ match }) => <ExpandedPost match={match} expandedPost={this.state.expandedPost}/>
              // const currentPost = this.state.allPosts.find(post => {
              //   return post.pid === parseInt(match.params.pid)
              // })
            }}

          /> */}
        </Switch>
      </main>
    )
  }
}

export default App;
