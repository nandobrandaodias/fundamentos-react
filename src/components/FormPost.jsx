import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Post from "./Post/Post";

export default function FormPost() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('token'));
  const [content, setContent] = useState("")
  const [previewPost, setPreviewPost] = useState();

  function previewingPost(e) {
    setContent(e);

    let post = {
      user,
      content,
    };

    setPreviewPost(<Post available_comments={false} post={post} />)
  }

  function createPost() {
    let posts = JSON.parse(localStorage.getItem("posts"));

    const newPost = {
      id: posts.length + 1,
      user,
      content,
      comments: [],
    };
    posts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/profile");
  }

  return (
    <section className="container py-4">
      <div className="bg-zinc-800 rounded mb-5">
        <div className="relative">
          <img
            src="https://64.media.tumblr.com/b9da5f7ca77c62b8374b271b290f7296/91f0d053211afe48-d0/s1280x1920/596e9099ef1f9a29f703195a5b724800a46ec1d3.jpg"
            alt=""
            className="rounded-t"
          />
          <button
            className="bg-green-700 py-3 px-5 rounded-lg font-bold text-zinc-0
            hover:bg-zinc-700 absolute right-1 bottom-1"
          >
            Alterar Banner do Perfil
          </button>
        </div>

        <div className="bg-zinc-800 rounded px-6 pt-4">
          <h3 className="text-3xl font-bold mb-2 text-zinc-200">
            Criação de Post
          </h3>
          <hr />
        </div>

        <div className="p-6">
          <div className="col-span-full my-3">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              Conteúdo:
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                name="name"
                id="name"
                placeholder="Digite o conteúdo..."
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
                focus:border-green-400 focus:outline-none px-3 py-2 w-full"
                value={content}
                onChange={(e) => previewingPost(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-zinc-800 rounded pt-4 mb-4">
            <h3 className="text-3xl font-bold mb-2 text-zinc-200">
              Preview do Post
            </h3>

            <div className="w-10/12 mx-auto border-2 border-zinc-700 rounded-lg">
            {previewPost}
            </div>


          </div>

          <button
            className="bg-green-700 py-3 px-5 rounded w-full font-bold
          hover:bg-green-900"
            type="submit"
            onClick={createPost}
          >
            Salvar
          </button>
          <Link to="/">
            <button
              className="bg-zinc-700 py-3 px-5 rounded w-full font-bold mt-3
          hover:bg-zinc-900"
              type="submit"
            >
              Cancelar
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

FormPost.propTypes = {
  user: PropTypes.object,
};
