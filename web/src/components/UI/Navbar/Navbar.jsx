import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
export default function Navbar() {
  return (
    <div className={cls.navbar}>
      <nav>
        <ul className={cls.list}>
          <li className={cls.list_item}>
            <Link to="/">Главная страница</Link>
          </li>
          <li className={cls.list_item}>
            <Link to="/theory">Теоретические сведения</Link>
          </li>
          <li className={cls.list_item}>
            <Link to="/structure">Структура установки</Link>
          </li>
          <li className={cls.list_item}>
            <Link to="/simulator">Симулятор установки</Link>
          </li>
          <li className={cls.list_item}>
            <div className={cls.contacts_btn}>
              <Link to="/contacts">Контакты</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
