import React from 'react';
import './Header.css';
import img from './../../assets/this7.jpg';
import image2 from './../../assets/this4.jpeg';
import image3 from './../../assets/this5.PNG';
import image4 from './../../assets/this6.PNG';

const Header = ()=>{
  return(
   <header>
    <div className='container' id='about-us'>
      <div className='row'>
    <div className='col-md-6' >
    <h2>The falcon lounge  Restaurant 👨‍🍳 </h2>
    <p>The Falcon Lounge 🦅 vous invite à un voyage atypique dans la nature absolue . </p>
    <p>Venez déguster nos assiettes savoureuses et découvrir un lieu unique au Monde pour renouer avec les moments forts et les échanges entre amis, entre famille, entre collègues..</p>
    <button>
      <a href='#blog'>Learn More </a>
       </button><hr/>
    <img className='image2' src={image2} title='image2' />
    <img className='image2' src={image3} title='image3' />
    <img className='image2' src={image4} title='image4' />

    </div>
    <div className='images'>
    <img src={img} title='img' />

    </div>
    <div className='col-md-6' >
    </div>
    </div>
  
    </div>
   </header>
  )
}
export default Header;