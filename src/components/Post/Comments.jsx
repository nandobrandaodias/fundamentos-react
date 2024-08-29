import { useState } from "react";
import FormComment from "./FormComment";
import CommentView from "./Comment";

export default function Comments(){
    const [comments, setComments] = useState([]);
    let listComments; 

    function addComment(comment){
        setComments([
            ...comments,
            {
                id: comment.id,
                user: {
                    name: 'Killua Zoldyck',
                    url: 'https://64.media.tumblr.com/df263c8111ea3975fda6b7fd005e8218/6d0c1772ea4b784a-bf/s400x600/0a74e9ab6324c7d1c767aa748e4b314221681509.jpg'
                },
                comment: comment.text
            }
        ]);
    }

    listComments = comments.map((item)=><CommentView key={item.id} comment={item} />)


    return(
        <div>
            <FormComment addComment={addComment} />

            <div className="mt-12">
                <h3 className="text-2xl">Comentários ({comments.length})</h3>
                {listComments}
            </div>
        </div>
    )
}
