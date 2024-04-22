import { PostCard } from "./PostCard";
import styles from "./Post.module.css";
import { useState } from "react";

export const Post = ({ id, title, remove }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <PostCard id={id} title={title} remove={remove}></PostCard>
      {visible ? (
        <div className={styles.modal}>
          <div className={styles.modalWindow}>
            <button
              onClick={() => setVisible(!visible)}
            >Закрыть</button>
            <h1>{title}</h1>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setVisible(!visible)}
        >Открыть</button>
      )}
    </>
  );
};