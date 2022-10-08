import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searching, setSearching] = useState(false);
    const navigate = useNavigate();

    const search = (query, e) => {
        navigate("/search/" + query);
        setSearchTerm(query);
        isSearching();
        e.preventDefault();
    };

    const isSearching = () => {
        searching ? setSearching(false) : setSearching(true);
    };

    return (
        <SearchContext.Provider
            value={{ searchTerm, searching, search, isSearching }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
