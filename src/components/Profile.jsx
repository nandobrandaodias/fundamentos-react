import { Link } from "react-router-dom";

export default function ProfileCardPage() {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <div className="container">
        <div className="bg-zinc-800 rounded">
          <img
            src="https://64.media.tumblr.com/b9da5f7ca77c62b8374b271b290f7296/91f0d053211afe48-d0/s1280x1920/596e9099ef1f9a29f703195a5b724800a46ec1d3.jpg"
            alt=""
            className="rounded-t"
          />

          <div className="">
            <img
              src={user.url}
              alt=""
              className="w-32 h-32 p-1 rounded-lg mb-2 block mx-auto"
              style={{ marginTop: "calc(0px - 5rem - 8px)", zIndex: 999 }}
            />
            <strong className="block text-2xl text-center">{user.name}</strong>
            <span className="block text-base text-center text-zinc-400">
              {user.role}
            </span>
            <p className="block text-base text-center my-2">
              {user.description}
            </p>
          </div>
          <hr className="border-zinc-600 my-5" />
          <div className="flex justify-center pb-6">
            <Link to="edit">
            <button
              className="border-2 border-green-500 py-3 px-5 rounded-lg font-bold text-green-500
              hover:bg-zinc-700" 
              >
              Editar meu perfil
            </button>
                </Link>
          </div>
        </div>  
      </div>
    </>
  );
}
