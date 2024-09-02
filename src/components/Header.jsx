import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/hxh.png";

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <nav className="bg-zinc-800 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Abrir Menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center align-middle">
              <Link to="/home">
                <img
                  className="h-16 w-auto block mx-auto"
                  src={logo}
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 h-full items-center">
                <Link
                  to="/home"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                >
                  Meu Perfil
                </Link>
                <Link
                  to="/posts/create"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                >
                  Criação de Post
                </Link>

                <Link
                  onClick={logout}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                >
                  Sair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-white"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Meu Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}
