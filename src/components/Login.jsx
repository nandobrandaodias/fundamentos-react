import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/hxh.png'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navRef = useRef(navigate)

  useEffect(()=>{
    if(localStorage.getItem("token")) navRef.current('/home')
  })

  function login(e) {
    e.preventDefault();
    if (email !== "killua@hxh.com" || password !== "senha123") {
      setError(
        <p className="text-center py-2 mt-6 bg-red-500 border-2 border-red-600 rounded-lg">
          E-mail ou senha incorretos!
        </p>
      );
      return;
    }

    localStorage.setItem(
      "token",
      JSON.stringify({
        name: "Killua Zoldyck",
        role: "Desenvolvedor Web",
        url: "https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg",
        description: "Um desenvolvedor que tem uma licença Hunter!",
      })
    );
    navRef.current("/home");
  }

  return (
    <main className="w-screen h-screen flex">
      <section className="p-6 bg-zinc-800 m-auto rounded-lg">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="h-24 w-auto block mx-auto"
            src={logo}
            alt="Your Company"
          />
        </div>
        <form onSubmit={login}>
          <div className="col-span-full my-4">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              E-mail:
            </label>
            <div className="mt-1">
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Digite seu E-mail..."
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
              focus:border-green-400 focus:outline-none px-3 py-2 w-96"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-full my-4">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              Senha:
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Digite sua senha..."
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
              focus:border-green-400 focus:outline-none px-3 py-2 w-96"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            className="bg-green-700 py-3 px-5 rounded w-full font-bold
          hover:bg-green-900"
            type="submit"
          >
            Acessar
          </button>
        </form>
        {error}
      </section>
    </main>
  );
}
