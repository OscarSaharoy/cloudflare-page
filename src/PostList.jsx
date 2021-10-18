import React, { useState } from 'react';
import Post from './Post.jsx';


// 2 export functions to update the posts variable or add an element to it

export let updatePosts;
export let addPost;


export function PostList() {

	// create posts state var

	const [posts, setPosts] = useState( [] );

	// define our 2 export funcs

    updatePosts = newPosts => setPosts( posts => newPosts );
    addPost     = newPost  => setPosts( posts => [ ...posts, newPost ] );

    // render list of posts

	return <div>
	        { posts.map( (post,i) => <Post key={i} username={post.username} text={post.text} /> ) }
    	   </div>
}
