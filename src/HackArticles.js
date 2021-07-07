import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Backdrop from '@material-ui/core/Backdrop';
//import CircularProgress from '@material-ui/core/CircularProgress';


const ReactArticles = () => {
    const [posts, setPosts] = useState([]);
    const [topic, setTopic] = useState("react");
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios
            .get(`http://hn.algolia.com/api/v1/search?query=${topic}&page=${page}`)
            .then(res => setPosts(res.data.hits));
    }, [topic, page]);

    const inputEvent = (e) => {
        const data = e.target.value;
        console.log(data);
        setTopic(data);
    }
    const handleClick = () => {
        setTopic
    }



    return (
        <div className="content">
            {/* {posts ? posts : <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>} */}
            <div className="content"></div>
            <ol type="1">
                {

                    posts.map(post =>

                        <li >

                            <a href={post.url}>{post.title}</a>
                        </li>

                    )


                }
            </ol>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search topic"
                    onChange={inputEvent}
                    value={posts.title}

                />



                <button type="submit">Search</button>

                <button onclick=""></button>

            </div>
        </div >

    );
}
export default ReactArticles

