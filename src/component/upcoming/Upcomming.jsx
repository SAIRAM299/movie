import React, { useState } from 'react';
import "./Upcomming.css"
import one from '../../assets/upmov/1.jpg'
import two from '../../assets/upmov/2.jpg'
import three from '../../assets/upmov/3.jpg'
import four from '../../assets/upmov/4.jpg'
import five from '../../assets/upmov/5.jpg'
import six from '../../assets/upmov/6.jpg'
import seven from '../../assets/upmov/7.jpg'
import eight from '../../assets/upmov/8.jpg'
import nine from '../../assets/upmov/9.jpg'
import ten from '../../assets/upmov/10.jpg'
const Upcomming = () => {
const[show,setshow]=useState(false)
const handsubmit=()=>{
    setshow(!show)
}

    return (
        <div>
            <div className='upbox'>
<div className='upname'>
<h2 className='upna'>Upcomming Movie</h2>
</div>   
<div className='upmovbox'>
    <div className='upmov'>
<img src={one} className='upimg'/>
<img src={two} className='upimg'/>
<img src={three} className='upimg'/>
<img src={four} className='upimg'/>
<img src={five} className='upimg'/>
{show&&
<>
<img src={six} className='upimg'/>
<img src={seven} className='upimg'/>
<img src={eight} className='upimg'/>
<img src={nine} className='upimg'/>
<img src={ten} className='upimg'/>
</>
}
<div className='read'>
<button className='readna' onClick={handsubmit} >{!show ?"READ MORE":"READ LESS"}</button>
</div>
    </div>
</div>
            </div>
        </div>
    );
}

export default Upcomming;
