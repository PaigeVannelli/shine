import React, { useRef } from 'react';
import './Components/Searchbar/Searchbar.scss'
import search from './assets/search.svg'

interface SearchProps {
    findPostsWithSearchTerm: any
}

const Search: React.FC<SearchProps> = (props) => {
    // refers to the type of data that will be stored inside the ref, default or initialized with null
    const searchInputRef = useRef<HTMLInputElement>(null);


    // handleChange = (event: { target: { name: string, value: string } ; }) => {
    //   this.setState({ searchInput: event.target.value })
    // }
    //
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = searchInputRef.current!.value; // ! tells TS to chill until it's set (it's okay to be null)
      // this.props.findPostsWithSearchTerm(this.state.searchInput)
    }

    return (
        <form className='searchbar'>
            <input
                data-cy='searchbar-input'
                className='search-input'
                type='text'
                placeholder='Body of your post*'
                name='content'
                ref={textInputRef}
                // value={this.state.searchInput}
                // onChange={this.handleChange}
            />
            <button className='search-button' onClick={handleSubmit}>
                <img className='search-image' alt='search-icon' src={search}/>
            </button>
        </form>
    )
}

export default Search;
