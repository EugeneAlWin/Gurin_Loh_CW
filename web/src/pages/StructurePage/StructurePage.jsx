import React from 'react';
import Image from '../../components/UI/Image/Image.jsx';
import Installation from '../../img/Installation.jpg';
import ss from './StructurePage.module.scss';
export default function StructurePage() {
  return (
    <div className={ss.container}>
      <h1>Структура и описание установки </h1>
      <Image src={Installation} classNameImg={ss.img} />
    </div>
  );
}
