import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogİtem = (props) => {
    let path="/dialogs/"+props.id;
  return(
      <div className={`${s.dialog} ${s.active}`}>
          <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
          />
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

export default Dialogİtem