import React, { useState } from 'react';
import Image from '../Image/Image.jsx';
import ss from './FlipText.module.scss';
export default function FlipText({
  text,
  classNameText,
  imgSrc,
  classNameImg,
  classNameImgDescr,
  imgDescr = null,
  stylesText = null,
  stylesImg = null,
}) {
  const [isText, setIsText] = useState(true);
  return isText ? (
    <span
      className={classNameText}
      onClick={() => setIsText(false)}
      style={stylesText}
    >
      {text}
    </span>
  ) : (
    <div className={ss.img_container} onClick={() => setIsText(true)}>
      <Image
        src={imgSrc}
        description={imgDescr ?? text}
        classNameImg={classNameImg}
        classNameImgDescr={classNameImgDescr}
        stylesImg={stylesImg}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
