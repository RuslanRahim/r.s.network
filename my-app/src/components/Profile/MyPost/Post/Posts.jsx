import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
      />
      {props.message}
     
      <div>
        <span>like</span>{props.likesCount}
      </div>
  
    </div>
  );
};

export default Posts;
