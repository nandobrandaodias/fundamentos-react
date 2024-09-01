import Post from "./Post/Post";
import PropTypes from 'prop-types'

export default function Posts({posts}){
    const postsList = posts.map((item)=><Post key={item.id} post={item} available_comments={true}/>)
    return(
        <>
        {postsList}
        </>
    )

}
Posts.propTypes = {
  posts: PropTypes.array
}