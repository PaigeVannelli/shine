import React, {Component} from 'react'
import './Searchbar.scss'

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
          className='search-input'
          type='text'
          placeholder='Body of your post*'
          name='content'
          value={this.state.searchInput}
          // onChange={event => this.handleChange(event)}
        />
        <button className='search-button'>
          <img className='search-image' src='../../assets/filter.svg'/>
        </button>
      </form>
    )
  }
}

  
export default Searchbar