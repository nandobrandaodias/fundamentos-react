import PropTypes from 'prop-types'
import Markdown from 'react-markdown';

export default function Content({post}) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={post.user.url}
            alt=""
            className="w-14 h-14 p-1 border-2 border-green-400 rounded"
          />
          <div className="pl-4 content-center">
            <p className="text-lg font-bold">{post.user.name}</p>
            <p className="text-base text-zinc-400">{post.user.role}</p>
          </div>
        </div>
        <time title="" className="self-center text-zinc-400 text-sm">Publicado há 1h</time>
      </div>

      <div className="mt-6">
        <Markdown>
        {post.content}
        </Markdown>
      </div>
    </>
  );

}
Content.propTypes = {
  post: PropTypes.object,
}