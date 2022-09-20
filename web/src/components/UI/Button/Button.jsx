import React from 'react';
import ss from './Button.module.scss';
export default function Button({ content }) {
  return <button className={ss.mybutton}>{content}</button>;
}
