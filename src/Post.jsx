
function Post( props ) {

	return (
		<div className="post">
          <p className="cyan"> <span className="bold orange">User:</span> {props.username} </p>
          <p> {props.text} </p>
        </div>
    )
}

export default Post;
