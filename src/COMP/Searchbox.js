import React from "react";
import "./search.css"



const SearchBox = ({ onk, onc, location }) => {
    return (
        <div id="searchBox">
            <input
                type="search"
                placeholder="ادخل مدينة"
                id="search"
                value={location}
                onChange={onc}
                onKeyPress={onk}
            />
        </div>
    );
};

export default SearchBox;