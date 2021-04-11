
import './App.scss';
import React, { Component } from 'react'
// import Loading from '../Loading/Loading';
// import MainPage from '../MainPage/MainPage';

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
    // fetch('https://shine-api.herokuapp.com/api/v1/posts')
    fetch('http://localhost:5000/api/v1/posts')
        .then(response => response.json())
        .then(data => {
            this.setState({allPosts: data.posts})
        })
        .catch(error => console.log(error))
  }

  // renderComponent = () => {
  //   if (this.state.allPosts.length > 0) {
  //     return (
  //         <MainPage allPostsData={this.state.allPosts} />
  //     )
  //   } else if (this.state.error) {
  //     return (
  //         <h2>{this.state.error}</h2>
  //     )
  //   } else {
  //     return (
  //         <Loading />
  //     )
  //   }
  // }

  render() {
    return (
        <main>
          <h1>Shine</h1>
          <section className="wrapper">
            {/*{() => this.renderComponent()}*/}
            {/*/!*  router with switch -- home, newPost, 404  *!/*/}

            {this.state.allPosts.map(post => post.id)}

          </section>
        </main>
    )
  }
}

export default App;
