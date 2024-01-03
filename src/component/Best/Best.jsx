import React, { useState } from 'react';
import './Best.css'
import pic from '../../assets/st.jpg'
import Card from 'react-bootstrap/Card';
const Best = () => {
const[cards,setcards]=useState([
    {
        id:1,
        imgd:pic,
        name:"Tamil",
    },
    {
        id:2,
        imgd:pic,
        name:"English",
    },
    {
        id:3,
        imgd:pic,
        name:"Hindi",
    },
    {
        id:4,
        imgd:pic,
        name:"Telugu",
    },

])

    return (
        <div className='bestfull'>
            <h2 className='heading'>Choose Language</h2>
            
<div className='cardone'>
{
cards.map((gg,i)=>(
<div className='imgdubba' key={i}>
           <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={gg.imgd} />
      <Card.Body className='cardbody'>
        <Card.Title className='cardname'>{gg.name}</Card.Title>
      </Card.Body>
    </Card>  
</div>
))}

</div>
        </div>
    );
}

export default Best;
