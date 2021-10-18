import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { updatePosts } from './PostList.jsx';


document.title = "Oscar's Retro Social";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


async function getPosts() {

    // fetch the posts and display them

    await fetch( "https://worker.os408.workers.dev/" )
         .then( response => response.json() )
         .then( stringArray => updatePosts( stringArray.map( s => JSON.parse(s) ) ) );
}

getPosts();
