
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
    //fetch data locally at first 
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
