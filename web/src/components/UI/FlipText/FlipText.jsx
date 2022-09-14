import React, { useState } from 'react';
import Image from '../../Image.jsx';
import ss from './FlipText.module.scss';
export default function FlipText({ text }) {
  const [isText, setIsText] = useState(true);
  return isText ? (
    <span className={ss.text} onClick={() => setIsText(false)}>
      {text}
    </span>
  ) : (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: 0,
        display: 'flex',
        backgroundColor: ' rgb(0, 0, 0, 0.5)',
      }}
      onClick={() => setIsText(true)}
    >
      <Image
        src="https://works.doklad.ru/images/rwBpE1CupAs/68be508f.gif"
        alt={'Сопротивление формула'}
        style={{
          width: '10%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          background: 'lightgreen',
          margin: 'auto',
          alignItems: 'center',
          zIndex: 1,
        }}
        onDoubleClick={() => setIsText(true)}
      />
    </div>
  );
}
