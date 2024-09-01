import FormComment from "./FormComment";
import CommentView from "./Comment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Comments({ postId, commentsList }) {
  const [comments_list, setCommentsList] = useState(commentsList);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const postIndex = posts.findIndex((x) => x.id == postId);
    posts[postIndex]["comments"] = comments_list;
    localStorage.setItem("posts", JSON.stringify(posts));
  });

  let comments = comments_list.map((item) => (
    <CommentView key={item.id} comment={item} />
  ));

  function addComment(comment) {
    setCommentsList([...comments_list,{
      id: comments_list.length + 1,
      user: comment.user,
      comment: comment.text,
    }]);
  }

  return (
    <div>
      <FormComment addComment={addComment} />

      <div className="mt-12">
        <h3 className="text-2xl">Comentários ({comments_list.length})</h3>
        {comments}
      </div>
    </div>
  );
}

Comments.propTypes = {
  postId: PropTypes.number,
  commentsList: PropTypes.array,
};

// CORRIGIR ESSA ADIÇÃO DE COMENTÁRIOS
// QUALQUER COISA DESABILITAR E DEIXAR APENAS POSTS PERMITIDOS
// CRIAÇÃO DO GUARD DAS ROTAS E LOGIN
