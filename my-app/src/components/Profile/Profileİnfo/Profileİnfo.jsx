import React from "react";
import s from"./../profile.module.css"

const Profileİnfo = () => {
  return (
    <div>
      <div className={s.wallpapper}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />
      </div>
        <div className={s.descriptionBlock} >ava +description</div>
    </div>
  );
};

export default Profileİnfo;
