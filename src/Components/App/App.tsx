
import './App.scss';
import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import NewPostForm from '../NewPostForm/NewPostForm'

interface IAppState {
  allPosts: Array<object>;
  error: string;
}

class App extends Component<{}, IAppState> {
  constructor(props: IAppState | Readonly<IAppState>) {
    super(props);
    this.state = {
      allPosts: [],
      error: ''
    }
  }

  componentDidMount = () => {
    //fetch data locally at first 
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
    return (
      <main>
        <h1>hello world</h1>
        {/* {conditional render} */}
        {/* <Loading /> */}
        {/* <MainPage /> */}
      </main>
    )
  }
}

export default App;
