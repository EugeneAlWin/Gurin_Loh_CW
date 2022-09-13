import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button.jsx';
import ss from './MainPage.module.scss';
export default function MainPage() {
  return (
    <div className={ss.container}>
      <h1 className={ss.h1}>Курсовой проект</h1>
      <h3 className={ss.h3}>
        Зависимость электрической сопротивляемости металлов от температуры
      </h3>
      <Button content={<Link to="/theory">К теории</Link>} />
    </div>
  );
}
