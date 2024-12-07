import React from 'react'
import { CiSearch } from 'react-icons/ci'
import SearchResult from './SearchResult'
import NoResultText from './NoResultText'



export default function SearchSection() {
    return (
        <div className='search'>
            <div className='search-container'>
                <input type="text" placeholder='Search' />
                <CiSearch />
            </div>
            {/* <div className="search_input_result">
                <NoResultText />
                <SearchResult />
            </div> */}
        </div>
    )
}
