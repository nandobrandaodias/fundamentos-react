import ProfileCard from "./ProfileCard";
import Posts from "./Posts";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [idPost, setIdPost] = useState(1);
  const user = getUser();
  const posts = getPosts();

  function getUser() {
    let token = localStorage.getItem("token");
    if (!token) return Navigate("/");

    return JSON.parse(token);
  }

  function getPosts() {
    let posts = localStorage.getItem("posts");
    if (localStorage.getItem("posts")) return JSON.parse(posts);

    let defaultPosts = [];
    defaultPosts.unshift({
      id: idPost,
      user: {
        name: "Gon",
        role: "Designer",
        url: "https://i.pinimg.com/236x/36/e4/55/36e4557fc88aff77d26ec56f6d68c951.jpg",
      },
      content: `Projeto em React!!! 👋   
        Criado para fins de aprendizado, espero criar outros projetos mais elaborados e conseguir transformar minhas ideias que estão no papel em aplicativos!  🚀    
        👉 [Acesse Meu Linkedin](https://www.linkedin.com/in/nandobrandaodias)`,
      comments: [],
    });
    setIdPost(idPost + 1);
    localStorage.setItem("posts", JSON.stringify(defaultPosts));
    return defaultPosts;
  }

  return (
    <>
      <div className="w-11/12 md:w-10/12 max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full gap-y-4 md:w-3/12 p-4">
          <ProfileCard user={user} />
        </div>
        <div className="w-full gap-y-4 md:w-9/12 p-4">
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
}
