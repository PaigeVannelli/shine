import React from 'react';
import './Components/Searchbar/Searchbar.scss'
import search from './assets/search.svg'

interface SearchProps {
    findPostsWithSearchTerm: any
}

const Search: React.FC<SearchProps> = (props) => {
    return (
        <form className='searchbar'>
            <input
                data-cy='searchbar-input'
                className='search-input'
                type='text'
                placeholder='Body of your post*'
                name='content'
                // value={this.state.searchInput}
                // onChange={this.handleChange}
            />
            {/*<button className='search-button' onClick={this.handleSubmit}>*/}
            <button className='search-button'>
                <img className='search-image' alt='search-icon' src={search}/>
            </button>
        </form>
    )
}

export default Search;
