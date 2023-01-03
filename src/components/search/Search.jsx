import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Search = () => {
    const {search, onSearch} = useContext(AppContext)
    return (
        <div className="dashboard-content__line log-form__line log-form__line_search">
            <input type="search" 
            name="search" 
            placeholder="Search" 
            className="log-form__inp "
            value={search}
            onChange={(e) => onSearch(e.target.value) }
            />
         </div>
    );
};

export default Search;