import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function ProfileCard({user}) {
  return (
    <section className="bg-zinc-800 rounded">
      <img
        src="https://media1.tenor.com/m/6cu5bNft-XMAAAAC/killua-anime.gif"
        alt=""
        className="rounded-t w-full"
      />

      <div className="">
        <img
          src={user.url}
          alt=""
          className="w-16 h-16 p-1 rounded-lg mb-2 block mx-auto"
          style={{ marginTop: "calc(0px - 1.5rem - 6px)", zIndex: 999 }}
        />
        <strong className="block text-center">{user.name}</strong>
        <span className="block text-center text-zinc-400">
          {user.role}
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
    </section>
  );
}


ProfileCard.propTypes = {
  user: PropTypes.object
}