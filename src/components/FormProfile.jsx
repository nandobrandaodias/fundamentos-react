import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function FormProfileCard({ user }) {
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [urlImage, setUrlImage] = useState();
  const [description, setDescription] = useState();

  function selectImage(i){
      setUrlImage(i)
  }

  if (user) {
      setName(user?.name);
      setRole(user?.role);
      setDescription(user?.description);
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
            Edição de Perfil
          </h3>
          <hr />
        </div>

        <div className="p-6">
          <div className="col-span-full my-3">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              Foto do Perfil:
            </label>
            <div className="mt-1 flex gap-x-4">
              <img src={urlImage} alt="" className="w-2/12 bg-white rounded-lg min-h-40" />
              <input
                type="file"
                name="urlImage"
                id="urlImage"
                placeholder="Digite seu Nome..."
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
                focus:border-green-400 focus:outline-none px-3 py-2 w-10/12 h-min"
                onChange={(e) => selectImage(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-full my-3">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              Nome:
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu Nome..."
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
                focus:border-green-400 focus:outline-none px-3 py-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-full my-3">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              Cargo:
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu Cargo..."
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
                focus:border-green-400 focus:outline-none px-3 py-2 w-full"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-full my-3">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6"
            >
              Descrição:
            </label>
            <div className="mt-1">
              <textarea
                className="bg-zinc-950 border-2 border-green-400 rounded text-white
                focus:border-green-400 focus:outline-none p-3 w-full h-32"
                placeholder="Digite seu comentário!"
                type="text"
                name="comment"
                id="comment"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-green-700 py-3 px-5 rounded w-full font-bold
          hover:bg-green-900"
            type="submit"
          >
            Salvar
          </button>
          <Link to="/profile">
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

FormProfileCard.propTypes = {
  user: PropTypes.object,
};
