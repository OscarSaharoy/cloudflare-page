import React, { useState } from 'react';
import { addPost } from './PostList.jsx';


export function MakePost( props ) {

	const [ name, setName ] = useState( "" );
	const [ text, setText ] = useState( "" );

	return <div>
		     <p className="bold magenta"> Make a Post! </p>
		     <p className="cyan"> Please Type Here: </p>
		     
		     <textarea spellCheck="false" value={text} onChange={ evt => setText( evt.target.value ) } ></textarea>
		     
		     <div className="submit-holder">
		       <input type="text" placeholder="Your Name?" value={name} onChange={ evt => setName( evt.target.value ) } />
		       <button type="button" onClick={ () => sendPost(name, text) }> Post. </button>
		     </div>
		   </div>
}


async function sendPost( name, text ) {

	const newPost = { username: name, text: text };

	addPost( newPost );

	await fetch( "https://worker.os408.workers.dev/", {
	          method: 'POST',
	     	  headers: {
	              'Content-Type': 'application/json',
	      	      'Accept': 'application/json'
	          },
	          body: JSON.stringify( newPost ) } );
}
