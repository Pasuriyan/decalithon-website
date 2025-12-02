import React from 'react';
import Sign from '../assets/Sign.webp';

export default function Signin() {

  const handleNext = () => {
    alert("Sign Successfully"); 
  };

  return (
    <div className='top'>
      <img src={Sign} className='img' alt="Sign" />
      <div className='top2'>
        <h1>Login</h1><br />
        <h2>E-mail</h2> <br/>
        <h3>Enter an email address</h3> <br />
        <input type="text" placeholder='Enter a Email' className='box' /><br /><br />
        <button className='btn' onClick={handleNext}>NEXT</button> <br /> <br />
        <h3>It's Better when you're signed in</h3>
        <ul>
          <li>Exclusive Deals and Sporty Rewards</li>
          <li>Personalised Experiences</li> 
          <li>Faster Checkout</li>
          <li>Easy Returns/Exchange</li>
        </ul>
      </div>
    </div>
  );
}
