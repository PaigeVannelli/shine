import React, { useRef } from 'react';
import './Searchbar.scss';
import search from '../../assets/search.svg';

type SearchProps = {
    findPostsWithSearchTerm: (searchTerm: string) => void;
}

const Searchbar: React.FC<SearchProps> = (props) => {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = searchInputRef.current!.value;
        props.findPostsWithSearchTerm(enteredText)
        searchInputRef.current!.value = ''
    }

    return (
        <form className='searchbar'>
            <input
                data-cy='search-input'
                className='search-input'
                type='text'
                placeholder='Body of your post*'
                name='content'
                ref={searchInputRef}

            />
            <button className='search-button' data-cy='search-button' onClick={handleSubmit}>
                <img className='search-image' alt='search-icon' src={search}/>
            </button>
        </form>
    )
}

export default Searchbar
