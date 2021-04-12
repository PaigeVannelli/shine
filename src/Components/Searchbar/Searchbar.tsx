import React, {Component} from 'react'

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
      <form>
       <input
          type='text'
          placeholder='Body of your post*'
          name='content'
          value={this.state.searchInput}
          // onChange={event => this.handleChange(event)}
        />
        <button>Search</button>
      </form>
    )
  }
}

  
export default Searchbar