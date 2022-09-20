import React, { useState } from 'react';
import Image from '../../Image.jsx';
import ss from './FlipText.module.scss';
export default function FlipText({ text, imgSrc, stylesText, stylesImg }) {
  const [isText, setIsText] = useState(true);
  return isText ? (
    <span
      className={ss.text}
      onClick={() => setIsText(false)}
      style={stylesText}
    >
      {text}
    </span>
  ) : (
    <div className={ss.img_container} onClick={() => setIsText(true)}>
      <Image
        src={imgSrc}
        alt={imgSrc}
        style={stylesImg}
        onClick={(e) => e.stopPropagation()}
      />
      <br />
      <p>{text}</p>
    </div>
  );
}
