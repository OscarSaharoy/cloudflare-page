
function Post( props ) {

	return (
		<div className="post">
          <p> User: {props.username} </p>
          <p> {props.text} </p>
        </div>
    )
}

export default Post;
