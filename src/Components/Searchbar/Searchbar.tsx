import React, { Component } from 'react'
import './Searchbar.scss'
import search from '../../assets/search.svg'

// interface IProps {
//     findPostsWithSearchTerm: (searchTerm: string) => void;
// }

interface ISearchbar {
    searchInput: string
    // feedback: string,
}

class Searchbar extends Component<{}, ISearchbar> {
  constructor(props: any) {
    super(props)

    this.state = {
        searchInput: ''
        // feedback: ''
    }
  }

  // handleChange = (event: { target: { name: string, value: string } ; }) => {
  //   this.setState({ searchInput: event.target.value })
  // }
  //
  // handleSubmit = (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   this.props.findPostsWithSearchTerm(this.state.searchInput)
  // }

  render() {
    return (
      <form className='searchbar'>
        <input
          data-cy='searchbar-input'
          className='search-input'
          type='text'
          placeholder='Body of your post*'
          name='content'
          value={this.state.searchInput}
          // onChange={this.handleChange}
        />
        <button className='search-button'>
        {/*<button className='search-button' onClick={this.handleSubmit}>*/}
          <img className='search-image' alt='search-icon' src={search}/>
        </button>
      </form>
    )
  }
}


export default Searchbar
