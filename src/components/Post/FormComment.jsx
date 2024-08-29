import { useState } from "react";
import PropTypes from 'prop-types'

export default function FormComment({ addComment }) {

  const [idx, setId] = useState(1);
  const [textInput, setTextInput] = useState("");

  function newComment(){
    let comment = {id: idx, text: textInput}
    setId(idx+1);
    addComment(comment);
  }

  return (
    <>
      <h3 className="font-medium">Deixe seu comentário!</h3>

      <textarea
        className="bg-zinc-950 border-2 border-green-400 rounded text-white
        focus:border-green-400 focus:outline-none p-3 w-full my-4 h-32"
        placeholder="Digite seu comentário!"
        type="text"
        name="comment"
        id="comment"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />

      <button
        className="bg-green-700 py-3 px-5 rounded font-bold"
        onClick={newComment}
      >
        Publicar
      </button>
    </>
  );
}

FormComment.propTypes = {
    addComment: PropTypes.func
}