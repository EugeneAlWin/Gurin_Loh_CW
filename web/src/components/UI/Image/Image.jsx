import React from 'react';
export default function Image({
  src,
  classNameImg,
  description,
  classNameImgDescr,
  stylesImg = null,
  stylesText = null,
  ...props
}) {
  return (
    <>
      <img
        src={src}
        alt={src}
        style={stylesImg}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1.0)')}
        className={classNameImg}
        {...props}
      ></img>
      {description && (
        <p className={classNameImgDescr} style={stylesText}>
          {description}
        </p>
      )}
    </>
  );
}
