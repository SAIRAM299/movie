import React from 'react';
import  './Home.css'
import Badge from 'react-bootstrap/Badge';
import img1 from '../../assets/mon.jpg'
import img2 from '../../assets/st.jpg'
import img3 from '../../assets/got.webp'
import { IoPlay } from "react-icons/io5";
import { IoMdBookmark } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {

    return (
        <div  className='fully'>

              <Carousel className='dubba'>
      <Carousel.Item className='imgebox'>
      <img src={img1} className='imn'/>
        <Carousel.Caption>
          <h2>MoneyHiest</h2>
          <p>Gener: Crime Heist Action Thriller Mystry Character Drama</p>
          <p>
        IMBD Rating <Badge  bg='warning'>8.1</Badge>
      </p>
      <button className='bts'><IoPlay className='ic'/>Trailer</button>
      <button className='bts'><IoMdBookmark className='ic'/>Book</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgebox'>
      <img src={img2} className='imn'/>
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
          IMBD Rating <Badge bg='warning'>7.9</Badge>
      </p>
      <button className='bts'><IoPlay className='ic'/>Trailer</button>
      <button className='bts'><IoMdBookmark className='ic'/>Book</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgebox'>
      <img src={img3} className='imn'/>
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <p>
          IMBD Rating <Badge  bg='warning'>8.2</Badge>
      </p>
      <button className='bts'><IoPlay className='ic'/>Trailer</button>
      <button className='bts'><IoMdBookmark className='ic'/>Book</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Home;
