import React, { useState } from "react";
//import SearchResult from './SearchResult';

const Search = () => {
    const [posts, setPosts] = useState("");
    const inputEvent = (e) => {
        const data = e.target.value;
        console.log(data);
        setPosts(data);
    }
    return (

        <div className="searchbar">
            <input
                type="text"
                placeholder="Search topic"
                onChange={inputEvent}
                value={posts.title}

            />
            {/* <SearchResult /> */}


            <button type="submit">Search</button>


        </div>

    )

}


export default Search