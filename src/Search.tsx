import React, { useRef } from 'react';
import './Components/Searchbar/Searchbar.scss'
import search from './assets/search.svg'

// can do as type or interface -- either way works
type SearchProps = {
    findPostsWithSearchTerm: (searchTerm: string) => void;
}
// interface SearchProps {
//     findPostsWithSearchTerm: (searchTerm: string) => void
// }

const Search: React.FC<SearchProps> = (props) => {
    // refers to the type of data that will be stored inside the ref, default or initialized with null
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = searchInputRef.current!.value; // ! tells TS to chill until it's set (it's okay to be null)
         props.findPostsWithSearchTerm(enteredText)
    }

    return (
        <form className='searchbar'>
            <input
                data-cy='searchbar-input'
                className='search-input'
                type='text'
                placeholder='Body of your post*'
                name='content'
                ref={searchInputRef}

            />
            <button className='search-button' onClick={handleSubmit}>
                <img className='search-image' alt='search-icon' src={search}/>
            </button>
        </form>
    )
}

export default Search;
