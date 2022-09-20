import React from 'react';
import Image from '../../components/Image.jsx';
import FlipText from '../../components/UI/FlipText/FlipText.jsx';
import ss from './TheoryPage.module.scss';
import CoeffOfRessistance from '../../img/CoeffOfResistance.png';
import ResisDepend from '../../img/ResisDepend.jpg';
import Schema from '../../img/Schema.jpg';
import Resistance from '../../img/Resistance.jpg';

export default function TheoryPage() {
  const a = {
    width: '10%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    background: 'lightgreen',
    alignItems: 'center',
    zIndex: 1,
  };
  return (
    <div className={ss.container}>
      <h1 className={ss.head}>Теоретические сведения</h1>
      <div className={ss.body}>
        <FlipText
          text="Сопротивление металла "
          stylesImg={a}
          imgSrc={Resistance}
        />
        зависит от нескольких переменных: рода вещества (удельного сопротивления
        ρ), длины l и площади поперечного сечения S
        <br /> <br />
        Удельное сопротивление вещества металлического проводника зависит от
        концентрации свободных носителей заряда и частоты их столкновений с
        ионами кристаллической решётки, совершающими колебательные движения
        около положений устойчивого равновесия.
        <br /> <br />В металлических проводниках концентрация свободных
        электронов практически постоянна для данного проводника и не зависит от
        температуры. Однако частота столкновений свободных электронов с ионами
        кристаллической решётки с ростом температуры возрастает. Это приводит к
        возрастанию удельного сопротивления металлического проводника при
        повышении температуры. <br />
        <br />
        При описании температурной зависимости удельного сопротивления
        проводника вводят температурный коэффициент сопротивления α, численно
        равный относительному изменению удельного сопротивления вещества
        проводника при приращении его температуры на 1 К: <br />
        <br />
        <Image
          src={CoeffOfRessistance}
          alt="Картинка"
          // style={{
          //   background: '#069157',
          //   margin: '0 auto',
          //   display: 'flex',
          //   width: '15vw',
          // }}
          description="Формула 1. Температурный коэффициент сопротивления "
        />
        <br />
        где ρ0 и ρ — удельные сопротивления вещества проводника соответственно
        при температуре T0 = 273 К (0 °С) и данной температуре Т. <br />
        Из формулы (1) следует, что
        <mark style={{ background: '#069157', color: 'black' }}>
          ρ = ρ0(1 + αΔT)
        </mark>
        , где ΔT = T - T0 — приращение абсолютной температуры проводника,
        которое совпадает с приращением температуры по шкале Цельсия ΔT = Δt.
        Таким образом, удельное сопротивление вещества металлического проводника
        возрастает с увеличением температуры. Зависимость на графике: <br />
        <br />
        <Image
          src={ResisDepend}
          alt="Картинка"
          style={{
            background: 'lightgreen',
            margin: '0 auto',
            display: 'flex',
            width: '15vw',
          }}
          description="Рис 1. График зависимости удельного сопротивления от температуры"
        />
        <br />
        <Image
          src={Schema}
          alt="картинка 2"
          style={{
            margin: '0 auto',
            display: 'flex',
            width: '15vw',
          }}
          description="Рис 2. Пример установки"
        />
      </div>
    </div>
  );
}
