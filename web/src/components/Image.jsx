import React from 'react';

export default function Image({ alt, description, ...props }) {
  return (
    <>
      <img
        alt={alt}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1.0)')}
        {...props}
      ></img>
      {description && (
        <p style={{ textAlign: 'center', marginTop: '1%' }}>{description}</p>
      )}
    </>
  );
}
