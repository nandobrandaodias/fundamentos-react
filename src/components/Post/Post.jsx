import Comments from './Comments';
import Content from './Content';

export default function Post() {
  return (
    <div className="p-6 bg-zinc-800 rounded mb-5">
      <Content />
      <hr className="border-zinc-600 my-5"/>
      <Comments />
    </div>
  );
}
