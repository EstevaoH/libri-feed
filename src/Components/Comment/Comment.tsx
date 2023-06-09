import { Avatar } from "../Avatar/Avatar";
import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";
import { useState } from "react";


interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps) {
   const [likeCount, setLikeCount] = useState(0);

  

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1;
    })
  }

  function handleDeleteComment(){
    console.log('deletar')
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/estevaoh.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Estevão Ferreira</strong>
              <time title="1 de Março às 20:42h" dateTime="2022-05-11 20:43:30">
                Certa de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
