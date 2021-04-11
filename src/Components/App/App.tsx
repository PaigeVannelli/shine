
import './App.scss';
import React, { Component } from 'react'
import NewPostForm from '../NewPostForm/NewPostForm'

interface IAppState {
  allPosts: Array<object>;
  error: string;
}

class App extends Component<IAppState> {
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
