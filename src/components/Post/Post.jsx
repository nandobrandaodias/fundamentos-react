import Comments from './Comments';
import Content from './Content';
import PropTypes from 'prop-types'

export default function Post({post, available_comments}) {
  return (
    <main className="p-6 bg-zinc-800 rounded mb-5">
      <Content post={post}/>
      {
        available_comments ? <>
        <hr className="border-zinc-600 my-5"/> 
        <Comments postId={post.id} commentsList={post.comments}/> 
        </>: ''
      }
    </main>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  available_comments: PropTypes.bool
}