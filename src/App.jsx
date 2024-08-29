import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header />
      <div className="container flex py-2">
        <div className="w-3/12 p-4">
          <Profile />
        </div>
        <div className="w-9/12 p-4">
          <Posts />
        </div>
      </div>
    </>
  );
}

export default App;


// Validação de Props
// Evento de Criação de Comentário
// Rotas