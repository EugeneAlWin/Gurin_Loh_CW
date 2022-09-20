import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
export default function Navbar() {
  const LINKS = [
    ['/', 'Главная страница'],
    ['/theory', 'Теоретические сведения'],
    ['/structure', 'Структура установки'],
    ['/simulator', 'Симулятор установки'],
    ['/contacts', 'Контакты'],
  ];
  return (
    <div className={cls.navbar}>
      <nav>
        <ul className={cls.list}>
          {LINKS.map((link) => (
            <li className={cls.list_item} key={link[0] + link[1]}>
              <Link to={link[0]}>{link[1]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
