import React, { useState } from "react";

const SearchBar = ( { onFormSubmit} ) => {
    const [term, setTerm] = useState("");

    const onSubmit = (event) => {
        event.prevntDefault();
        // callback to parent comp
        onFormSubmit(term);
    }
    
    return (
        <div className="search-bar ui segment">
            <form className="ui form"
                onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" 
                        value={term} 
                        onChange={(event) => setTerm(event.target.value)}> 
                    </input> 
                </div>
            </form>
        </div>
    )
};

export default SearchBar;