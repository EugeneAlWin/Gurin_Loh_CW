import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button.jsx';
import ss from './MainPage.module.scss';
export default function MainPage() {
  return (
    <div className={ss.container}>
      <h2 className={ss.h1}>МИНИСТЕРСТВО ОБРАЗОВАНИЯ РЕСПУБЛИКИ БЕЛАРУСЬ</h2>
      <h3 className={ss.h3}>
        Учреждение образования "БЕЛОРУССКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНОЛОГИЧЕСКИЙ
        УНИВЕРСИТЕТ"
      </h3>
      <h1 className={ss.h1}>Курсовой проект</h1>
      <h3 className={ss.h3}>
        Зависимость электрической сопротивляемости металлов от температуры
      </h3>
      <div
        style={{
          textAlign: 'right',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '100%',
          padding: '0 2%',
        }}
      >
        <h3 className={ss.h4}>Выполнил:</h3>
        <h3 className={ss.h4}>Гончаревич Евгений Витальевич</h3>
        <h3 className={ss.h4}>Студент ФИТ 3 курс 1 группа</h3>
      </div>
      <br />
      <Button content={<Link to="/theory">К теории</Link>} />
    </div>
  );
}
