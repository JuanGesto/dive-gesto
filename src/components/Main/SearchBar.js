import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
    const { search, isSearching, searching } = useContext(SearchContext);

    return searching ? (
        <div id="searchBarContainer">
            <div id="searchBar">
                <form action="" onSubmit={(e)=>search(document.getElementById("searchInput").value, e)}>
                    <label htmlFor="searchInput">Search by exact product match</label>
                    <div>
                    <input type="text" className="form-control" name="searchInput" id="searchInput" autoFocus/>
                    <button className="btn btn-light">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                    </div>
                </form>
            </div>
            <div id="searchBackground" onClick={()=> {isSearching()}}></div>
        </div>
    ) : (
        <></>
    );
};

export default SearchBar;
