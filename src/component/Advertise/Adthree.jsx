import React from 'react';
import './Adthree.css'
import c from '../../assets/ad/c.png'
import e from '../../assets/ad/e.png'
import m from '../../assets/ad/m.png'
import o from '../../assets/ad/o.png'
import p from '../../assets/ad/p.png'
import s from '../../assets/ad/s.png'
import { Carousel } from 'react-carousel3';
const Adthree = () => {
    const style = {
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
      };
    return (
        <div className='bod'>
              <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background:  'rgb(30, 28, 28)',
    }}
  >
    <Carousel height={300} width={'100%'} yOrigin={43} xOrigin={680} yRadius={50} autoPlay={false}>
      <div key={1} style={style}>
        <img alt="" src={c} className='ro' />
      </div>
      <div key={2} style={style}>
        <img alt=""  src={e} className='ro' />
      </div>
      <div key={3} style={style}>
        <img alt="" src={m} className='ro'/>
      </div>
      <div key={4} style={style}>
        <img alt="" src={o} className='ro'/>
      </div>
      <div key={5} style={style}>
        <img alt="" src={p} className='ro'/>
      </div>
      <div key={6} style={style}>
        <img alt="" src={s}className='ro' />
      </div>
    </Carousel>
  </div>
        </div>
    );
}

export default Adthree;
