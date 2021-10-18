import React, { useState } from 'react';
import { addPost } from './PostList.jsx';


export function MakePost( props ) {

	// create state vars for the name and text fields

	const [ name, setName ] = useState( "" );
	const [ text, setText ] = useState( "" );

	// create callbacks for the onChange event

	const onNameChange = evt => setName( evt.target.value );
	const onTextChange = evt => setText( evt.target.value );

	// helper function to pass data to sendPost when the button is clicked
	// and to clear the text area

	const onPostClick = () => { if( !text ) return;
							    sendPost( name || "anonymous", text ); 
								setText( "" ); }

	// return the form

	return <div>
		     <p className="bold magenta"> Make a Post! </p>
		     <p className="cyan"> Please Type Here: </p>
		     
		     <textarea spellCheck="false" value={ text } onChange={ onTextChange } ></textarea>
		     
		     <div className="submit-holder">
		       <input type="text" placeholder="Your Name?" value={ name } onChange={ onNameChange } />
		       <button type="button" onClick={ onPostClick }> Post. </button>
		     </div>
		   </div>
}


async function sendPost( name, text ) {

	// create the post object and add it to the local list of posts

	const newPost = { username: name, text: text };
	addPost( newPost );

	// send the post object to our worker

	await fetch( "https://worker.os408.workers.dev/", {
	          method: 'POST',
	     	  headers: {
	              'Content-Type': 'application/json',
	      	      'Accept': 'application/json'
	          },
	          body: JSON.stringify( newPost ) } );
}
