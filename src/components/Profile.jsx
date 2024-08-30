import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="bg-zinc-800 rounded">
      <img
        src="https://64.media.tumblr.com/b9da5f7ca77c62b8374b271b290f7296/91f0d053211afe48-d0/s1280x1920/596e9099ef1f9a29f703195a5b724800a46ec1d3.jpg"
        alt=""
        className="rounded-t"
      />

      <div className="">
        <img
          src={
            "https://64.media.tumblr.com/df263c8111ea3975fda6b7fd005e8218/6d0c1772ea4b784a-bf/s400x600/0a74e9ab6324c7d1c767aa748e4b314221681509.jpg"
          }
          alt=""
          className="w-16 h-16 p-1 rounded-lg mb-2 block mx-auto"
          style={{ marginTop: "calc(0px - 1.5rem - 6px)", zIndex: 999 }}
        />
        <strong className="block text-center">Killua Zoldick</strong>
        <span className="block text-center text-zinc-400">
          Software Engineer
        </span>
      </div>
      <hr className="border-zinc-600 my-5" />
      <div className="flex justify-center pb-6">
        <Link to="/profile">
          <button
            className="border-2 border-green-500 py-3 px-5 rounded-lg font-bold text-green-500
        hover:bg-zinc-700"
          >
            Acessar meu perfil
          </button>
        </Link>
      </div>
    </div>
  );
}
