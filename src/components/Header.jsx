// import styles from "./Header.module.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="content-center h-24 bg-zinc-900">
      <Link to="/">
      <h1 className="text-3xl text-center font-bold">Hello world!</h1>
      </Link>
    </div>
  );
}
