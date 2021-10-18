
function Post( props ) {

    // just a div containing username and text

	return (
		<div className="post">
          <p className="cyan"> <span className="bold orange">User:</span> {props.username} </p>
          <p> {props.text} </p>
        </div>
    )
}

export default Post;
