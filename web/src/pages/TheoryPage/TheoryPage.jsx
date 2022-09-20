import React from 'react';
import Image from '../../components/UI/Image/Image.jsx';
import FlipText from '../../components/UI/FlipText/FlipText.jsx';
import Button from '../../components/UI/Button/Button.jsx';
import { Link } from 'react-router-dom';
import ss from './TheoryPage.module.scss';
import CoeffOfRessistance from '../../img/CoeffOfResistance.png';
import ResisDepend from '../../img/ResisDepend.jpg';
import Schema from '../../img/Schema.jpg';
import Resistance from '../../img/Resistance.jpg';
import Kelvin from '../../img/Kelvin.jpg';
import Om from '../../img/Om.jpg';
import Wheel from '../../img/Wheel.png';
import DoubleBr from '../../components/DoubleBr.jsx';
export default function TheoryPage() {
  return (
    <div className={ss.container}>
      <h1 className={ss.head}>Теоретические сведения</h1>
      <div className={ss.body}>
        Зако́н{' '}
        <FlipText
          text="О́ма"
          classNameText={ss.flip_text}
          imgSrc={Om}
          classNameImg={ss.img_cover}
          classNameImgDescr={ss.img_descr}
          imgDescr={
            'Гео́рг Си́мон Ом — немецкий физик. Он вывел теоретически и подтвердил на опыте закон, выражающий связь между силой тока в цепи, напряжением и сопротивлением. Его именем названа единица электрического сопротивления.Член Баварской академии наук, иностранный член Лондонского королевского общества.'
          }
        />{' '}
        — эмпирический физический закон, определяющий связь электродвижущей силы
        источника с силой тока, протекающего в проводнике, и сопротивлением
        проводника (металла).{' '}
        <FlipText
          text="(Колесо Ома)"
          classNameText={ss.flip_text}
          imgSrc={Wheel}
          classNameImg={ss.img_cover}
          classNameImgDescr={ss.img_descr}
          imgDescr={
            'Несмотря на то, что этот круг чаще всего называют «колесом закона Ома», здесь объединены два закона: Ома и Джоуля — Ленца.'
          }
        />
        <DoubleBr />
        <FlipText
          text="Сопротивление металла "
          classNameText={ss.flip_text}
          imgSrc={Resistance}
          classNameImg={ss.img_cover}
          classNameImgDescr={ss.img_descr}
        />
        зависит от нескольких переменных: рода вещества (удельного сопротивления
        ρ), длины l и площади поперечного сечения S.
        <DoubleBr />
        Удельное сопротивление вещества металлического проводника зависит от
        концентрации свободных носителей заряда и частоты их столкновений с
        ионами кристаллической решётки, совершающими колебательные движения
        около положений устойчивого равновесия.
        <DoubleBr />
        В металлических проводниках концентрация свободных электронов
        практически постоянна для данного проводника и не зависит от
        температуры. Однако частота столкновений свободных электронов с ионами
        кристаллической решётки с ростом температуры возрастает. Это приводит к
        возрастанию удельного сопротивления металлического проводника при
        повышении температуры.
        <DoubleBr />
        При описании температурной зависимости удельного сопротивления
        проводника вводят температурный коэффициент сопротивления α, численно
        равный относительному изменению удельного сопротивления вещества
        проводника при приращении его температуры на 1{' '}
        <FlipText
          text="Кельвин"
          classNameText={ss.flip_text}
          imgSrc={Kelvin}
          classNameImg={ss.img_cover}
          classNameImgDescr={ss.img_descr}
          stylesImg={{ width: '40%' }}
          imgDescr={'Шкала Кельвина'}
        />
        :
        <DoubleBr />
        <Image
          src={CoeffOfRessistance}
          classNameImg={ss.imgg}
          description="Формула 1. Температурный коэффициент сопротивления "
          classNameImgDescr={ss.img_descr}
        />
        <br />
        где ρ0 и ρ — удельные сопротивления вещества проводника соответственно
        при температуре T0 = 273 К (0 °С) и данной температуре Т. Из формулы (1)
        следует, что <mark className={ss.mark}>ρ = ρ0(1 + αΔT)</mark>, где ΔT =
        T - T0 — приращение абсолютной температуры проводника, которое совпадает
        с приращением температуры по шкале Цельсия ΔT = Δt. Таким образом,
        удельное сопротивление вещества металлического проводника возрастает с
        увеличением температуры. Зависимость на графике: <br />
        <br />
        <Image
          src={ResisDepend}
          classNameImg={ss.imgg}
          description="Рис 1. График зависимости удельного сопротивления от температуры"
          classNameImgDescr={ss.img_descr}
        />
        <br />
        <Image
          src={Schema}
          classNameImg={ss.imgg}
          description="Рис 2. Пример установки"
          classNameImgDescr={ss.img_descr}
        />
        <DoubleBr />
        <div className={ss.button_container}>
          <Button content={<Link to="/structure">К структуре</Link>} />
        </div>
        <DoubleBr />
      </div>
    </div>
  );
}
