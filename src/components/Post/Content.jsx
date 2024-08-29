import styles from "./Post.module.css";

export default function Content() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={'https://64.media.tumblr.com/df263c8111ea3975fda6b7fd005e8218/6d0c1772ea4b784a-bf/s400x600/0a74e9ab6324c7d1c767aa748e4b314221681509.jpg'}
            alt=""
            className="w-14 h-14 p-1 border-2 border-green-400 rounded"
          />
          <div className="pl-4 content-center">
            <p className="text-lg font-bold">Killua Zoldyck</p>
            <p className="text-base text-zinc-400">Desenvolvedor Front-end</p>
          </div>
        </div>
        <time title="" className="self-center text-zinc-400 text-sm">Publicado há 1h</time>
      </div>

      <div className={styles.content + " mt-6"}>
        <p>Projeto em React!!! 👋 </p>
        <p>Criado para fins de aprendizado, espero criar outros projetos mais elaborados e conseguir transformar
         minhas ideias que estão no papel em aplicativos!  🚀 </p>
        <p>👉 <a href="https://www.linkedin.com/in/nandobrandaodias" target="_blank">Acesse meu linkedin</a> </p>
        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
      </div>
    </>
  );
}
