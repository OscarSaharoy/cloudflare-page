import React, { useState } from 'react';
import Post from './Post.jsx';


export let updatePosts;
export let addPost;

export function PostList() {

	const [posts, setPosts] = useState( [] ); // array state

    updatePosts = newPosts => setPosts( posts => newPosts );
    addPost = newPost => setPosts( posts => [ ...posts, newPost ] );

	return <div>
	        { posts.map( (post,i) => <Post key={i} username={post.username} text={post.text} /> ) }
    	   </div>
}
