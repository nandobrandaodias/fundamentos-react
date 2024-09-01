import ProfileCard from "./ProfileCard";
import Posts from "./Posts";
import { useState } from "react";

export default function Home() {
  const [idPost, setIdPost] = useState(1);
  const user = getUser(); 
  const posts = getPosts();

   function getUser(){
    if (localStorage.getItem("user")) return(JSON.parse(localStorage.getItem("user")));
    
    let defaultUser = {
      name: "nome padrão",
      role: "role padrão",
      url: "eae",
      description: "descrição padrão",  
    }

    localStorage.setItem("user", JSON.stringify(defaultUser));
    return defaultUser;
  }
  
  function getPosts(){
    if (localStorage.getItem("posts"))
      return(JSON.parse(localStorage.getItem("posts")));

    
    let defaultPosts = []
    defaultPosts.unshift(
      {
        id: idPost,
        user: {
          name: "Killua",
          role: "Desenvolvedor",
          url: "https://i.pinimg.com/736x/e9/a9/a6/e9a9a688d24d9107a099089d663401e4.jpg"
        },
        content: `Projeto em React!!! 👋
        Criado para fins de aprendizado, espero criar outros projetos mais elaborados e conseguir transformar minhas ideias que estão no papel em aplicativos!  🚀 <br>
        👉 [Acesse Meu Linkedin]("https://www.linkedin.com/in/nandobrandaodias")`,
        comments: []
      }
    )
    setIdPost(idPost + 1)
    localStorage.setItem("posts", JSON.stringify(defaultPosts));
    return defaultPosts
  }

  return (
    <>
      <div className="w-11/12 md:w-10/12 max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full gap-y-4 md:w-3/12 p-4">
          <ProfileCard user={user} />
        </div>
        <div className="w-full gap-y-4 md:w-9/12 p-4">
          <Posts posts={posts}/>
        </div>
      </div>
    </>
  );
}
