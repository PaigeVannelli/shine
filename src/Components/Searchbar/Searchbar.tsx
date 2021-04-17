import React, { Component } from 'react'
import './Searchbar.scss'
import search from '../../assets/search.svg'

interface ISearchbar {
    searchInput: string
}

class Searchbar extends Component<{}, ISearchbar> {
  constructor(props: any) {
    super(props)

    this.state = {
        searchInput: ''
    }
  }

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
          <img className='search-image' alt='search-icon' src={search}/>
        </button>
      </form>
    )
  }
}


export default Searchbar
