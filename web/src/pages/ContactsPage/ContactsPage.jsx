import React from 'react';
import Image from '../../components/Image.jsx';
import ILoveGourine from '../../img/ILoveGourine.jpg';
export default function ContactsPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      <Image src={ILoveGourine} alt="Гурин крутой" style={{ width: '25%' }} />
      <br /> <br />
      <span
        style={{
          color: 'white',
          fontSize: '22pt',
        }}
      >
        Гончаревич Евгений Витальевич
      </span>
      <br />
      <span
        style={{
          color: 'white',
          fontSize: '18pt',
        }}
      >
        Исит 3-1
      </span>
    </div>
  );
}
